/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../component/atom/button/button.component';
import Typography from '../../component/atom/typography/text.component';
import { Shape } from '../../../domain/enum/button';
import { Theme } from '../../theme/theme';
import Icon, { IconLibraryName } from '../../component/atom/icon/icon.component';
import { Colors, FontSizes, FontWeights } from '../../../domain/enum/theme';
import { dummyFoods } from '../../../application/data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import { addFoodToCart, selectFood, setFoodItems } from '../../../application/stores/slices/food/food.slice';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeScreens } from '../../../domain/enum/screen-name';
import IconButton from '../../component/atom/button/icon-button.component';
import { RootState } from '../../../application/stores/store';

export default function FoodSwiperScreen() {
  const { cart, totalCartItems } = useSelector((state: RootState) => state.food);
  console.log(totalCartItems);

  const [viewHeight, setHeight] = useState<number | null>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();
  const handleSelectFood = (id: string) => {
    dispatch(selectFood({ id }));
    navigation.navigate(HomeScreens.FoodDetail);
  };
  useEffect(() => {
    dispatch(setFoodItems(dummyFoods));
  }, [])
  return (
    <View style={styles.container} onLayout={(e) => setHeight(e.nativeEvent.layout.height)}>
      {/* Header */}
      <View style={styles.header}>
        <Button
          icon={<Icon from={IconLibraryName.Ionicons} name="arrow-back" size={20} color="white" />}
          style={styles.iconButton}
          onPress={() => { }}
          shape={Shape.Circle}
        />
        <Typography size={FontSizes.Medium} weight={FontWeights.Bold} color={Theme.colors.white} style={styles.headerText}>
          Top Picks for Lunch
        </Typography>
        <View style={{position:"relative"}}>
          
            <Typography size={FontSizes.ExtraSmall} style={{zIndex:1,position:"absolute", left:"80%",top:"0%", height:10, width:10, alignItems:"center" borderRadius:10, backgroundColor:"white"}}>
{
  totalCartItems
}
            </Typography>
          <IconButton
          onPress={() => navigation.navigate(HomeScreens.Cart)}
          icon={<Icon from={IconLibraryName.Ionicons} name="fast-food" size={24} color={Theme.colors.Primary} />}
          />
        </View>
        
      </View>
      {viewHeight && (
        <FlatList
          data={dummyFoods}
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          decelerationRate="fast"
          renderItem={({ item }) => (
            <TouchableOpacity onLongPress={() => handleSelectFood(item.id)} style={[styles.item, { height: viewHeight }]}>
              <ImageBackground style={styles.img} source={{ uri: item.imageUrl }} resizeMode="cover">
                {/* Gradient Overlay */}
                <View style={{ alignItems: 'center', position: 'absolute', top: '50%', left: '85%' }}>
                  <Button
                    icon={<Icon from={IconLibraryName.Feather} name="share" size={24} color={Theme.colors.white} />}
                    style={styles.shareButton}
                    shape={Shape.Circle}

                    onPress={() => { }}
                  />
                  <Typography weight={FontWeights.Bold} size={FontSizes.Small} color={Theme.colors.white}>
                    Share
                  </Typography>
                </View>
                <LinearGradient
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 0, y: 1 }}
                  colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.5)']}
                  style={styles.gradient}
                />



                {/* Bottom Card */}
                <View style={styles.card}>
                  {/* Restaurant Info */}
                  <View style={styles.restaurantInfo}>
                    <Image
                      source={{
                        uri: item.imageUrl,
                      }}
                      style={styles.profileImage}
                    />
                    <View style={styles.textContainer}>
                      <Typography size={FontSizes.Small} weight={FontWeights.Bold} color={Theme.colors.white} >
                        {'Shanghai Me >'}
                      </Typography>
                      <Typography size={FontSizes.ExtraSmall}
                        weight={FontWeights.Bold}
                        color={Theme.colors.white} >
                        {item.deliveryTime}
                      </Typography>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.Cart)} style={{ backgroundColor: Theme.colors.GrayDark + 'ee', flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 15 }}>
                    <View style={{ flex: 1 }}>
                      <Typography numberOfLines={1} size={FontSizes.Medium} weight={FontWeights.Bold} color={Theme.colors.white} >
                        {item.name}
                      </Typography>
                      <Typography size={FontSizes.Small} weight={FontWeights.Bold} color={Colors.white} >
                        {item.quantity} QR
                      </Typography>
                      <Typography numberOfLines={2} size={FontSizes.Small} color={Theme.colors.GrayLight} >
                        {item.description}
                      </Typography>

                    </View>
                    <View>
                      <Image
                        source={{
                          uri: item.imageUrl,
                        }}
                        style={{
                          width: 65,
                          height: 65,
                          borderRadius: 15,
                        }}
                      />
                      <Button

                        icon={<Icon from={IconLibraryName.Ionicons} name="add" size={24} color={Theme.colors.black} />}
                        style={styles.addButton}
                        onPress={() => { dispatch(addFoodToCart({ id: item.id! })) }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
    zIndex:10,
    // backgroundColor:"red"
  },
  iconButton: {
    backgroundColor: Theme.colors.GrayDark,
    height: 47,
    width: 47,
    // padding: 10,
  },
  shareButton: {
    backgroundColor: Theme.colors.white + '99',
    height: 47,
    width: 47,
    // padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 20,
    padding: 20,
    // marginHorizontal: 5,
    marginBottom: 30,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 20,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 35,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  restaurantName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeText: {
    color: 'gray',
    fontSize: 14,
  },
  foodTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  foodDescription: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    color: '#90EE90',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: Theme.colors.white,
    width: 35,
    height: 35,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: '35%',
    left: '50%',
  },
});

