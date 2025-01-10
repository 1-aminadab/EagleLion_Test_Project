import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../../../theme/theme';
import { IconPosition, Intent, Shape, Size } from '../../../../domain/enum/button';


interface ButtonProps {
  text?: string;
  intent?: Intent
  size?: Size;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  isLoading?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
  gradientStyle?: ViewStyle;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  shape?: Shape;
  accessibilityLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  intent = Intent.Primary,
  size = Size.Medium,
  onPress,
  style,
  textStyle,
  isLoading = false,
  gradient = false,
  gradientColors = ['rgb(109, 2, 248)', 'rgb(207,73,236)'],
  gradientStyle,
  icon,
  iconPosition = IconPosition.Left,
  children,
  disabled = false,
  fullWidth = false,
  shape = Shape.Rectangle,
  accessibilityLabel,
}) => {
  const buttonStyle = [
    styles.base,
    fullWidth && styles.fullWidth,
    shape === Shape.Circle ? styles.circle : styles.rectangle,
    styles[intent],
    styles[size],
    disabled && styles.disabledButton,
    style,
  ];

  const renderContent = () => (
    <View style={[styles.content, iconPosition === IconPosition.Right && styles.rowReverse]}>
      {icon && <View style={[styles.icon, iconPosition === IconPosition.Right && styles.iconRight]}>{icon}</View>}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      {children}
    </View>
  );

  if (gradient && !disabled) {
    return (
      <LinearGradient
        colors={gradientColors}
        style={[styles.gradientContainer, buttonStyle, gradientStyle]}
      >
        <TouchableOpacity
          style={styles.gradientTouchable}
          onPress={onPress}
          activeOpacity={0.8}
          disabled={isLoading || disabled}
          accessible
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="button"
        >
          {isLoading ? <ActivityIndicator color={Theme.colors.white} /> : renderContent()}
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading || disabled}
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
    >
      {isLoading ? <ActivityIndicator color={intent === Intent.Outline ? Theme.colors.Primary : Theme.colors.white} /> : renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  fullWidth: {
    width: '100%',
  },
  rectangle: {
    borderRadius: 8,
  },
  circle: {
    borderRadius: 50,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: Theme.colors.Primary,
  },
  secondary: {
    backgroundColor: '#6B7280',
  },
  danger: {
    backgroundColor: Theme.colors.Error,
  },
  outline: {
    borderWidth: 1,
    borderColor: Theme.colors.Primary,
    backgroundColor: 'transparent',
  },
  small: {
    height: 32,
    paddingHorizontal: 12,
  },
  medium: {
    height: 40,
    paddingHorizontal: 16,
  },
  large: {
    height: 48,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
  iconRight: {
    marginLeft: 8,
    marginRight: 0,
  },
  disabledButton: {
    opacity: 0.6,
  },
  gradientContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradientTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
