import { IFood } from "../../presentation/types";

export const dummyFoods: IFood[] = [
    {
      id: '1',
      name: 'Spicy Chicken Burger',
      price: 8.99,
      description: 'A juicy chicken burger with a spicy kick, topped with fresh lettuce and tangy sauce.',
      availability: true,
      deliveryTime: '25-30 mins',
      imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quantity: 50,
    },
    {
      id: '2',
      name: 'Vegan Salad Bowl',
      price: 12.49,
      description: 'A healthy mix of fresh greens, quinoa, and a tangy lemon dressing.',
      availability: true,
      deliveryTime: '15-20 mins',
      imageUrl: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quantity: 30,
    },
    {
      id: '3',
      name: 'Chocolate Lava Cake',
      price: 6.99,
      description: 'A warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
      availability: false,
      deliveryTime: 'Unavailable',
      imageUrl: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quantity: 0,
    },
  ];
