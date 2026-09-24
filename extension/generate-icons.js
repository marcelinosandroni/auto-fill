#!/usr/bin/env node

/**
 * Script para gerar ícones PNG a partir do SVG
 * Execute: node generate-icons.js
 * 
 * Requer: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 128];
const svgPath = path.join(__dirname, 'icons', 'icon.svg');
const iconsDir = path.join(__dirname, 'icons');

async function generateIcons() {
  console.log('🎨 Gerando ícones PNG...\n');

  const svgBuffer = fs.readFileSync(svgPath);

  for (const size of sizes) {
    const outputPath = path.join(iconsDir, `icon-${size}.png`);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`✓ icon-${size}.png criado`);
  }

  console.log('\n✅ Todos os ícones foram gerados com sucesso!');
}

generateIcons().catch(err => {
  console.error('❌ Erro ao gerar ícones:', err.message);
  process.exit(1);
});
