import { Circle, useFont, Path } from '@shopify/react-native-skia';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';
import { CartesianChart, Line, useAnimatedPath, useChartPressState, useLinePath, type PointsArray, } from 'victory-native';
import theme from '~/global/styles/theme';

import { formatDolar } from '~/utils';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={theme.colors.shape} />;
}

function MyAnimatedLine({ points }: { points: PointsArray }) {
  const { path } = useLinePath(points);
  const animPath = useAnimatedPath(path);

  return <Path path={animPath} style="stroke" color={theme.colors.lineCartesianChart} strokeWidth={3} />;
}

export default function GraphicCartesian({ data }) {
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });
  const font = useFont(require('../../fonts/Roboto-Regular.ttf'));

  const animatedText = useAnimatedProps(() => {
    return {
      text: `U$ ${state.y.price.value.value.toFixed(2)}`,
      defaultValue: '',
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {isActive && (
          <View>
            <AnimatedTextInput
              editable={false}
              underlineColorAndroid="transparent"
              style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.shape }}
              animatedProps={animatedText}
            />
          </View>
        )}

        {!isActive && (
          <View style={{flexDirection: 'row'}}>
           <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.shape}}>Atual: </Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.shape }}>
              U${data[data.length - 1].price.toFixed(4)}
            </Text>
          </View>
        )}

        <CartesianChart
          data={data}
          xKey="x"
          yKeys={['price']}
          chartPressState={state}
          axisOptions={{
            tickCount: 12,
            font,
            lineColor: theme.colors.shape,
            labelColor: theme.colors.shape,
            labelOffset: { x: 2, y: 10 },
            labelPosition: 'outset',
            formatYLabel: (value) => `${formatDolar(value)}`,
            formatXLabel: (value) => '',
          }}>

          {({ points }) => (
            <>
              <MyAnimatedLine points={points.price} />
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
    width: '100%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingTop: 24,
    backgroundColor: theme.colors.darkBlue,
    flexDirection: 'row',
    borderRadius: 50,
    gap: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.80,
  },
});
