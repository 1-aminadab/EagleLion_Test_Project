/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, Modal, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../component/atom/button/button.component';
import Typography from '../../component/atom/typography/text.component';
import { Shape } from '../../../domain/enum/button';
import { Theme } from '../../theme/theme';
import Icon, { IconLibraryName } from '../../component/atom/icon/icon.component';
import { Colors, FontSizes, FontWeights } from '../../../domain/enum/theme';

export default function FoodSwiperScreen() {
  const [viewHeight, setHeight] = useState<number | null>(null);

  return (
    <View style={styles.container} onLayout={(e) => setHeight(e.nativeEvent.layout.height)}>
      {viewHeight && (
        <FlatList
          data={data}
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          decelerationRate="fast"
          renderItem={({ item }) => (
            <View style={[styles.item, { height: viewHeight }]}>
              <ImageBackground style={styles.img} source={{ uri: item }} resizeMode="cover">
                {/* Gradient Overlay */}
                <View style={{alignItems:'center', position:'absolute', top:'50%', left:'85%'}}>
                      <Button
                    icon={<Icon from={IconLibraryName.Feather} name="share" size={24} color={Theme.colors.white} />}
                    style={styles.shareButton}
                    shape={Shape.Circle}

                    onPress={() => {}}
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

                {/* Header */}
                <View style={styles.header}>
                  <Button
                    icon={<Icon from={IconLibraryName.Ionicons} name="arrow-back" size={20} color="white" />}
                    style={styles.iconButton}
                    onPress={() => {}}
                    shape={Shape.Circle}
                  />
                  <Typography size={FontSizes.Medium} weight={FontWeights.Bold} color={Theme.colors.white} style={styles.headerText}>
                    Top Picks for Lunch
                  </Typography>


                </View>

                {/* Bottom Card */}
                <View style={styles.card}>
                  {/* Restaurant Info */}

                  <View style={styles.restaurantInfo}>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=',
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
                        53 mins
                      </Typography>
                    </View>
                  </View>
                  <View  style={{backgroundColor: Theme.colors.GrayDark + 'ee', flexDirection:'row', alignItems:'center', padding:10, borderRadius:15}}>
                    <View style={{flex: 1}}>
                       <Typography numberOfLines={1} size={FontSizes.Medium} weight={FontWeights.Bold} color={Theme.colors.white} >
                    Mixed Steamed Dim Sum Basket
                  </Typography>
                  <Typography size={FontSizes.Small} weight={FontWeights.Bold} color={Colors.white} >
                    140 QR
                  </Typography>
                  <Typography numberOfLines={2} size={FontSizes.Small}   color={Theme.colors.GrayLight} >
                    Two Pieces Prawn And Truffle Dumplings, Two Pieces Chicken And ...
                  </Typography>

                    </View>
                    <View>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo=',
                      }}
                      style={{width:65,
                        height:65,
                        borderRadius: 15,
                      }}
                    />
                     <Button

                    icon={<Icon from={IconLibraryName.Ionicons} name="add" size={24} color={Theme.colors.black} />}
                    style={styles.addButton}
                    onPress={() => {}}
                  />
                    </View>
                  </View>
                  {/* Food Info */}


                  {/* Add to Cart Button */}

                </View>
              </ImageBackground>
            </View>
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
    position:'absolute',
    top:'35%',
    left:'50%',
  },
});

const data = [
  'https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg',
  'https://i.pinimg.com/originals/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg',
  'https://i.pinimg.com/originals/65/95/85/6595856323f822a5e9b6411c5d415b49.jpg',
];
