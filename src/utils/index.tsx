import { Dimensions, PixelRatio } from "react-native";
import {verticalScale } from "react-native-size-matters";

export function formatDolar(valor) {
  const valorFormatado = valor.toFixed(3);
  return `$${valorFormatado}`;
}

export function formatarData(data) {
  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear();

  return `${day}/${month}/${year}`;
}

export const formatDate = (timestamp: any) => {
  "worklet";
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

export const formatPaisaWorklet = (number: number): string => {
  "worklet";
  return !number
    ? `---`
    : `${number?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export const screenWidth: number = Dimensions.get("window").width;
export const screenHeight: number = Dimensions.get("window").height;

export const normalizeHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel(verticalScale(size));
};