# 🔍 Verificador de Seguidores no Instagram

Este é um projeto simples feito com **HTML**, **CSS** e **JavaScript puro** para verificar quais perfis você segue no Instagram e que **não te seguem de volta**.

## 📌 Objetivo

Comparar dois arquivos JSON exportados do Instagram:

- `following.json` (quem você segue)
- `followers_1.json` (quem te segue)

E listar os perfis que **não te seguem de volta**, com links diretos para o perfil de cada um.

<a href="https://nubank.com.br/cobrar/nbzh/686a833b-80df-429e-9466-28c8700ec704" style="color: white; background: blue; padding: 5px 10px; border-radius: 5px"> Ajude o projeto, faça um PIX </a>

---

## ✅ Funcionalidades

- 📊 Comparação entre seguidores e seguindo
- 🔗 Link direto para cada perfil
- 📥 Download em `.txt` da lista
- 🔒 Funciona totalmente offline

## 🚀 Como usar

1. Acesse a página `index.html` em um navegador de sua preferência (Google Chrome, Firefox, etc).
2. Faça upload dos dois arquivos:
   - `followers_1.json` (seguidores)
   - `following.json` (seguindo)
3. Clique em **"Comparar"**.
4. Veja a lista de perfis que não te seguem de volta.
5. Clique em **"Visitar perfil"** para abrir o Instagram.
6. (Opcional) Baixe a lista como um arquivo `.txt` de todos esses perfis.

---

## 📁 Estrutura dos arquivos

├── index.html # Estrutura da interface
├── style.css # Estilos e layout
└── script.js # Lógica de comparação e interação

---

## 📥 Como obter os arquivos JSON

1. Acesse: [https://accountscenter.instagram.com/info_and_permissions/](https://accountscenter.instagram.com/info_and_permissions/)
2. Vá até **"Suas informações e permissões" > "Baixar suas informações"**
3. Clique em **Baixar ou transferir informações > Selecione o instagram**
4. Depois selecione **Algumas das suas informações > Seguindo e seguidores**
5. Após isso, é só selecionar a opção de tempo desde o ínicio para baixar todos os seguidores, e salvar o arquivo `zip` no seu dispositivo.
6. Extraia e localize os arquivos:
   - `followers_1.json`: na pasta `followers_and_following/`
   - `following.json`: na mesma pasta

---


