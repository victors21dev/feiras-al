# Feiras-AL Frontend

Frontend do projeto **Feiras-AL**, desenvolvido com **React**, **TypeScript**, **Vite**, **Tailwind CSS** e **shadcn**.  
O sistema conta com **autenticação via Clerk** e integração direta com a API backend para gerenciar feiras e eventos.

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/) - Autenticação

---

## ⚙️ Funcionalidades

- Autenticação de usuários via Clerk
- Proteção de rotas privadas
- Integração com backend via REST API
- Interface responsiva e moderna usando Tailwind CSS e shadcn
- CRUD completo para gerenciamento de eventos

---

## 💻 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/victors21dev/feiras-al.git
cd feiras-al
```

### 2. Clone o repositório

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:
PUBLISHABLE_KEY=''
VITE_CLERK_PUBLISHABLE_KEY=''
VITE_URL_BACKEND_API_EVENTS=''

Dica:
A chave do Clerk pode ser encontrada no painel do Clerk.

### 4. Rode o projeto localmente

```bash
npm run dev
```

O frontend estará disponível em:
http://localhost:5173

## 📡 Integração com o backend veja no link abaixo:

https://github.com/victors21dev/feiras-al-backend

### 🗺 Roadmap de melhorias

Melhorias na UI/UX
Upload de imagens de eventos
Filtros avançados e paginação
Testes unitários e de integração

📝 Licença
Este projeto é open-source, licenciado sob os termos da MIT License.
