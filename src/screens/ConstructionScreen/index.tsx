import { Container, Image, Text } from './styles';

export default function ConstructionScreen() {
  return (
    <Container>
      <Image
      source={require('../../assets/construction.png')}
      />
      <Text>Tela em construção</Text>
    </Container>
  )
}
