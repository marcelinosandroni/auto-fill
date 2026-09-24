# 🧪 Testing Strategy

## Overview
Estratégia de testes para garantir qualidade e confiabilidade do AutoFill Guardian em todas as camadas.

## Testing Pyramid

```
        ╱╲
       ╱  ╲      E2E Tests (10%)
      ╱────╲     Cypress + Chrome Extension Testing
     ╱      ╲    
    ╱────────╲   Integration Tests (20%)
   ╱          ╲  Jest + MSW + Testing Library
  ╱────────────╲
 ╱              ╲ Unit Tests (70%)
╱________________╲ Jest + React Testing Library
```

## Unit Tests

### Coverage Targets
- **Client**: > 80% coverage
- **Server**: > 90% coverage
- **Extension**: > 75% coverage (harder to test)

### Client Unit Tests
```typescript
// Example: CaptureItem component
describe('CaptureItem', () => {
  it('renders masked code by default', () => {
    render(<CaptureItem capture={mockCapture} />);
    expect(screen.getByText('••••••')).toBeInTheDocument();
  });

  it('reveals code when reveal button clicked', async () => {
    render(<CaptureItem capture={mockCapture} />);
    const revealButton = screen.getByRole('button', { name: /revelar/i });
    await user.click(revealButton);
    expect(screen.getByText('847291')).toBeInTheDocument();
  });

  it('copies code to clipboard when copy button clicked', async () => {
    const mockCopy = jest.fn();
    Object.assign(navigator, { clipboard: { writeText: mockCopy } });
    
    render(<CaptureItem capture={mockCapture} />);
    const copyButton = screen.getByRole('button', { name: /copiar/i });
    await user.click(copyButton);
    
    expect(mockCopy).toHaveBeenCalledWith('847291');
    expect(screen.getByText(/copiado/i)).toBeInTheDocument();
  });

  it('shows relative time', () => {
    const twoMinutesAgo = Date.now() - 120000;
    render(<CaptureItem capture={{ ...mockCapture, capturedAt: twoMinutesAgo }} />);
    expect(screen.getByText('2 min atrás')).toBeInTheDocument();
  });

  it('shows "used" badge when capture was used', () => {
    render(<CaptureItem capture={{ ...mockCapture, usedAt: Date.now() }} />);
    expect(screen.getByText(/usado/i)).toBeInTheDocument();
  });
});
```

### Server Unit Tests
```typescript
// Example: CaptureOTPUseCase
describe('CaptureOTPUseCase', () => {
  let useCase: CaptureOTPUseCase;
  let mockRepo: jest.Mocked<ICaptureRepository>;

  beforeEach(() => {
    mockRepo = {
      save: jest.fn(),
      findByUserId: jest.fn(),
      delete: jest.fn(),
    };
    useCase = new CaptureOTPUseCase(mockRepo);
  });

  it('saves capture with encrypted code', async () => {
    const result = await useCase.execute({
      userId: 'user-123',
      code: '847291',
      source: 'gmail',
      sourceDetail: 'noreply@google.com',
    });

    expect(mockRepo.save).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 'user-123',
        code: expect.any(String), // encrypted
        codeHash: expect.any(String),
        source: 'gmail',
      })
    );
    expect(result.success).toBe(true);
  });

  it('throws error if code is empty', async () => {
    await expect(
      useCase.execute({
        userId: 'user-123',
        code: '',
        source: 'gmail',
        sourceDetail: 'noreply@google.com',
      })
    ).rejects.toThrow('Code is required');
  });

  it('calculates expiration time for 6-digit OTP', async () => {
    const result = await useCase.execute({
      userId: 'user-123',
      code: '847291',
      source: 'gmail',
      sourceDetail: 'noreply@google.com',
    });

    expect(result.capture.expiresAt).toBeDefined();
    const expiresIn = result.capture.expiresAt - Date.now();
    expect(expiresIn).toBeGreaterThan(9 * 60 * 1000); // ~10 minutes
    expect(expiresIn).toBeLessThan(11 * 60 * 1000);
  });
});
```

### Extension Unit Tests
```typescript
// Example: OTP extraction
describe('extractOTP', () => {
  it('extracts 6-digit numeric code', () => {
    expect(extractOTP('Your code is 847291')).toBe('847291');
  });

  it('extracts 4-digit numeric code', () => {
    expect(extractOTP('Code: 1234')).toBe('1234');
  });

  it('extracts alphanumeric code', () => {
    expect(extractOTP('Verify: ABC123')).toBe('ABC123');
  });

  it('returns null if no code found', () => {
    expect(extractOTP('Hello world')).toBeNull();
  });

  it('prefers code in context of verification', () => {
    const text = 'Your verification code is 847291. Do not share. Another number: 123456';
    expect(extractOTP(text)).toBe('847291');
  });

  it('handles Google format (G-XXXXXX)', () => {
    expect(extractOTP('G-123456 is your Google code')).toBe('123456');
  });
});

// Example: Field detection
describe('detectOTPFields', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('detects input with autocomplete="one-time-code"', () => {
    document.body.innerHTML = '<input autocomplete="one-time-code" />';
    const fields = detectOTPFields();
    expect(fields).toHaveLength(1);
  });

  it('detects input with name containing "otp"', () => {
    document.body.innerHTML = '<input name="otp_code" />';
    const fields = detectOTPFields();
    expect(fields).toHaveLength(1);
  });

  it('detects input with maxlength="6" and inputmode="numeric"', () => {
    document.body.innerHTML = '<input maxlength="6" inputmode="numeric" />';
    const fields = detectOTPFields();
    expect(fields).toHaveLength(1);
  });

  it('returns empty array if no OTP fields found', () => {
    document.body.innerHTML = '<input type="text" name="username" />';
    const fields = detectOTPFields();
    expect(fields).toHaveLength(0);
  });
});
```

## Integration Tests

### Client Integration
```typescript
// Example: Capture flow
describe('Capture Flow Integration', () => {
  it('captures code from notification and shows in popup', async () => {
    // Setup MSW to mock Chrome APIs
    const server = setupServer(
      // Mock chrome.runtime.sendMessage
    );

    // Simulate notification
    await simulateNotification({
      title: 'Google',
      message: 'Your verification code is 847291',
    });

    // Open popup
    render(<Popup />);

    // Wait for capture to appear
    await waitFor(() => {
      expect(screen.getByText('847291')).toBeInTheDocument();
    });

    // Verify capture was saved
    const captures = await getCapturesFromStorage();
    expect(captures).toHaveLength(1);
    expect(captures[0].code).toBe('847291');
  });
});
```

### Server Integration
```typescript
// Example: API integration
describe('Captures API Integration', () => {
  it('creates capture and returns encrypted code', async () => {
    const response = await request(app)
      .post('/api/v1/captures')
      .set('Authorization', `Bearer ${validToken}`)
      .send({
        code: '847291',
        source: 'gmail',
        sourceDetail: 'noreply@google.com',
      });

    expect(response.status).toBe(201);
    expect(response.body.capture).toBeDefined();
    expect(response.body.capture.code).toBeDefined();
    expect(response.body.capture.code).not.toBe('847291'); // encrypted
  });

  it('returns 401 if not authenticated', async () => {
    const response = await request(app)
      .post('/api/v1/captures')
      .send({
        code: '847291',
        source: 'gmail',
        sourceDetail: 'noreply@google.com',
      });

    expect(response.status).toBe(401);
  });
});
```

## E2E Tests

### Extension E2E
```typescript
// Using Chrome Extension Testing framework
describe('Extension E2E', () => {
  it('completes onboarding flow', async () => {
    // Install extension
    const extensionId = await installExtension();

    // Open popup
    const popup = await openExtensionPopup(extensionId);

    // Step 1: Welcome
    await popup.waitForSelector('[data-testid="welcome-screen"]');
    await popup.click('[data-testid="start-button"]');

    // Step 2: Permissions
    await popup.waitForSelector('[data-testid="permissions-screen"]');
    await popup.click('[data-testid="allow-button"]');

    // Step 3: Sources
    await popup.waitForSelector('[data-testid="sources-screen"]');
    await popup.click('[data-testid="gmail-toggle"]');
    await popup.click('[data-testid="continue-button"]');

    // Step 4: Success
    await popup.waitForSelector('[data-testid="success-screen"]');
    await popup.click('[data-testid="start-using-button"]');

    // Verify popup shows main content
    await popup.waitForSelector('[data-testid="capture-list"]');
  });

  it('auto-fills OTP code on GitHub', async () => {
    // Navigate to GitHub 2FA page
    await page.goto('https://github.com/login/device');

    // Simulate OTP notification
    await simulateNotification({
      title: 'GitHub',
      message: 'Your code is 847291',
    });

    // Wait for auto-fill
    const codeInput = await page.waitForSelector('input[name="otp"]');
    await expect(codeInput).toHaveValue('847291');

    // Verify success toast
    await page.waitForSelector('.autofill-guardian-toast.success');
  });
});
```

### Landing Page E2E
```typescript
describe('Landing Page E2E', () => {
  it('completes full user journey', async () => {
    await page.goto('/');

    // Hero section
    await expect(page.locator('h1')).toContainText('Nunca mais perca um código OTP');

    // Click install button
    await page.click('text=Instalar Grátis no Chrome');

    // Verify redirect to Chrome Web Store
    await page.waitForURL('https://chrome.google.com/webstore/**');
  });
});
```

## Test Organization

### File Structure
```
client/
├── __tests__/
│   ├── unit/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│   ├── integration/
│   └── e2e/
└── src/
    └── __mocks__/

server/
├── __tests__/
│   ├── unit/
│   │   ├── use-cases/
│   │   └── repositories/
│   ├── integration/
│   └── fixtures/
└── src/

extension/
├── __tests__/
│   ├── unit/
│   │   ├── background/
│   │   ├── content-script/
│   │   └── popup/
│   └── e2e/
└── src/
```

### Test Utilities
```typescript
// client/__tests__/utils/test-utils.tsx
import { render, RenderOptions } from '@testing-library/react';
import { DependencyProvider } from '@/providers/DependencyProvider';

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: DependencyProvider, ...options });
}

export * from '@testing-library/react';
export { customRender as render };

// Mock Chrome APIs
export const mockChrome = {
  runtime: {
    sendMessage: jest.fn(),
    onMessage: {
      addListener: jest.fn(),
    },
  },
  storage: {
    local: {
      get: jest.fn(),
      set: jest.fn(),
    },
  },
  notifications: {
    onCreated: {
      addListener: jest.fn(),
    },
  },
};

global.chrome = mockChrome as any;
```

## CI/CD Integration

### GitHub Actions
```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test-client:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: cd client && npm ci
      - run: cd client && npm run test:unit
      - run: cd client && npm run test:integration
      - run: cd client && npm run test:e2e

  test-server:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: cd server && npm ci
      - run: cd server && npm run test:unit
      - run: cd server && npm run test:integration

  test-extension:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: cd extension && npm ci
      - run: cd extension && npm run test:unit
```

## Testing Best Practices

### DO
- ✅ Test behavior, not implementation
- ✅ Use meaningful test descriptions
- ✅ Keep tests independent and isolated
- ✅ Mock external dependencies (APIs, Chrome APIs)
- ✅ Use factories for test data
- ✅ Test edge cases and error scenarios
- ✅ Aim for high coverage but focus on critical paths

### DON'T
- ❌ Test implementation details
- ❌ Create brittle tests that break on refactoring
- ❌ Share state between tests
- ❌ Ignore failing tests
- ❌ Over-mock (test real behavior when possible)
- ❌ Write tests for the sake of coverage

## Test Data Factories

```typescript
// Factories for consistent test data
export const captureFactory = (overrides?: Partial<CapturedCode>): CapturedCode => ({
  id: uuid(),
  userId: 'user-123',
  code: '847291',
  codeHash: 'hash-123',
  source: 'gmail',
  sourceDetail: 'noreply@google.com',
  type: 'otp',
  capturedAt: Date.now(),
  expiresAt: Date.now() + 600000,
  usedAt: undefined,
  site: undefined,
  deviceId: 'device-123',
  ...overrides,
});

export const userFactory = (overrides?: Partial<User>): User => ({
  id: uuid(),
  email: 'test@example.com',
  name: 'Test User',
  plan: 'free',
  createdAt: new Date(),
  lastLoginAt: new Date(),
  ...overrides,
});
```
