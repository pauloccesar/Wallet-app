interface Env {
  WEBSOCKET_BASE_URL_MARK_PRICE: string;
  WEBSOCKET_BASE_URL_K_LINE: string;
}

const env: Env = {
  WEBSOCKET_BASE_URL_MARK_PRICE: 'wss://fstream.binance.com/stream?streams=btcusdt@markPrice',
  WEBSOCKET_BASE_URL_K_LINE: 'wss://stream.binance.com/stream?streams=btcusdt@kline_1m'
};

export default env;
