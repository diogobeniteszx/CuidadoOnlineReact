# CuidadOnline Mobile

Versão mobile do **CuidadOnline**, criada com React Native, JavaScript e Expo. Esta primeira etapa não usa banco de dados: os dados ficam somente no estado da aplicação enquanto ela está aberta.

## Telas implementadas

1. Login
2. Cadastro
3. Início
4. Aprender
5. Detalhe da leitura
6. Praticar

O projeto também contém componentes reutilizáveis para botões, campos de texto, cabeçalhos, cartões, contêiner de tela e menu inferior. Todos os estilos usam `StyleSheet`.

## Requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) 22.13 ou superior, que já inclui o npm.
- [Expo Go](https://expo.dev/go) no celular, caso queira executar o aplicativo em um aparelho Android ou iOS.

## Instalação e execução

Depois de baixar ou clonar o projeto, abra o terminal na pasta do projeto:

```bash
cd CuidadoOnlineReact
```

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npm start
```

Quando o Expo iniciar:

- Escaneie o QR Code com o aplicativo Expo Go para abrir no celular.
- Pressione `a` no terminal para abrir em um emulador Android já configurado.
- Pressione `w` no terminal para abrir no navegador.

Também é possível iniciar diretamente pelo terminal:

```bash
npm run android
npm run web
```

## Estrutura principal

- `src/app/`: telas e navegação com Expo Router.
- `src/components/`: componentes reutilizáveis.
- `src/context/`: estado compartilhado da aplicação.
- `src/data/`: conteúdo educativo temporário.
- `src/theme.js`: cores da identidade visual.
