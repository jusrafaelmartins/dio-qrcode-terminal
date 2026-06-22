> ℹ️ **Projeto base:** este projeto é um *fork* do projeto original criado por **[Felipe Aguiar (Felipão)](https://github.com/felipeAguiarCode)** — Coordenador de educação na **DIO**, no contexto do Bootcamp **Node.js Jornada Para o Futuro**. As melhorias e extensões implementadas sobre o projeto base estão descritas na seção [🚀 Melhorias Implementadas](#-melhorias-implementadas-requisitos-para-finalização-do-bootcamp-nodejs--jornada-para-o-futuro).

## 💻 Sobre o Projeto

Este projeto é um **kit de utilidades via linha de comando (CLI)** construído em Node.js, voltado para um e-commerce. Ele foi pensado para ser **escalável e extensível**, permitindo a adição de novas features com facilidade e seguindo uma organização por camadas (controller → service → utils).

Atualmente o kit oferece duas ferramentas:

1. **Gerador de QR Code** — a partir de um link informado pelo usuário, gera o QR Code em diferentes formatos:
   - **1** — Terminal grande
   - **2** — Terminal compacto (small)
   - **3** — Arquivo **PNG** (com o nome baseado em timestamp)
   - **4** — Ambos (PNG + terminal)
2. **Gerador de Senhas** — gera senhas aleatórias e **criptograficamente seguras** utilizando o módulo nativo `node:crypto`, totalmente configurável por variáveis de ambiente (tamanho e conjuntos de caracteres).

## 📚 Pré-requisitos de Habilidades e Níveis de Conhecimento

Antes de ingressar neste conteúdo, é necessário possuir conhecimento prévio nas seguintes áreas:

- Lógica de programação
- Javascript | Básico
- NodeJS | Básico
- ES Modules (`import`/`export`)
- Node Modules
- NPM, Packages, Dependencies
- Variáveis ambiente (`.env`)

## 🛠️ Habilidades e Sub-habilidades que vamos aprender neste conteúdo

- Como gerar QR Code com Node (no terminal e como arquivo PNG)
- Como gerar senhas com o módulo nativo `node:crypto` (`randomInt`)
- Como lidar com várias dependências de um projeto
- Como pensar em projetos por camadas (separation of concerns)
- Como estruturar um projeto em ES Modules
- Como carregar variáveis de ambiente nativamente com a flag `--env-file`

## 🎯 Objetivos e Resultados Esperados

Após a conclusão do curso/projeto, os estudantes estarão aptos a:

- Criar projetos Node.js que gerenciem múltiplas dependências
- Disponibilizar um kit de utilidades extensível via CLI
- Trabalhar com entrada de usuário (`prompt`) de forma validada
- Aplicar boas práticas (comparação estrita, validação e tratamento de erros)

## ⚙️ Como executar

> Requisito: **Node.js 20.6+** (necessário para a flag nativa `--env-file`).

```bash
# 1. Instalar as dependências
npm install

# 2. Configurar as variáveis de ambiente
cp .env.example .env   # edite os valores conforme sua necessidade

# 3. Executar o projeto
npm start
```

Ao iniciar, um menu solicita a escolha da ferramenta (`1` para QR Code ou `2` para Senha). No fluxo de QR Code, informe o link e o tipo desejado (1 a 4). Os arquivos PNG são salvos na raiz do projeto no padrão `qrcode-YYYY-MM-DD-HH-MM-SS.png`.

### Variáveis de ambiente (`.env`)

| Variável            | Descrição                                              | Padrão |
| ------------------- | ----------------------------------------------------- | ------ |
| `PASSWORD_LENGTH`   | Tamanho da senha gerada (número inteiro)              | `10`   |
| `UPPERCASE_LETTERS` | Inclui letras maiúsculas (`true`/`false`)             | —      |
| `LOWERCASE_LETTERS` | Inclui letras minúsculas (`true`/`false`)             | —      |
| `NUMBERS`           | Inclui números (`true`/`false`)                       | —      |
| `SPECIAL_CHARACTERS`| Inclui caracteres especiais (`true`/`false`)          | —      |

## 🗂️ Estrutura do Projeto

```
dio-qrcode-terminal/
├── docs/
│   └── arquitetura.tldr                              # Diagrama de arquitetura (tldraw)
├── src/
│   ├── index.js                                      # Entry point / menu principal (controller)
│   ├── prompts-schema/
│   │   ├── prompt-schema-main.js                     # Schema do menu de ferramentas
│   │   └── prompt-schema-qrcode.js                   # Schema do fluxo de QR Code
│   └── services/
│       ├── password/
│       │   ├── create.js                             # Orquestra a geração de senha
│       │   ├── handle.js                             # Lógica de geração da senha
│       │   └── utils/
│       │       └── permitted-characters.js           # Conjuntos de caracteres permitidos
│       └── qr-code/
│           ├── create.js                             # Orquestra o fluxo de QR Code
│           └── handle.js                             # Geração no terminal e em PNG
├── .env.example                                      # Exemplo de configuração
├── .gitignore
├── package.json
└── readme.md
```

## 🚀 Melhorias Implementadas (requisitos para finalização do Bootcamp Node.js — Jornada Para o Futuro)

Como parte dos requisitos para finalização do **Bootcamp Node.js Jornada Para o Futuro** (DIO), as seguintes melhorias foram implementadas em relação ao projeto base:

- **Geração de QR Code em PNG**: além do terminal, agora é possível salvar o QR Code como arquivo **PNG** (com timestamp no nome) e também gerar **ambos** os formatos em uma única execução.
- **Novo gerador de senhas**: ferramenta adicional que gera senhas com o módulo nativo `node:crypto` (`randomInt`), tornando a geração criptograficamente segura e configurável via `.env`.
- **Correção de bug de comparação (string vs número)**: a entrada do `prompt` chega como string; o uso de `parseInt(..., 10)` garante a comparação correta com os valores numéricos.
- **Comparação estrita (`===`)**: troca dos operadores `==` por `===` em todo o projeto.
- **Validação de entrada**: verificação com `Number.isNaN` e tratamento de opções inválidas.
- **Tratamento de erros**: uso de `try/catch` com mensagens amigáveis para o usuário.
- **ES Modules**: projeto em `"type": "module"`, utilizando `import/export`.
- **Carregamento nativo de `.env`**: uso de `node --env-file=.env` (sem necessidade do pacote `dotenv`).
- **Organização de código**: funções extraídas (`toTerminal`, `toPNG`), responsabilidades separadas por camadas e imports ordenados (recomendação do Biome).
