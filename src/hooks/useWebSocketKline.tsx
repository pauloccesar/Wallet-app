import { useState, useEffect, useCallback, useMemo } from 'react';
import { firsDataKline } from '~/screens/mockFirstData'
export function useWebSocketKline() {
  const [dataArray, setDataArray] = useState([{"close": 66058.67, "high": 66058.67, "low": 66039.52, "open": 66040.01, "x": "2024-05-16T03:35:59.999Z"}]);

  const addData = useCallback((newData) => {
    setDataArray(prevDataArray => {
      if (prevDataArray.length < 5) {
        return [...prevDataArray, newData];
      } else {
        const newDataArray = [...prevDataArray.slice(1), newData];
        return newDataArray;
      }
    });
  }, []);

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com/stream?streams=btcusdt@kline_1m');

    const handleWebSocketMessage = (event) => {
      const data = JSON.parse(event.data);
      const klineData = data.data.k;
      const newDate = new Date(data.data.E);
      const newPriceOpen = parseFloat(klineData.o);
      const newPriceClose = parseFloat(klineData.c);
      const newPriceHigh = parseFloat(klineData.h);
      const newPriceLow = parseFloat(klineData.l);
      addData({ x: newDate, open: newPriceOpen, close: newPriceClose, high: newPriceHigh, low: newPriceLow });
    };

    ws.onopen = () => {
      console.log('Conexão aberta');
    };

    ws.onmessage = handleWebSocketMessage;

    ws.onerror = (error) => {
      console.error('Erro:', error);
    };

    ws.onclose = () => {
      console.log('Conexão fechada');
    };

    return () => {
      ws.close();
    };
  }, [addData]);

  const memoizedDataArray = useMemo(() => dataArray, [dataArray]);

  return memoizedDataArray;
}
