import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';
import { Theme } from '../../../theme/theme';
import Typography from '../../atom/typography/text.component';
import { FontSizes, FontWeights } from '../../../../domain/enum/theme';
import { ActivityIndicator } from 'react-native';

const { width } = Dimensions.get('screen');



export const SwiperScroll:React.FC<{items:{id:string, label:string, image:string}[]}> = ({items})  =>  {

  

    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const data = [
        { id: '-2', label: lastItem.label, image: lastItem.image }, // Add last item at first
        ...items, // Original items
        { id: '-1', label: firstItem.label, image: firstItem.image }, // Add first item at last
      ];
 const scrollStarted = useSharedValue(false);
  const scroll = useSharedValue(1);
  const scrollRef = useAnimatedRef();
  const scrollValue = useSharedValue(0);
  const [activeCard, setActiveCard] = useState<number>(1);

  
  const logActiveCard = (index: number) => {
    if (index >= 0 && index < data.length - 2) {
      setActiveCard(parseInt(data[index + 1].label));
    }
  };

  const activeIndex = useDerivedValue(() => {
    const val = Math.round(scrollValue.value / width);
    if (val === 0) {
      return data.length - 3; // First logical item
    } else if (val === data.length - 1) {
      return 0; // Last logical item
    }
    return val - 1; // Adjust for extra items
  });

  useDerivedValue(() => {
    runOnJS(logActiveCard)(activeIndex.value);
  });

  useDerivedValue(() => {
    scrollTo(scrollRef, scroll.value * width, 0, false);
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollValue.value = event.contentOffset.x;
    },
  });

  const onMomentumScrollEnd = () => {
    if (scrollStarted.value) {
      const val = Math.round(scrollValue.value / width);
      scroll.value =
        val === 0 ? data.length - 2 : val === data.length - 1 ? 1 : val;
    }
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollBegin={() => {
          scrollStarted.value = true;
        }}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        {data.map((x) => (
          <View style={styles.item} key={x.id}>
            <ImageBackground
              source={{
                uri: 'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 30 }} // Apply border-radius to image
            >
             <View style={{padding:20, alignItems:"flex-start", justifyContent:"flex-start"}}>
                <Typography size={FontSizes.ExtraLarge} weight={FontWeights.Bold}>
                    Lanch
                </Typography>
             </View>
            </ImageBackground>
          </View>
        ))}
      </Animated.ScrollView>

      <View style={styles.dotsContainer}>
        {data.slice(1, -1).map((_, index) => {
          const isActive = activeIndex.value === index;
          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: isActive
                    ? Theme.colors.BrownDark
                    : Theme.colors.GrayLight + '66',
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
  item: {
    height: 150,
    width: width,
  },
  imageBackground: {
    width: '95%',
    height: '100%',
    borderRadius: 30,
    overflow: 'hidden', // Ensure content doesn't overflow the rounded corners
    
    marginLeft:'5%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    height: 3,
    width: 40,
    borderRadius: 2,
    marginHorizontal: 5,
  },
});
