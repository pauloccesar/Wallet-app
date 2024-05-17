import { Container, Content } from './styles';

import GraphicCandle from '~/components/CandleChart';
import GraphicCartesian from '~/components/CartesianChart';
import { Header } from '~/components/Header';
import { useWebSocketKline } from '~/hooks/useWebSocketKline';
import { useWebSocketMarkPrice } from '~/hooks/useWebSocketMarkPrice';


export default function Home() {
  const dataMarkPrice = useWebSocketMarkPrice();
  // const datKline= useWebSocketKline();

  return (
    <Container>
      <Header
      // title={'TESTE'}
      />
      <Content>
        <GraphicCartesian data={dataMarkPrice} />
      </Content>
      {/* <GraphicCandle data={datKline} />   */}
    </Container>
  );
}
