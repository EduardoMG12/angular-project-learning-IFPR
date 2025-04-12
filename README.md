# StudyBuddy - Plataforma de Estudos com Flashcards

Link do projeto de inspiração: https://preview--studybuddy-neon-cards.lovable.app/    https://lovable.dev/projects/3fe6fd9d-9def-4674-8fd5-3932bb9626e4

![Screenshot do StudyBuddy](assets/screenshot.png)

**StudyBuddy** é uma aplicação interativa de flashcards construída com Angular, projetada para potencializar o aprendizado ativo. Permite criar, revisar e compartilhar flashcards com algoritmos inteligentes para sessões de estudo otimizadas. Com uma UI moderna em tons de azul e roxo neon, StudyBuddy oferece uma experiência vibrante e envolvente para estudantes e aprendizes. Por enquanto, é uma aplicação apenas frontend, mas está pronta para integração com backend no futuro.

## Funcionalidades

- **Criação de Decks**: Monte flashcards com um formulário no estilo JSON, incluindo perguntas, respostas e alternativas de múltipla escolha opcionais (usando Angular Reactive Forms).
- **Modo de Estudo**: Navegue pelos flashcards com algoritmos de revisão por erros, repetição espaçada ou modo normal. Escolha uma alternativa para virar o card, ver a resposta correta e marcar como "aprendido" ou "revisar novamente".
- **Acompanhamento de Progresso**: Visualize estatísticas de aprendizado com gráficos simples (usando Ngx-Charts).
- **Categorias e Tags**: Organize decks por temas (ex.: Matemática, Idiomas) com filtros flexíveis.
- **Suporte Offline**: Persistência de dados simulada com LocalStorage para uso offline.
- **UI Moderna**: Design elegante com cards e modais do Angular Material, toques de azul/roxo neon e animações suaves para virar cards e transições.
- **Design Responsivo**: Totalmente adaptável para mobile e desktop com Tailwind CSS.

## Tecnologias Utilizadas

- **Frontend**: Angular 18, TypeScript, RxJS
- **Componentes de UI**: Angular Material, Angular Animations
- **Estilização**: Tailwind CSS com temas personalizados em azul/roxo neon
- **Gráficos**: Ngx-Charts
- **Armazenamento**: LocalStorage para persistência simulada
- **Ferramentas de Build**: Angular CLI

## Como Começar

### Pré-requisitos

- Node.js (v18 ou superior)
- Angular CLI (`npm install -g @angular/cli`)

### Instalação

1. Clone o repositório:
   ```bash

   git clone https://github.com/seu-username/studybuddy.git

```

2. Entre na pasta do projeto:

 ```bash

    cd studybuddy

 ```

3. Instale as dependências:

```bash

pnpm install

```

4. Inicie o servidor de desenvolvimento:

```bash

pnpm start

```

Acesse http://localhost:4200 no seu navegador.

- Planos Futuros
- Integração com backend usando Node.js e MongoDB para compartilhamento de decks e contas de usuário.
- Sincronização em tempo real entre dispositivos.
- Algoritmos avançados de repetição espaçada com cálculos no servidor.
- Marketplace de decks públicos para compartilhamento na comunidade.

Contribuição
Issues e pull requests são bem-vindos! Sinta-se à vontade para contribuir com ideias ou melhorias.

Licença
Este projeto está licenciado sob a Licença MIT.