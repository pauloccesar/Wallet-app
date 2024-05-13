interface Env {
  WEBSOCKET_BASE_URL: string;
}

const env: Env = {
  WEBSOCKET_BASE_URL: 'wss://fstream.binance.com/stream?streams=btcusdt@markPrice'
};

export default env;
