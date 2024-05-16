import { Circle, useFont } from '@shopify/react-native-skia';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from 'victory-native';
import theme from '~/global/styles/theme';

import { formatDolar } from '~/utils';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

export default function GraphicCartesian({ data }) {
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });
  const font = useFont(require('../../fonts/Roboto-Regular.ttf'));

  const animatedText = useAnimatedProps(() => {
    return {
      text: `$ ${state.y.price.value.value.toFixed(2)}`,
      defaultValue: '',
    };
  });

  const animatedDateText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value);
    return {
      // text: `$ ${date.toLocaleDateString("pt-BR")}`,
      text: `$ ${state.x.value.value}`,
      defaultValue: '',
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '50%' }}>
        {isActive && (
          <View>
            <AnimatedTextInput
              editable={false}
              underlineColorAndroid="transparent"
              style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}
              animatedProps={animatedText}
            />

            {/* <AnimatedTextInput
              editable={false}
              underlineColorAndroid={"transparent"}
              animatedProps={animatedDateText}
            ></AnimatedTextInput> */}
          </View>
        )}

        {!isActive && (
          <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>
              U${data[data.length - 1].price.toFixed(4)}
            </Text>
            <Text>Atual</Text>
          </View>
        )}

        <CartesianChart
          data={data}
          xKey="seconds"
          yKeys={['price']}
          chartPressState={state}
          axisOptions={{
            tickCount: 12,
            font,
            labelOffset: { x: 2, y: 10 },
            labelPosition: 'outset',
            formatYLabel: (value) => `${formatDolar(value)}`,
            formatXLabel: (value) => '',
            // formatXLabel: (value) => `${value}`
          }}>
          {({ points }) => (
            <>
              <Line points={points.price} color={theme.colors.lineCartesianChart} strokeWidth={3} />
              {isActive && <ToolTip x={state.x.position} y={state.y.price.position} />}
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
