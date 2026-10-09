import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SLIDES = [
  {
    id: 1,
    title: "Explore Upcoming and\nNearby Events",
    subtitle: "In publishing and graphic design, Lorem is\na placeholder text commonly",
    image: require('../assets/onboarding1.png'),
  },
  {
    id: 2,
    title: "Building Better Work",
    subtitle: "Create a unique emotional experience\nfor your events",
    image: require('../assets/onboarding2.png'),
  },
  {
    id: 3,
    title: "To Look Up More Events or\nActivities Nearby By Map",
    subtitle: "In publishing and graphic design, Lorem is\na placeholder text commonly",
    image: require('../assets/onboarding3.png'), 
  }
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Chuyển sang màn hình Đăng nhập
      navigation.replace('SignIn');
    }
  };

  const handleSkip = () => {
    // Chuyển thẳng sang màn hình Đăng nhập
    navigation.replace('SignIn');
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Nửa trên: Ảnh minh hoạ tự động thay đổi */}
      <View style={styles.imageContainer}>
        <Image 
          key={currentIndex} // Đổi key để force re-render ảnh mượt hơn
          source={currentSlide.image} 
          style={styles.mockupImage} 
          resizeMode="contain"
        />
      </View>

      {/* Nửa dưới: Khung màu xanh (Base) */}
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.title}>{currentSlide.title}</Text>
          <Text style={styles.subtitle}>{currentSlide.subtitle}</Text>
        </View>

        {/* Footer chứa nút Skip, Dots, Next */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <View style={styles.dotsContainer}>
            {SLIDES.map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.dot, 
                  currentIndex === index && styles.activeDot
                ]} 
              />
            ))}
          </View>

          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  /* Phần hình ảnh */
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  mockupImage: {
    width: '80%',
    height: '90%',
  },
  /* Phần khung màu xanh (Base) */
  bottomContainer: {
    height: 320,
    backgroundColor: '#5669FF',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 34,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'System',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 15,
  },
  /* Footer (Điều hướng) */
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    opacity: 0.5,
  },
  nextText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    marginHorizontal: 4,
  },
  activeDot: {
    opacity: 1, // Dấu chấm hiện tại sáng lên
  },
});
