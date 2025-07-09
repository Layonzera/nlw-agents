# NLW Agents

Este projeto foi desenvolvido durante o evento NLW (Next Level Week) da Rocketseat.

## Tecnologias Utilizadas

- **Framework:** [Fastify](https://fastify.dev/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Validação de Schema:** [Zod](https://zod.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)

## Padrões de Projeto

O projeto segue uma estrutura organizada, separando as responsabilidades em diferentes diretórios, como `routes`, `db/schema`, e `env` para uma melhor manutenibilidade.

## Setup e Configuração

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd nlw-agents/server
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e preencha com as suas credenciais do banco de dados PostgreSQL.

```bash
cp .env.example .env
```

### 4. Executar as Migrations e Seed

Para criar as tabelas no banco de dados e popular com dados iniciais, execute o comando:

```bash
npm run db:seed
```

### 5. Iniciar o Servidor

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.
