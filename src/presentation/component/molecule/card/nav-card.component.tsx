import React, { useEffect } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Theme } from '../../../theme/theme';

const { width } = Dimensions.get('screen');

const data = [
  { id: '1', label: 1 },
  { id: '2', label: 2 },
  { id: '3', label: 3 },
  { id: '4', label: 4 },
];
const firstItem = data[0];
const lastItem = data[data.length - 1];
data.push({ id: '-1', label: firstItem.label }); // Add first item at last
data.unshift({ id: '-2', label: lastItem.label }); // Add last item at first

export default function ContinuousScrollBannerReanimated() {
  const scrollStarted = useSharedValue(0);
  const scroll = useSharedValue(1);
  const progress = useSharedValue(0); // Progress for the bar
  const scrollRef = useAnimatedRef();

  useDerivedValue(() => {
    // Automatically scroll with animation
    scrollTo(scrollRef, scroll.value * width, 0, true); // `true` for animated scroll
  });

  const scrollValue = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
        console.log(scroll);
        
      scrollValue.value = event.contentOffset.x;
    },
  });

  const onMomentumScrollEnd = () => {
    if (scrollStarted.value === true) {
      const val = Math.round(scrollValue.value / width);
      if (val === 0) {
        scroll.value = data.length - 2;
      } else if (val === data.length - 1) {
        scroll.value = 1;
      } else {
        scroll.value = val;
      }
    }
  };

  // Automatic sliding with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollStarted.value === 0) {
        scroll.value = scroll.value + 1 > data.length - 2 ? 1 : scroll.value + 1;
      }
    }, 3000); // Adjust the interval for desired timing

    return () => clearInterval(interval);
  }, []);

  // Update progress bar on card change
  useEffect(() => {
    progress.value = withTiming((scroll.value - 1) / (data.length - 3), { duration: 500 });
  }, [scroll.value]);

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
        onScroll={scrollHandler}>
        {data.map((x) => (
          <View style={styles.item} key={x.id}>
            <View style={{
              width: '90%',
              height: '100%',
              backgroundColor: 'blue',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              overflow:"hidden"
            }}>
             <ImageBackground source={{uri: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="}} style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 20,
              }} >
                <View style={{margin:20}}>
                    <Text style={{fontWeight:"condensedBold", fontSize:25, fontFamily: 'Poppins-Bold'}}>
                        Launch
                    </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* lines Bar */}
      <View style={styles.progressBarContainer} >
        {
            data.map(( line, index) => {
                return (
                    <View key={line.id} style={{
                        width: 40,
                        height: 4,
                        backgroundColor: index === scroll.value ? Theme.colors.brown : Theme.colors.GrayLight,
                    }} />
                );
            })
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap : 0,
  },
  list: {
    alignItems: 'center',
  },
  item: {
    height: 150,
    width: width,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  txt: {
    fontSize: 20,
    color: '#fff',
  },
  progressBarContainer: {
    height: 10,
    marginTop: 5,
    borderRadius: 5,
    alignItems:'center',
    flexDirection:'row',
    gap: 10,
  },
});
