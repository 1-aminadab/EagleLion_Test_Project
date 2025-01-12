/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, StyleSheet,  ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import FoodCardComponent from '../../component/molecule/card/food-card.component';
import SearchInput from '../../component/molecule/input/search-input';
import Button from '../../component/atom/button/button.component';
import Icon, { IconLibraryName } from '../../component/atom/icon/icon.component';
import { Theme } from '../../theme/theme';
import { Intent, Shape } from '../../../domain/enum/button';
import Typography from '../../component/atom/typography/text.component';
import { FontSizes, FontWeights } from '../../../domain/enum/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeScreens } from '../../../domain/enum/screen-name';
import SwiperBanner from '../../component/molecule/card/swiper.component';

const { width } = Dimensions.get('screen');
  const homefoodData = [
    { image: 'https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA=', text: 'Restaurant', tag:{title:'New', color:Theme.colors.Primary} },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRr1s6IHX1AAIzaPSbAqwApeW7Lngn2qD8xg&s', text: 'Snomart' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIcMpcc-GAnYwcxmrPwmoRJNMuDFt6av_Sw&s', text: 'Grocery' },

    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDv5PE7uRMIwGaRNXIJxg7d9MtsyW_8hv0Q&s', text: 'Gifting', tag: {title:'Popular'

 , color:'#90EE90'} },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDv5PE7uRMIwGaRNXIJxg7d9MtsyW_8hv0Q&s', text: 'Pharmacy', tag: {title:'Popular'
 , color:'#90EE90'}},
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIcMpcc-GAnYwcxmrPwmoRJNMuDFt6av_Sw&s', text: 'Health & Beauty' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDv5PE7uRMIwGaRNXIJxg7d9MtsyW_8hv0Q&s', text: 'Gifting', tag: {title:'Popular'   , color:'#90EE90'}},

  ];
const HomeScreen = () => {
  const navigation  = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView style={styles.container}>
      {/* Address Section */}
      <View style={styles.addressContainer}>
        <View style={{}}>
           <Text style={styles.addressText}>Address</Text>
        <Text style={styles.addressValue}>Doha, Doha, Qatar</Text>
        </View>
       <View>
        <Button
        onPress={() => {}}
        icon={<Icon from={IconLibraryName.MaterialCommunityIcons} name="star-four-points-outline" size={19} color={Theme.colors.white} />}
        gradient
        text="0 QR"
        textStyle={{fontSize:12}}
        style={{borderRadius:20}}
        // gradientStart={{ x: 0.5, y: 0 }} // Gradient starts from the middle top
        gradientEnd={{ x: 0.5, y: 1 }}   // Gradient ends at the middle bottom
        />
       </View>
      </View>

      {/* Search Input */}
      <SearchInput
        style={styles.searchInput}
        placeholder="Search for stores or products"
      />

      {/* Continuous Swiper */}
      <View style={styles.swiperContainer}>
        <SwiperBanner/>
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Breakfast</Text>
      <View style={styles.cardContainer}>
        {foodData.map((item, index) => (
          <FoodCardComponent
            onPress={() => navigation.navigate(HomeScreens.FoodSwiper)}
            key={index}
            image={item.image}
            text={item.text}
            tag={item.tag}
          />
        ))}
        <View style={{alignItems:'center', justifyContent: 'center'}}>
            <Button
            onPress={() => Alert.alert('more options')}
        shape={Shape.Circle}
        intent={Intent.Secondary}
        icon={<Icon from={IconLibraryName.MaterialCommunityIcons} name="dots-grid" size={44} color="black" />}
        style={{height:70, width: 70, backgroundColor:Theme.colors.GrayLight + '77'}}
        />
        <Typography size={FontSizes.Small}weight={FontWeights.Bold}>
          More
        </Typography>
        </View>

      </View>


      {/* Services Section */}
      <View style={styles.serviceSection}>
        <Text style={styles.sectionTitle}>Services</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal >
        {foodData.map((item, index) => (
          <FoodCardComponent
            onPress={() => navigation.navigate(HomeScreens.FoodSwiper)}
            key={index}
            image={item.image}
            // text={item.text}
            tag={item.tag}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 15,
    // borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width:width,
  },
  addressText: {
    fontSize: 12,
    color: '#888',
  },
  addressValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    // margin: 15,
    // padding: 10,
    // borderRadius: 10,
    // fontSize: 16,
  },
  swiperContainer: {
    height: 180,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  serviceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20,
  },
  seeAll: {
    color: '#ff4757',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
