# 🍔 InfnetFood - App de Pedidos e Delivery

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-8A2BE2?style=for-the-badge&logo=react&logoColor=white)

Este é o projeto **InfnetFood**, desenvolvido como Assessment (AT) para a disciplina de **Desenvolvimento Mobile com React Native** do Bloco de Desenvolvimento Front-end com Frameworks.

O aplicativo simula um ecossistema completo de delivery de refeições, incluindo autenticação, navegação entre múltiplas telas, gerenciamento de estado global (carrinho de compras e tema) e consumo de APIs externas.

---

## 🚀 Funcionalidades Implementadas

O projeto atende a todos os requisitos propostos na avaliação, incluindo:

- **Autenticação Simulada:** Fluxo de rotas protegidas (Área Pública vs Área Logada) usando Context API.
- **Catálogo de Produtos:** Listagem de categorias e produtos filtrados dinamicamente.
- **Carrinho de Compras:** Adição de itens, cálculo de subtotal/total e gerenciamento de quantidades em tempo real.
- **Integração com API Externa:** Consumo da API do ViaCEP na tela de Checkout para preenchimento automático do endereço.
- **Notificações Locais:** Alertas simulados de confirmação de pedido via `expo-notifications`.
- **Modo Escuro (Dark Mode):** Alternância de tema gerenciada globalmente e aplicada aos componentes visuais.
- **Geolocalização Simulada:** Lista de restaurantes próximos com representação visual de mapa estático.
- **Área do Usuário:** Telas de perfil e histórico de pedidos.

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (Componentes Core: View, Text, FlatList, TextInput, etc.)
- **Expo** (Framework de desenvolvimento e build)
- **React Navigation** (Native Stack para o roteamento)
- **Context API** (Gerenciamento de Estado Global)
- **Expo Notifications** (Feedback nativo de notificações)
- **Fetch API** (Requisições HTTP para o ViaCEP)

---

## 🔐 Credenciais de Acesso (Teste)

Para testar o fluxo de roteamento privado do aplicativo, utilize as seguintes credenciais na tela de Login:

- **E-mail:** `admin@admin.com`
- **Senha:** `admin123`

---

## 📱 Como Executar o Projeto

A aplicação foi projetada para rodar facilmente através do **Snack Expo Dev** ou em ambiente local.

### Opção 1: Via Snack Expo (Recomendado para Avaliação)
1. Acesse o link do projeto no Snack (Insira seu link do Snack aqui).
2. Escolha a aba **Web**, **iOS** ou **Android** no painel direito para interagir com o emulador.

### Opção 2: Rodando Localmente
Caso deseje rodar o projeto na sua máquina:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/InfnetFood.git](https://github.com/SEU_USUARIO/InfnetFood.git)
    ```
   
2. Clone este repositório:
   ```
   cd InfnetFood
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Inicie o servidor do Expo:
   ```
   npx expo start
   ```

5. Escaneie o QR Code gerado no terminal usando o aplicativo Expo Go no seu celular, ou pressione ```w``` para abrir no navegador web.

## 📂 Estrutura de Pastas

    InfnetFood/
    ├── src/
    │   ├── components/       # Componentes visuais reutilizáveis (Cards, Itens do Carrinho)
    │   ├── context/          # Gerenciadores de estado global (Auth, Cart, Theme)
    │   ├── data/             # Mocks de dados (Produtos, Restaurantes, Usuários, etc.)
    │   ├── navigation/       # Configuração das rotas (AuthStack, AppStack)
    │   ├── screens/          # Páginas da aplicação (Home, Produtos, Checkout, etc.)
    │   └── services/         # Funções auxiliares (Consumo ViaCEP, Auth simulado)
    ├── App.js                # Ponto de entrada da aplicação
    └── package.json          # Dependências do projeto
