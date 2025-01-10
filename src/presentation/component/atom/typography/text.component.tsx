import React from 'react';
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import { Theme } from '../../../theme/theme';
import { FontSizes, FontWeights, Colors } from '../../../../domain/enum/theme';

interface TypographyProps extends TextProps {
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  color?: keyof typeof Colors;
  align?: TextStyle['textAlign'];
  style?: TextStyle;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  size = 'Regular',
  weight = 'Regular',
  color = 'black',
  align = 'left',
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        {
          fontSize: Theme.normalize(FontSizes[size]),
          fontWeight: FontWeights[weight],
          color: Colors[color],
          textAlign: align,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    marginVertical: Theme.spacing.XS, // Consistent spacing
  },
});

export default Typography;
