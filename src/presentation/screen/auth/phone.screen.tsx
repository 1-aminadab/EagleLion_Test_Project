import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import SwipableModal from '../../component/molecule/modal/swipeable-modal';
import Header from '../../component/molecule/card/header.component';
import Typography from '../../component/atom/typography/text.component';
import { FontSizes } from '../../../domain/enum/theme';
import Icon, { IconLibraryName } from '../../component/atom/icon/icon.component';
import { Theme } from '../../theme/theme';
import Button from '../../component/atom/button/button.component';
import { Size } from '../../../domain/enum/button';
import { useNavigation } from '@react-navigation/native';
import { AuthScreens } from '../../../domain/enum/screen-name';

const countries = [
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'UAE', code: '+971', flag: '🇦🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
];

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to Qatar
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  // Validate phone number
  const validatePhoneNumber = (number: string): boolean => {
    const minLength = 8; // Example: Minimum 8 digits
    const maxLength = 15; // Example: Maximum 15 digits
    const regex = /^[0-9]+$/; // Only numbers
    return regex.test(number) && number.length >= minLength && number.length <= maxLength;
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);

    // Clear error when user starts typing
    if (errorMessage) setErrorMessage('');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const selectCountry = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  const toVerifyOtp = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(AuthScreens.OTP as never);
    }, 4000);
  };

  const isButtonDisabled = phoneNumber.trim() === '' || !validatePhoneNumber(phoneNumber);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: isModalVisible ? '#0001' : '#fff' }]}
      behavior="padding"
    >
      <Header />
      {/* Title */}
      <Typography size={FontSizes.ExtraLarge} style={styles.title}>
        Login or create an account
      </Typography>

      {/* Input Section */}
      <View style={styles.inputWrapper}>
        <TouchableOpacity onPress={openModal} style={styles.countryCode}>
          <Text style={styles.countryCodeText}>
            {selectedCountry.flag} {selectedCountry.code}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      {/* Error Message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Continue Button */}
      <Button
        isLoading={isLoading}
        size={Size.Large}
        style={{ borderRadius: 15, height: 55 }}
        disabled={isButtonDisabled}
        onPress={toVerifyOtp}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Button>

      {/* Modal for Country Selection */}
      <SwipableModal visible={isModalVisible} onClose={() => setModalVisible(false)}>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={styles.modalHeader}>Choose country</Text>
        </View>
        {countries.map((country) => (
          <TouchableOpacity
            key={country.code}
            style={styles.countryRow}
            onPress={() => selectCountry(country)}
          >
            <Text
              style={[
                styles.countryText,
                selectedCountry.code === country.code && styles.selectedCountry,
              ]}
            >
              {country.flag} {country.name}
            </Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>{country.code}</Text>
              {selectedCountry.code === country.code && (
                <Icon
                  from={IconLibraryName.MaterialIcons}
                  name="done"
                  size={20}
                  color={Theme.colors.Primary}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </SwipableModal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  countryCodeText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  countryRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 7,
  },
  countryText: {
    fontSize: 16,
  },
  selectedCountry: {
    color: 'rgb(248, 109, 109)',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default PhoneNumberInput;
