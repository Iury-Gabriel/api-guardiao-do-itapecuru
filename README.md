# Documentação da API

## Rotas de Autenticação

### Registro de Usuário

**Endpoint:** `POST /AUTH/REGISTER`

**Descrição:**
Essa rota faz uma requisição ao servidor para criar uma conta e salvar os dados no banco de dados.

**Exemplo de Requisição:**

POST https://api-guardiao-do-itapecuru.onrender.com/auth/register
Content-Type: application/json

{
  "username": "teste4",
  "email": "teste4@gmail.com",
  "gender": "Masculino",
  "ageRange": "13 - 17 anos",
  "password": "12345"
}

### Login de um Usuario

**Endpoint:** `POST /auth/login`

**Descrição:**
Essa rota faz uma requisição ao servidor para fazer um login de um usuario.

**Exemplo de Requisição:**

POST https://api-guardiao-do-itapecuru.onrender.com/auth/login
Content-Type: application/json

{
  "email": "teste4@gmail.com",
  "password": "12345"
}
