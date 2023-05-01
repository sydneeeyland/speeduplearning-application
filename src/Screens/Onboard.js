// Package
import { useState, useRef } from "react";

// Component
import { View, FlatList, Animated, Text, Pressable } from "react-native";
import Items from "../Modules/Onboard/Items";
import Paginator from "../Modules/Onboard/Paginator";

// Styles
import { OnboardStyles } from "../Assets/Styles/Onboard";

// Constant
import { Slides } from "../Constant/OnboardSlides";

export default function Onboard({ onGetStarted }) {
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const buttonBG = currentIndex === 3 ? "#ffd952" : "whitesmoke";
  const buttonText = currentIndex === 3 ? "#0b2d48" : "black";

  const handleChange = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={OnboardStyles.container}>
      <View style={OnboardStyles.slidesContainer}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <Items item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={handleChange}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <Paginator data={Slides} scrollX={scrollX} />
      <Pressable onPress={() => onGetStarted()}>
        <View style={[OnboardStyles.button, { backgroundColor: buttonBG }]}>
          <Text style={[OnboardStyles.buttonText, { color: buttonText }]}>
            GET STARTED
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
