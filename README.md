# Node API-REST

## 💻 Projeto

**[Node API-REST](https://github.com/AdrianoTobias/node-api-rest)**, é uma aplicação voltada ao desenvolvimento de serviços Web utilizando Node, englobando desde a construção de API's REST, até testes automatizados e o processo de deploy.

A aplicação visa os seguintes requisitos:

### Requisitos funcionais (RF)

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

### Regras de negócio (RN)

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;


É uma aplicação desenvolvida durante o **[MBA Fullstack](https://www.rocketseat.com.br/mba)**, provido pela **[Rocketseat](https://rocketseat.com.br/)**, em parceria com a **[Sirius Education](https://landing.sirius.education/home/)**.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Knex](https://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [Postgres](https://node-postgres.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Vitest](https://vitest.dev/)


## 🚀 Como executar

Clonar o projeto e acessar a pasta do mesmo:

```bash
$ git clone https://github.com/AdrianoTobias/node-api-rest.git
$ cd node-api-rest
```

Para iniciá-lo:
```bash
# Instalar as dependências
$ npm install

# Iniciar a aplicação
$ npm run dev
```
A aplicação estará disponível no endereço http://localhost:3333.

Para executar os testes (Vitest):
```bash
$ npm run test
```



[Adriano Tobias](https://github.com/AdrianoTobias)