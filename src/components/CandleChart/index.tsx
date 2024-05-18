import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, Line, Rect, G, Text } from 'react-native-svg';
import * as scale from 'd3-scale';
import * as array from 'd3-array';
import * as d3TimeFormat from 'd3-time-format';
import theme from '~/global/styles/theme';

const CandlestickChart = ({ data }) => {
  const { width, height } = Dimensions.get('window');
  const containerWidth = width - 16; 
  const containerHeight = (height * 0.65) - 48; 
  const chartWidth = containerWidth - 40; 
  const chartHeight = containerHeight - 40; 

  const padding = 20;

  const parsedData = data.map(d => ({
    ...d,
    date: new Date(d.date)
  }));

  const x = scale.scaleBand()
    .domain(parsedData.map(d => d.date))
    .range([padding, chartWidth - padding])
    .padding(0.3);

  const y = scale.scaleLinear()
    .domain([
      array.min(parsedData, d => Math.min(d.low, d.open, d.close)),
      array.max(parsedData, d => Math.max(d.high, d.open, d.close))
    ])
    .range([chartHeight - padding, padding]);

  const formatTime = d3TimeFormat.timeFormat('%b %d');

  const candles = parsedData.map((d, index) => {
    const open = y(d.open);
    const close = y(d.close);
    const high = y(d.high);
    const low = y(d.low);

    const fill = d.open > d.close ? 'red' : 'green';
    const xPosition = x(d.date);

    if (xPosition === undefined) return null; 

    return (
      <React.Fragment key={index}>
        <Line
          x1={xPosition + x.bandwidth() / 2}
          x2={xPosition + x.bandwidth() / 2}
          y1={high}
          y2={low}
          stroke="white"
          strokeWidth="1"
        />
        <Rect
          x={xPosition + x.bandwidth() * 0.1} 
          y={Math.min(open, close)}
          width={x.bandwidth() * 0.8} 
          height={Math.abs(open - close)}
          fill={fill}
        />
      </React.Fragment>
    );
  });

  const xAxis = parsedData.map((d, index) => (
    <Text
      key={index}
      x={x(d.date) + x.bandwidth() / 2}
      y={chartHeight - padding / 2}
      fontSize="10"
      fill="white"
      textAnchor="middle"
    >
      {formatTime(d.date)}
    </Text>
  ));

  const yTicks = y.ticks(6).map((tick, index) => (
    <G key={index}>
      <Line
        x1={padding}
        x2={chartWidth - padding}
        y1={y(tick)}
        y2={y(tick)}
        stroke="white"
        strokeWidth="0.5"
        opacity="0.2"
      />
      <Text
        x={padding - 5}
        y={y(tick)}
        fontSize="10"
        fill="white"
        textAnchor="end"
        alignmentBaseline="middle"
      >
        {tick}
      </Text>
    </G>
  ));

  return (
    <View style={styles.container}>
      <Svg width={containerWidth} height={containerHeight}>
        <G>
          {yTicks}
        </G>
        <G>
          {candles}
        </G>
        <G>
          {xAxis}
        </G>
      </Svg>
    </View>
  );
};

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
    paddingLeft: 80
  },
});

export default CandlestickChart;