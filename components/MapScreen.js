import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import HorizontalEventCard from './HorizontalEventCard';

const { width } = Dimensions.get('window');

export default function MapScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState('Sports');

  const categories = [
    { name: 'Sports', icon: 'basketball', color: '#EE544A' },
    { name: 'Music', icon: 'music-note', color: '#6B7AED' },
    { name: 'Food', icon: 'silverware-fork-knife', color: '#29D697' },
    { name: 'Art', icon: 'palette', color: '#39C3F2' },
  ];

  const markers = [
    { id: 1, latitude: 36.9741, longitude: -122.0308, type: 'Music', color: '#6B7AED', icon: 'music-note' },
    { id: 2, latitude: 36.9785, longitude: -122.0200, type: 'Food', color: '#29D697', icon: 'silverware-fork-knife' },
    { id: 3, latitude: 36.9680, longitude: -122.0150, type: 'Art', color: '#39C3F2', icon: 'palette' },
    { id: 4, latitude: 36.9650, longitude: -122.0350, type: 'Sports', color: '#EE544A', icon: 'basketball' },
  ];

  const initialRegion = {
    latitude: 36.9741,
    longitude: -122.0308,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  return (
    <View style={styles.container}>
      {/* Real Map */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton={false}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          >
            <View style={styles.markerContainer}>
              <View style={[styles.markerBubble, { backgroundColor: marker.color }]}>
                <MaterialCommunityIcons name={marker.icon} size={14} color="#FFFFFF" />
              </View>
              <View style={[styles.markerArrow, { borderTopColor: marker.color }]} />
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Top Gradient */}
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0)']}
        style={[styles.topGradient, { height: insets.top + 130 }]}
        pointerEvents="none"
      />

      {/* Header Area */}
      <View style={[styles.headerContainer, { paddingTop: insets.top + 20 }]}>
        <View style={styles.searchRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#120D26" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput 
              style={styles.searchInput}
              placeholder="Find for food or restaurant..."
              placeholderTextColor="rgba(97, 102, 121, 0.5)"
            />
          </View>
          <TouchableOpacity style={styles.myLocationButton}>
            <Ionicons name="locate" size={20} color="#5669FF" />
          </TouchableOpacity>
        </View>

        {/* Categories ScrollView */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.categoryPill}
              onPress={() => setActiveCategory(cat.name)}
            >
              <MaterialCommunityIcons name={cat.icon} size={16} color={cat.color} />
              <Text style={styles.categoryText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Gradient */}
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)', '#FFFFFF']}
        style={styles.bottomGradient}
        pointerEvents="none"
      />

      {/* Bottom Floating Action and Cards */}
      <View style={styles.bottomContainer}>
        <View style={styles.fabRow}>
          <View style={{flex: 1}} />
          <TouchableOpacity style={styles.listFab}>
            <Ionicons name="list" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.eventsScrollContainer}
        >
          <HorizontalEventCard 
            imageSource={require('../assets/hand.png')}
            date="Wed, Apr 28 • 5:30 PM"
            title="Jo Malone London's Mother's Day Presents"
            location="Radius Gallery • Santa Cruz, CA"
            onPress={() => navigation.navigate('EventDetails')}
          />
          <HorizontalEventCard 
            imageSource={require('../assets/shoes.png')}
            date="Wed, Apr 28 • 5:30 PM"
            title="Gala Music Festival"
            location="36 Guild Street London, UK"
            onPress={() => navigation.navigate('EventDetails')}
          />
        </ScrollView>
      </View>

    </View>
  );
}

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: screenHeight,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D3D1D8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 4,
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 14,
    color: '#120D26',
    paddingVertical: 0,
  },
  myLocationButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D3D1D8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 4,
    marginLeft: 10,
  },
  categoriesContainer: {
    paddingHorizontal: 24,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
    shadowColor: '#ADAFBB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryText: {
    fontSize: 15,
    color: '#8A8D9F',
    marginLeft: 8,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerBubble: {
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 181,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30, // SafeArea bottom padding
  },
  fabRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  listFab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 6,
  },
  eventsScrollContainer: {
    paddingHorizontal: 24,
  }
});
