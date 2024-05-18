## :memo: Sobre o projeto

Essa aplicação consome dados em tempo real de uma WebSocket com informações do Bitcoin e constrói dois gráficos: um gráfico de linha e um gráfico de vela.

## :rocket: Tecnologias

- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.dev/)
- [Victory Native](https://formidable.com/open-source/victory/docs/native/)
- [React Native Svg](https://github.com/software-mansion/react-native-svg)

## :gear: Rodando o projeto
``` bash
  $git clone https://github.com/pauloccesar/Wallet-app.git
  $cd Wallet-app
  $npm install
  $npx expo start
```

## :link: WebSockets Utilizadas

- `wss://fstream.binance.com/stream?streams=btcusdt@markPrice` para dados de preço de mercado do Bitcoin.
- `wss://stream.binance.com/stream?streams=btcusdt@kline_1m` para dados de candles de 1 minuto do Bitcoin.

## :page_with_curl: Funcionalidades

- Conexão em tempo real com a API de WebSocket da Binance.
- Exibição de um gráfico de linha com os dados de preço de mercado do Bitcoin.
- Exibição de um gráfico de vela com os dados de candles de 1 minuto do Bitcoin.
