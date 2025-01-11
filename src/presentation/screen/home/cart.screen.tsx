import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Typography from '../../component/atom/typography/text.component';
import { FontSizes, FontWeights } from '../../../domain/enum/theme';
import { Theme } from '../../theme/theme';
import Button from '../../component/atom/button/button.component';
import { Size } from '../../../domain/enum/button';
import  {NavComponent} from '../../../presentation/component/molecule/card/nav-card.component';
import Icon, { IconLibraryName } from '../../component/atom/icon/icon.component';

// Individual Cart Item Component
const CartItem = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(item.price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(-item.price);
    }
  };

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Typography color={Theme.colors.black} weight={FontWeights.Bold} size={FontSizes.Large}>{item.title}</Typography>
        <Typography weight={FontWeights.Bold}  color={Theme.colors.gray}>{item.description}</Typography>
        <Typography size={FontSizes.Large} weight={FontWeights.Bold} color={Theme.colors.GrayLight}>
          Edit Special Request
          </Typography>
 <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Typography weight={FontWeights.Bold} size={FontSizes.Medium} >{item.price} QR</Typography>
         <View style={styles.quantityControls}>
        <TouchableOpacity onPress={handleDecrement} style={styles.controlButton}>
          <Text style={styles.controlText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.controlButton}>
          <Text style={styles.controlText}>+</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>


    </View>
  );
};

// Main Cart Screen Component
const CartScreen = () => {
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (change) => {
    setTotal(total + change);
  };

  const cartItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/60',
      title: 'Lentil Soup',
      description: 'Serve hot',
      price: 18,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/60',
      title: 'Kachumar Salad',
      description: 'Add Special Request',
      price: 12,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/60',
      title: 'Cutlery',
      description: 'You’ve selected the number of cutlery sets',
      price: 0,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.cartList}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
        ))}
      </ScrollView>
      <NavComponent
      title= 'Voture Applied'
      icon = {        <Icon from={IconLibraryName.MaterialIcons} name="timer" size={20} color={Theme.colors.black} />
    }
      description = ''
      />
      <NavComponent
      title= 'Cuttery'
      icon = {        <Icon from={IconLibraryName.MaterialIcons} name="timer" size={20} color={Theme.colors.black} />
        
      }
      description = 'you have selected the number of cuttery set'
      />

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Typography color={Theme.colors.LightGreen} >Delivery Fee</Typography>
          <Typography color={Theme.colors.LightGreen} >0 QR</Typography>
        </View>
        <View style={styles.footerRow}>
          <Typography style={styles.footerLabel}>Total</Typography>
          <Typography style={styles.footerTotal}>{total} QR</Typography>
        </View>
        <Button onPress={() => {}} text="Go to Checkout" size={Size.Large} style={{borderRadius: 50}} icon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearText: {
    color: '#ff3d00',
    fontSize: 14,
  },
  cartList: {
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // elevation: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 12,
    color: 'gray',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  quantityControls: {
    flexDirection: 'row',
    backgroundColor:Theme.colors.GrayLight + '99',
    borderRadius:20,
    alignItems: 'center',
  },
  controlButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    // backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 18,
    fontWeight: '600',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  footerLabel: {
    fontSize: 14,
    color: 'gray',
  },
  footerValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  footerTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#ff3d00',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CartScreen;
