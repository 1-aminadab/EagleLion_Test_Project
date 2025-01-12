import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { countries, ILocation } from '../../../domain/dummy-datas/countrys';
import SwipableModal from '../../component/molecule/modal/swipeable-modal';
import SearchInput from '../../component/molecule/input/search-input';
import Button from '../../component/atom/button/button.component';
import { Size } from '../../../domain/enum/button';
import { useNavigation } from '@react-navigation/native';
import { HomeScreens, RootScreens } from '../../../domain/enum/screen-name';

const MapScreen = () => {
  const navigation  = useNavigation()
  const [searchText, setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(countries[0].location);
  const [modalVisible, setModalVisible] = useState(true);
  const mapRef = useRef(null);
  
  const handleCountrySelect = (location: ILocation) => {
    setSelectedLocation(location);
    // setModalVisible(false);

    mapRef.current.animateToRegion(
      {
        ...location,
        latitudeDelta: 5,
        longitudeDelta: 5,
      },
      500
    );
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* MapView */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          ...countries[0].location,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        onPress={() => setModalVisible(true)} // Open modal on map press
      >
        <Marker
          coordinate={selectedLocation}
          title="Selected Location"
          description="This is the selected country"
          // image={require('../../assets/images/pointer.png')}
        >
            <View style={styles.customMarker}>
            <Image
              source={require('../../assets/images/pointer.png')}
              style={styles.markerImage}
            />
          </View>
        </Marker>
      </MapView>

      {/* Swipable Modal */}
      <SwipableModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <View style={styles.modalContent}>
          {/* Floating Search Input */}
          <SearchInput
            placeholder="Search country..."
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />

          {/* Country List */}
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => {
              const isSelected =
                selectedLocation.latitude === item.location.latitude &&
                selectedLocation.longitude === item.location.longitude;

              return (
                <TouchableOpacity
                  style={[
                    styles.countryItem,
                    isSelected && styles.selectedCountryItem, // Highlight selected item
                  ]}
                  onPress={() => handleCountrySelect(item.location)}
                >
                  <Text style={styles.countryText}>
                    {item.flag} {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Button onPress={() => navigation.navigate(RootScreens.Home, {screen:HomeScreens.Home})} size={Size.Large} style={{ borderRadius: 50 }}>
          <Text style={styles.openModalText}>Confirm Location</Text>
        </Button>
      </SwipableModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 0,
  },
  searchInput: {
    marginBottom: 10,
    width:'100%'
  },
  openModalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryItem: {
    padding: 15,
    // borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectedCountryItem: {
    backgroundColor: '#d3f9d855', 
    borderRadius: 50
  },
  countryText: {
    fontSize: 18,
  },
  customMarker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerImage: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
});

export default MapScreen;
