# 📚 API REST - Livros e Autores

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)

API REST desenvolvida com **Node.js**, **Express** e **MongoDB Atlas**, seguindo boas práticas de arquitetura em camadas, separação de responsabilidades e tratamento centralizado de erros.

## 📝 Índice

- [Sobre o projeto](#-sobre-o-projeto)  
- [Tecnologias](#-tecnologias)  
- [Arquitetura](#️-arquitetura)  
- [Instalação](#️-instalação)  
- [Configuração](#-configuração)  
- [Execução](#️-execução)  
- [Estrutura de pastas](#-estrutura-de-pastas)  
- [Tratamento de erros](#-tratamento-de-erros)
- [Rotas](#-rotas)  
- [Variáveis de ambiente](#-variáveis-de-ambiente)  
- [Melhorias futuras](#-melhorias-futuras)
- [Licença](#-licença)  
- [Autor](#-autor)


## 📖 Sobre o Projeto

Esta API foi desenvolvida com foco em aprendizado e prática de desenvolvimento backend moderno, utilizando Express como framework principal e MongoDB Atlas como banco de dados NoSQL.

O projeto segue uma arquitetura modular, separando responsabilidades entre controllers, models, routes, middlewares e configurações.

---

## 🛠 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript ESModules](https://img.shields.io/badge/ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![dotenv](https://img.shields.io/badge/dotenv-8DD6F9?style=for-the-badge&logo=dotenv&logoColor=black)

---

## 🏗️ Arquitetura

- **Routes** → `definição dos endpoints`
- **Controllers** → `regras de negócio`
- **Models** → `schema do MongoDB (Mongoose)`
- **Middlewares** → `interceptação de requisições`
- **Errors** → `tratamento centralizado de erros`
- **Config** → `conexão com banco de dados`
- **App.js** → `configuração principal do Express`
- **Server.js** → `inicialização do servidor`

---

## 📁 Estrutura de Pastas

```text
src/
│
├── config/          # Conexão com MongoDB e configurações gerais
├── controllers/     # Lógica das requisições
├── errors/          # Classes de erro personalizadas
├── middlewares/     # Middlewares (auth, validações, etc.)
├── models/          # Schemas do MongoDB (Mongoose)
├── routes/          # Definição das rotas da API
├── app.js           # Configuração do Express
│
server.js            # Inicialização do servidor
```

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/mguilhermegomes/api-rest-livraria-mongodb.git
```

### 2. Acesse a pasta

```bash
cd api-rest-livraria-mongodb
```

### 3. Instale as dependências

```bash
npm install
```

---

## 🔐 Configuração

Crie um arquivo `.env` na raiz do projeto:

```js
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb_atlas
```

---

## ▶️ Execução

**Execute o comando:**

```bash
npm run dev
```

**O servidor rodará em:**

```bash
http://localhost:3000
```

---

## ❌ Tratamento de Erros

A API possui um sistema centralizado de erros baseado em classes personalizadas.

Exemplo:

- `ErroBase` → classe principal de erro
- `ErroNaoEncontrado` → erros 404
- Middlewares de captura global de erros

Isso garante respostas padronizadas da API:

```json
{
  "message": "Erro interno do servidor.",
  "status": 500
}
```

---

## ╰┈➤ Rotas

> As rotas ainda serão documentadas conforme seus controllers forem enviados.

```js
GET    /api/...
POST   /api/...
PUT    /api/...
DELETE /api/...
```

---

## 🌱 Variáveis de Ambiente

| Variável  | Descrição                       |
| --------- | ------------------------------- |
| PORT      | Porta onde a API será executada |
| MONGO_URI | String de conexão com MongoDB   |

---

## ✅ Boas Práticas Aplicadas

- Separação de responsabilidades (MVC adaptado)
- Uso de middlewares
- Tratamento centralizado de erros
- Estrutura escalável
- Uso de variáveis de ambiente
- Organização modular

---

## 🔥 Melhorias futuras

- Documentação com Swagger
- Autenticação JWT
- Testes automatizados (Jest)
- Deploy (Render / Railway / Vercel API)

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Gomes**  
Projeto de estudo em desenvolvimento backend com Node.js + MongoDB

🔗 **LinkedIn:** <https://www.linkedin.com/in/mguilherme-gomes/>  
🔗 **GitHub:** <https://github.com/mguilhermegomes>

---

**⭐ Se este projeto te ajudou ou você achou interessante, considere deixar uma estrela no repositório.**
