import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Theme } from '../../../theme/theme';

const foodCardComponent = () => {
  return (
    <View style={{
      width: 120,
      height: 140,
      // backgroundColor: 'red',
      borderRadius: 20,
      marginBottom: 20,
      alignItems:"center",
      padding:10
    }}>
      <View style={{
             backgroundColor: '#90EE90',
             padding: 5,
             borderRadius: 30,
             position: 'absolute',
             top: 0,
             left: 70,
             zIndex: 1,
             width: 60,
             alignItems: 'center',
             justifyContent: 'center',
      }}>
      <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: 'white',
     
        }}>
          24/7
        </Text>
      </View>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg"}}
      style={{
        flex:1,
        width: '100%',
        // height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
      }}
      />
      <Text style={{fontWeight:"bold" ,fontSize:15, color: Theme.colors.GrayDark}}>
        Restaurants
      </Text>
    </View>
  );
};

export default foodCardComponent;

const styles = StyleSheet.create({});
