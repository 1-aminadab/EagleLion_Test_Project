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
  const foodStoresData = [
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