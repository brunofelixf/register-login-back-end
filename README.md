# 📄 Documentação da API 

O objetivo do projeto é construir um back-end para rede social semelhante ao Instagram.

Sendo possível:
- cadastrar usuário;
- realizar login;
- criar postagens com texto e fotos;

⚒️ URL BASE: http://localhost:3000/

# Sumário

- Usuário
  - [Cadastrar um novo usuário](#📤-post-user);
  - [Listar dados de usuários](#📥-get-user);
  - [Alterar dados do usuário](#📦-patch-user);
  - [Deletar um usuário](#💽-delete-user);
---
# 👤 Usuário

### 🌐 Endpoint: urlbase/user/

Rotas responsáveis pelos atributos dos usuários.

## Requisições:

### 📤 POST /user/

Rotas responsável pela criação dos usuários.

🔐 Nível de permissão da rota: **Público**

**Padrão de corpo (requisição):**

```json
{
	"name": "Bruno",
	"username": "brunofelixf",
	"email": "bruno@email.com",
	"password": "123"
}
```

**Retorno esperado 201 (Created):**

```json
{
	"name": "Bruno",
	"username": "brunofelixf",
	"email": "bruno@email.com"
}
```
---
### 📥 GET /user/

Rota para listar usuários.

🔐 Nível de permissão da rota: **Privada**

**Padrão de requisição:**

Esse verbo do protocolo não necessita do envio de um body (corpo).

**Retorno esperado 200 (OK):**

```json
[
	{
		"user_id": "3b57dc59-0c31-48a8-b681-cad350a962d0",
		"name": "Bruno",
		"username": "brunofelixf",
		"email": "bruno@email1.com",
		"password": "$2a$08$dukdTL7Q9jF6YFV27Xvx3effuArl8caOr/rfDrXsdDRjlAqrJrXlC",
		"friend": []
	},
	{
		"user_id": "cd916f2b-89f2-4ca3-9111-fa8f6ef905f3",
		"name": "Bruno 2",
		"username": "brunofelixf2",
		"email": "bruno@email2.com",
		"password": "$2a$08$wuIDzXxSVPYW/McNENKkd.kt19nxazDkwGvXvgUsfhHsjRPtQusKq",
		"friend": []
	}
]
```

⚠️ **Observações:** O envio do token é necessário.

---

### 📦 PATCH /user/

Rota responsável por atualizar os dados de um cliente.

🔐 Nível de permissão da rota: **Privada**

**Padrão de corpo (requisição):**

```json
{
	"name": "Bruno Felix Ferreira"
}
```

**Retorno esperado 200 (OK):**

```json
{
	"user_id": "67de8c32-7b0d-40b5-954d-0fbcd8ca01c8",
	"name": "Bruno Felix Ferreira",
	"email": "bruno@email.com",
	"password": "123",
	"friend": []
}
```

⚠️ **Observações:** Todos os parâmetros são opcionais nessa rota, apenas os atributos gerados pela API não são passíveis de edição.
