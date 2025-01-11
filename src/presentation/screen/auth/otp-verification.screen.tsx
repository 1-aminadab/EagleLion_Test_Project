import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import Typography from '../../component/atom/typography/text.component';
import Button from '../../component/atom/button/button.component';
import { FontSizes, FontWeights } from '../../../domain/enum/theme';
import Header from '../../component/molecule/card/header.component';

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(29); // Countdown timer
  const [resendVisible, setResendVisible] = useState(false); // Resend button visibility

  // Countdown logic
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setResendVisible(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    Alert.alert('Verification Code', 'We have sent a verification code to your phone number.');
    setTimer(29); // Restart timer
    setResendVisible(false);
  };

  const formatOtp = (value: string): string => {
    const paddedValue = value.padEnd(6, '•');
    const formatted = `${paddedValue.slice(0, 3)}-${paddedValue.slice(3)}`;
    return formatted;
  };

  return (
    <View style={styles.container}>
      <Header title="hello" />
      <View style={{ flex: 1, marginTop: 90 }}>
        <Typography size={FontSizes.ExtraLarge} weight={FontWeights.Bold} align="center" style={styles.title}>
          Enter Code
        </Typography>
        <Typography size={14} align="center" style={styles.subtitle}>
          We've sent the 6-digit code to
        </Typography>
        <Typography size={14} align="center" style={styles.subtitle}>
          +974 •••• ••••
        </Typography>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={(text) => {
            // Allow only numeric input
            const numericValue = text.replace(/[^0-9]/g, '');
            setOtp(numericValue);
          }}
          placeholder={formatOtp('')}
          placeholderTextColor="#ccc"
          textAlign="center"
        />

        <Typography size={24} align="center" style={styles.formattedOtp}>
          {formatOtp(otp)}
        </Typography>

        {resendVisible ? (
          <Button
            text="Resend Code"
            onPress={handleResend}
            fullWidth
            style={styles.resendButton}
          />
        ) : (
          <Typography size={12} align="center" style={styles.timer}>
            Request a new code in 0:{timer.toString().padStart(2, '0')}
          </Typography>
        )}

        <Button
          text="Verify"
          onPress={() => {
            console.log('OTP Verified:', otp);
          }}
          fullWidth
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
    color: '#888',
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginBottom: 24,
    opacity: 0, // Hide the input text but keep it interactive
    position: 'absolute',
    width: '100%',
    height: 50,
  },
  formattedOtp: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginBottom: 24,
  },
  timer: {
    marginBottom: 24,
    color: '#888',
  },
  resendButton: {
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
});

export default OtpVerificationScreen;
