# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [User](#1-user)
    - [POST - /users](#11-criação-de-usuário)
    - [POST - /login](#12-login-de-usuário)
    - [GET - /users](#13-listando-usuários)
	- [PATCH - /users/:id](#14-update-usuário)
	- [DELETE - /users/:id](#15-delete-usuário)
- [Contacts](#2-contacts)
	- [POST - /contacts](#21-criação-de-contact)
	- [GET - /contacts](#22-listando-contacts)
	- [PATCH - /contacts/:id](#23-update-contact)
	- [DELETE - /contact/:id](#25-delete-contact)

---

## 1. **User**
[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /users     | Criação de um usuário.                  |
| POST     | /login     | Login de um usuário.                  |
| GET      | /users     | Lista todos os usuários.                 |
| PATCH      | /users/:id     | Update do usuário. 
| DELETE      | /users/:id     | Delete de um usuário. 

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/user`

### Corpo da Requisição:
```json
{
	"fullname": "Fulano",
	"email": "fulano@mail.com",
	"password": "1234",
	"phone": 999999999
}
```

### 1.2. **Login usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/login`

### Corpo da Requisição:
```json
{
	"email": "fulano@mail.com",
	"password": "1234",
}
```

### 1.3. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
GET /users
```

### 1.4. **Update usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Corpo da Requisição:
```json
{
	"name": "Novo nome",
	"email": "Novo email",
	"password": "Nova senha",
  "phone": "Novo telefone"
}
```

### 1.5. **Delete usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
DELETE /users/:id
```

## 2. **Contacts**
[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /contacts     | Criação de um contato.                  |
| GET     | /contacts     | Listando contatos.                  |
| PATCH      | /contacts/:id     | Update de um contato.                 |
| DELETE      | /contacts/:id     | Delete de um contato. 

---

### 2.1. **Criação de Contato**

[ Voltar para os Endpoints ](#5-endpoints)

### `/contacts`

### Corpo da Requisição:
```json
{
	"fullname": "Fulano",
	"email": "fulano@email.com",
	"phone": 999999999
}
```

### 2.2. **Listando Contatos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/contacts`

### Exemplo de Request:
```
GET /contacts
```

### 2.3. **Update contato**

[ Voltar aos Endpoints ](#5-endpoints)

### `/contacts/:id`

### Corpo da Requisição:
```json
{
	"fullname": "Fulano",
	"email": "fulano@email.com",
	"phone": 999999999
}
```

### 2.5. **Delete contato**

[ Voltar aos Endpoints ](#5-endpoints)

### `/contacts/:id`

### Exemplo de Request:
```
DELETE /contacts/:id
```
