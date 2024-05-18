import { ButtonContent, Container, Content, TouchableOpacityContent, TextContent } from './styles';

import GraphicCandle from '~/components/CandleChart';
import GraphicCartesian from '~/components/CartesianChart';
import { Header } from '~/components/Header';
import { useWebSocketKline } from '~/hooks/useWebSocketKline';
import { useWebSocketMarkPrice } from '~/hooks/useWebSocketMarkPrice';
import { screenHeight, screenWidth } from '~/utils';
import { TouchableOpacity, View, Text } from 'react-native';
// import CandleWrapper from '~/components/CandleWrapper';
import CandlestickChart from '~/components/CandleChart';
import { useState } from 'react';


export default function Home() {
  const dataMarkPrice = useWebSocketMarkPrice();
  const datKline = useWebSocketKline();
  console.log("🚀 ~ Home ~ datKline:", datKline)
  const [isSelect, setIsSelect] = useState(true)

  return (
    <Container>
      <Header
      />
      <ButtonContent>
        <TouchableOpacityContent
          isSelected={isSelect}
          onPress={() => setIsSelect(!isSelect)}
        >
          <TextContent
            isSelected={isSelect}>Gráfico de Linhas</TextContent>
        </TouchableOpacityContent>
        <TouchableOpacityContent
          isSelected={!isSelect}
          onPress={() => setIsSelect(!isSelect)}
        >
          <TextContent
            isSelected={!isSelect}>Gráfico de Velas</TextContent>
        </TouchableOpacityContent>
      </ButtonContent>

      <Content>
        {isSelect ?
          <GraphicCartesian data={dataMarkPrice} /> :
          <CandlestickChart data={datKline} />
        }
      </Content>
    </Container>
  );
}
