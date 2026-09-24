# Phase History

Este diretório armazena o resumo de cada fase concluída.

Quando todas as tarefas de uma fase no PLAN.md possuírem `[x]`:
1. Criar arquivo `phase-[numero]-finished.md` aqui
2. Deletar as tasks da fase em `specs/tasks/`
3. Limpar o PLAN.md

## Formato do Arquivo
```markdown
# ✅ Phase X - [Nome da Fase] - FINALIZADA

**Período:** [data início] → [data fim]
**Agente:** [nome do agente IA]

## O que foi feito
- Item 1
- Item 2

## Lições aprendidas
- ...

## Débito técnico gerado
- ...
```
