import { ScreenContent } from '~/components/ScreenContent';
import { Container } from './styles';
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import GraphicCartesian from '~/components/CartesianChart';

export default function Home() {
  const [indexPrice, setIndexPrice] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://fstream.binance.com/stream?streams=btcusdt@markPrice');

    ws.onopen = () => {
      console.log('Conexão aberta');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Preço do índice BTCUSDT:', data);
      setIndexPrice(data.p);
    };

    ws.onerror = (error) => {
      console.error('Erro:', error);
    };

    ws.onclose = () => {
      console.log('Conexão fechada');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <Container>
        <GraphicCartesian />
    </Container>
  );
};
