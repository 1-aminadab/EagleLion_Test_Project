import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../../component/atom/button/button.component';
import { Intent, Size } from '../../../domain/enum/button';
import Swiper from '../../component/molecule/card/nav-card.component';
import { FoodCardComponent } from '../../component/molecule/card';
import SwipeableModal from '../../component/molecule/modal/swipeable-modal';
import SwipableModal from '../../component/molecule/modal/swipeable-modal';
import Input from '../../component/atom/input/input.component';
import SearchInput from '../../component/molecule/input/search-input';

const RegistrationScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{flex:1, gap:10 }}>
       <Button
        text="Continue"
        intent={Intent.Primary}
        size={Size.Large}
        onPress={() => {}}
        isLoading={false}
        gradient
        style={{marginHorizontal:10}}
      />
<Swiper />
<FoodCardComponent/>
<Input/>
<SearchInput/>
<TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>
<SwipableModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <Text style={styles.modalTitle}>Hello from the Modal!</Text>
        <Text style={styles.modalText}>
          You can add any content you want here.
        </Text>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setIsModalVisible(false)}
        >
          <Text style={styles.modalButtonText}>Close Modal</Text>
        </TouchableOpacity>
      </SwipableModal>
</View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    width:100
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    padding: 15,
    backgroundColor: '#ff4444',
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

