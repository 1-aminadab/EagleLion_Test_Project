import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from '../../component/atom/button/button.component';
import { Intent, Size } from '../../../domain/enum/button';

const RegistrationScreen = () => {
  return (
    <View style={{flex:1, }}>
       <Button
        text="Continue"
        intent={Intent.Primary}
        size={Size.Large}
        onPress={() => {}}
        isLoading={false}
      />

    </View>
  )
}

export default RegistrationScreen;

const styles = StyleSheet.create({

});

