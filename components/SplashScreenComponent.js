import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreenComponent({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Background Blobs (Mô phỏng các Ellipse mờ trong Figma) */}
      <View style={[styles.blob, styles.blob1]} />
      <View style={[styles.blob, styles.blob2]} />
      <View style={[styles.blob, styles.blob3]} />

      {/* Logo EventHub */}
      <View style={styles.logoContainer}>
        {/* Biểu tượng chữ 'e' (Dùng thẻ Image) */}
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logoImage} 
          resizeMode="contain" 
        />

        {/* Chữ ventHub */}
        <Text style={styles.textVent}>vent</Text>
        <Text style={styles.textHub}>Hub</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Để các blob không bị tràn ra ngoài
  },
  /* --- Background Blobs --- */
  blob: {
    position: 'absolute',
    borderRadius: 200,
    opacity: 0.3,
  },
  blob1: {
    width: 300,
    height: 300,
    top: -100,
    left: width / 2 - 150,
    backgroundColor: '#9895EE', // Tím nhạt
  },
  blob2: {
    width: 400,
    height: 400,
    bottom: -150,
    right: -150,
    backgroundColor: '#ECACAD', // Hồng nhạt
  },
  blob3: {
    width: 250,
    height: 250,
    bottom: 50,
    left: -100,
    backgroundColor: '#B9DAFB', // Xanh dương nhạt
  },
  /* --- Logo Styles --- */
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 56,
    height: 56,
    marginRight: 10,
  },
  textVent: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#5669FF', // Xanh dương (Secondary)
    letterSpacing: -1,
  },
  textHub: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#00F8FF', // Xanh lơ (Cyan)
    letterSpacing: -1,
  },
});
