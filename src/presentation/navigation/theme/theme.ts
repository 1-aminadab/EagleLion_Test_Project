// theme.ts
import { Dimensions, PixelRatio } from 'react-native';
import { BorderRadius, Colors, FontSizes, FontWeights, Spacing } from '../../../domain/enum/theme';

// Utility for responsive font sizes
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375; // Base width for scaling

export const normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Theme object for exporting
export const Theme = {
  colors: Colors,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  spacing: Spacing,
  borderRadius: BorderRadius,
  normalize,
};