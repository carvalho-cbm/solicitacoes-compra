# Solicitações de Compra

Interface web para registro e acompanhamento de solicitações internas de compra.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Como rodar

1. Clone o repositório:

2. Abra o arquivo `index.html` diretamente no navegador.

   Ou, se tiver o VS Code com a extensão Live Server instalada:
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"

Não é necessário instalar nada ou rodar servidor.

## Funcionalidades

- Formulário com nome do solicitante, produto e valor
- Validação dos campos antes do envio
- Aprovação automática para valores até R$ 1.000,00
- Aguarda aprovação para valores acima de R$ 1.000,00
- Lista de solicitações enviadas com status visual
- Formulário limpo após cada envio

## Regras de negócio

| Valor | Status |
|-------|--------|
| Até R$ 1.000,00 | Aprovado automaticamente |
| Acima de R$ 1.000,00 | Aguardando aprovação |

## Estrutura
solicitacoes-compra/
├── index.html   → estrutura da página
├── style.css    → estilização
└── script.js    → lógica e validações
