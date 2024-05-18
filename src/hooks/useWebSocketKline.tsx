import { useState, useEffect, useCallback, useMemo } from 'react';
import { firsDataKline } from '~/screens/mockFirstData'
export function useWebSocketKline() {
  const [dataArray, setDataArray] = useState(firsDataKline);

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
      addData({ timestamp: newDate.toISOString(), open: newPriceOpen, close: newPriceClose, high: newPriceHigh, low: newPriceLow });
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
