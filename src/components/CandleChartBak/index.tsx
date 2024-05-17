import { useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryAxis, VictoryBar, VictoryCandlestick, VictoryChart, VictoryTheme } from 'victory-native'

export default function GraphicCandleBak({ data }) {
  const font = useFont(require('../../fonts/Roboto-Regular.ttf'));
  const yValues = data.map(item => item.open);
  const xValues = data.map(item => new Date(item.x));

  return (
    <View style={styles.container}>
      <VictoryChart
        theme={VictoryTheme.material}
        scale={{ x: "time", y: "linear" }}
      >
        <View style={styles.container}>
          <VictoryAxis
            dependentAxis
            crossAxis
            tickValues={xValues}
            style={{
              tickLabels: { margin: 5 }
            }}
          />
          <View style={styles.sontainer1}>
            <VictoryCandlestick
              candleColors={{ positive: "#00ce4f", negative: "#c43a31" }}
              data={data}
              scale={{ x: "time" }}
              candleWidth={15}
              domainPadding={0}
              x={xValues}
              y={yValues}
            />
          </View>

          <VictoryAxis
            // tickCount={500}
            tickValues={xValues}
            tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}
            style={{
              tickLabels: { marginLeft: 25, angle: -45 }
            }}
          />
        </View>
      </VictoryChart>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#949494b0"
  },
  sontainer: {
    // flex: 1,
    width: 0,
    flexDirection: "row",
  },
  sontainer1: {
    marginLeft: 25
  }
});