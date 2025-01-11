import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleProp,
} from 'react-native';
import Icon, { IconLibraryName } from '../../component/atom/icon/icon.component';
import { Theme } from '../../theme/theme';
import { FontSizes, FontWeights } from '../../../domain/enum/theme';
import { NavComponent } from '../../component/molecule/card/nav-card.component';

const { width } = Dimensions.get('screen');

const PromoFoodCard = ({ title, image, tag }) => (
  <View style={styles.promoCard}>
    {tag && (
      <View style={styles.promoTag}>
        <Text style={styles.promoTagText}>{tag}</Text>
      </View>
    )}
    <Image source={{ uri: image }} style={styles.foodImage} />
    <Text style={styles.promoCardTitle}>{title}</Text>
  </View>
);

const RestaurantScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Highlight Section */}
      <View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/08/08/19/09/kebab-2619309_1280.jpg',
          }}
          style={styles.headerImage}
        />
        <View style={styles.discountTag}>
          <Text style={styles.discountTagText}>30% Off</Text>
        </View>
        <TouchableOpacity style={styles.backButton}>
          <Icon from={IconLibraryName.MaterialIcons} name="arrow-back-ios" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon from={IconLibraryName.MaterialIcons} name="more-horiz" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Restaurant Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>Spice and Sizzle</Text>
        <View style={styles.ratingRow}>
          <View style={{ backgroundColor: Theme.colors.GrayLight, flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 20 }}>
            <Icon from={IconLibraryName.MaterialIcons} name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5 (62) ^</Text>
          </View>

          <Text style={styles.dot}>•</Text>
          <Text style={styles.priceLevel}><Text style={{ color: Theme.colors.black }}>$$</Text> $</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.cuisine} >Pakistani, Desi, Kebab</Text>
        </View>

        {/* Delivery/Takeaway Toggle */}
        <View style={styles.deliveryToggle}>
          <TouchableOpacity style={styles.toggleButtonActive}>
            <Text style={styles.toggleButtonTextActive}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>Takeaway</Text>
          </TouchableOpacity>
        </View>

        {/* Address */}

        <NavComponent
          icon={
            <Icon from={IconLibraryName.MaterialIcons} name="location-pin" size={22} color={Theme.colors.black} />
          }
          title="By Snoonu,"
          description="Al Maamoura, Doha, Al Rayyan Municipality, Qatar"
        />
        <NavComponent
          icon={
            <Icon from={IconLibraryName.MaterialIcons} name="timer" size={20} color={Theme.colors.black} />
          }
          title="In 28 min"
          description="Tap to schedule order"
        />
        <NavComponent
          icon={
            <Icon from={IconLibraryName.MaterialIcons} name="group" size={20} color={Theme.colors.black} />
          }
          title="Start group order"
        />

      </View>

      {/* Best Selling Section */}
      <View style={styles.bestSellingContainer}>
        <Text style={styles.bestSellingTitle}>Best Selling</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PromoFoodCard
            title="Chicken Corn Soup"
            image="https://cdn.pixabay.com/photo/2017/01/19/23/51/chicken-soup-1990036_1280.jpg"
            tag="Promo"
          />
          <PromoFoodCard
            title="Hyderabadi Biryani"
            image="https://cdn.pixabay.com/photo/2019/06/23/10/33/biryani-4298554_1280.jpg"
            tag="Promo"
          />
          <PromoFoodCard
            title="Mutton Reshmi Kebab"
            image="https://cdn.pixabay.com/photo/2016/03/05/20/07/kebab-1238612_1280.jpg"
            tag="Promo"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  discountTag: {
    position: 'absolute',
    top: 20,
    left: 15,
    backgroundColor: '#FF5733',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  discountTagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 15,
  },
  detailsContainer: {
    padding: 15,
    // backgroundColor:"red",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

  },
  restaurantName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  dot: {
    marginHorizontal: 5,
    color: '#888',
  },
  priceLevel: {
    fontSize: 14,
    color: Theme.colors.gray,
    fontWeight: FontWeights.Bold,
  },
  cuisine: {
    fontSize: 14,
    color: Theme.colors.gray,
    fontWeight: FontWeights.Bold,
  },
  deliveryToggle: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#f5f5f5',
    padding: 7,
    borderRadius: 30,

  },
  toggleButtonActive: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 30,

  },
  toggleButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
  },
  toggleButtonText: {
    color: Theme.colors.black,
    fontSize: Theme.fontSizes.Medium,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
    justifyContent: "flex-start",
    marginRight: 20
  },
  infoText: {
    marginLeft: 10,
    fontWeight: FontWeights.Bold,
    fontSize: FontSizes.Large,

  },
  description: {
    marginLeft: 5,
    color: Theme.colors.gray,
  },
  bestSellingContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  bestSellingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoCard: {
    marginRight: 10,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    paddingBottom: 10,
    alignItems: 'center',
  },
  promoTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF5733',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    zIndex: 1,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20

  },
  promoTagText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  foodImage: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  promoCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default RestaurantScreen;
