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
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'flex-row justify-center items-center',
  {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
        danger: 'bg-red-500 text-white',
        outline: 'border border-blue-500 text-blue-500 bg-transparent',
      },
      size: {
        small: 'h-8 px-4 text-sm',
        medium: 'h-10 px-6 text-base',
        large: 'h-12 px-8 text-lg',
      },
      shape: {
        rectangle: 'rounded-lg',
        circle: 'rounded-full h-12 w-12 justify-center',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      shape: 'rectangle',
      fullWidth: false,
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text?: string;
  intent:any;
  size: any;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  isLoading?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
  gradientStyle?: ViewStyle;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  shape?: 'rectangle' | 'circle';
  accessibilityLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  intent,
  size,
  onPress,
  style,
  textStyle,
  isLoading = false,
  gradient = false,
  gradientColors = ['#4caf50', '#81c784'],
  gradientStyle,
  icon,
  iconPosition = 'left',
  children,
  disabled = false,
  fullWidth = false,
  shape = 'rectangle',
  accessibilityLabel,
}) => {
  const buttonClass = buttonStyles({ intent, size, fullWidth, shape });

  const renderContent = () => (
    <View style={[styles.content, iconPosition === 'right' && styles.rowReverse]}>
      {icon && <View style={[styles.icon, iconPosition === 'right' && styles.iconRight]}>{icon}</View>}
      {text && <Text style={[styles.text, StyleSheet.flatten(buttonClass), textStyle]}>{text}</Text>}
      {children}
    </View>
  );

  if (gradient && !disabled) {
    return (
      <LinearGradient
        colors={gradientColors}
        style={[styles.base, StyleSheet.flatten(buttonClass), gradientStyle]}
      >
        <TouchableOpacity
          style={[styles.gradientButton, style]}
          onPress={onPress}
          activeOpacity={0.8}
          disabled={isLoading || disabled}
          accessibilityLabel={accessibilityLabel}
        >
          {isLoading ? <ActivityIndicator color="white" /> : renderContent()}
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.base,
        StyleSheet.flatten(buttonClass),
        style,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading || disabled}
      accessibilityLabel={accessibilityLabel}
    >
      {isLoading ? <ActivityIndicator color={intent === 'outline' ? 'blue' : 'white'} /> : renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
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
  gradientButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;