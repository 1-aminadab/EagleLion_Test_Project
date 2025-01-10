import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SwipableModal from '../../component/molecule/modal/swipeable-modal';
import Input from '../../component/atom/input/input.component';
import Button from '../../component/atom/button/button.component';

const countries = [
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'UAE', code: '+971', flag: '🇦🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
];

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to Qatar
  const [isModalVisible, setModalVisible] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    // Enable the button if the phone number is not empty
    setButtonDisabled(text.trim() === '');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const selectCountry = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Phone Number Input */}
      <Input
        label="Login or create an account"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        style={styles.inputContainer}
        inputStyle={styles.input}
        icon={
          <Text onPress={openModal} style={styles.flag}>
            {selectedCountry.flag} {selectedCountry.code}
          </Text>
        }
        iconPosition="left"
      />

      {/* Button */}
      <Button
        text="Continue"
        onPress={() => console.log('Phone Number:', `${selectedCountry.code} ${phoneNumber}`)}
        disabled={isButtonDisabled}
        style={isButtonDisabled ? styles.disabledButton : styles.activeButton}
      />

      {/* Modal */}
      <SwipableModal visible={isModalVisible} onClose={() => setModalVisible(false)}>
        <Text style={styles.modalHeader}>Choose country</Text>
        {countries.map((country) => (
          <View key={country.code} style={styles.countryRow}>
            <Text
              style={[
                styles.countryText,
                selectedCountry.code === country.code && styles.selectedCountry,
              ]}
              onPress={() => selectCountry(country)}
            >
              {country.flag} {country.name} {country.code}
            </Text>
          </View>
        ))}
      </SwipableModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    paddingLeft: 50, // To make space for the flag
  },
  flag: {
    fontSize: 16,
    marginRight: 8,
    color: '#333',
  },
  activeButton: {
    backgroundColor: 'rgb(109, 2, 248)',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  countryText: {
    fontSize: 16,
  },
  selectedCountry: {
    color: 'rgb(109, 2, 248)',
    fontWeight: 'bold',
  },
});

export default PhoneNumberInput;
