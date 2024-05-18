import { useState, useEffect, useMemo, useCallback } from 'react';
import env from '~/env/intex';
import { firstData } from '~/screens/mockFirstData';

interface PriceData {
  price: number;
  seconds: number;
}

export function useWebSocketMarkPrice() {
  const [dataArray, setDataArray] = useState<PriceData[]>(firstData);

  const addData = useCallback((newPrice: number, newDate: Date) => {
    setDataArray(prevDataArray => {
      if (prevDataArray.length < 50) {
        return [...prevDataArray, { seconds: newDate, price: newPrice }];
      } else {
        const newDataArray = [...prevDataArray.slice(1), { seconds: newDate, price: newPrice }];
        return newDataArray;
      }
    });
  }, []);

  useEffect(() => {
    const ws = new WebSocket(env.WEBSOCKET_BASE_URL_MARK_PRICE);

    const handleWebSocketMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.data.p);
      const newDate = new Date(data.data.E);
      addData(newPrice, newDate);
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
