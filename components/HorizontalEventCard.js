import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HorizontalEventCard({ imageSource, date, title, location, onPress }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.9}>
      
      {/* Image Section */}
      <Image source={imageSource} style={styles.image} resizeMode="cover" />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.dateAndBookmark}>
          <Text style={styles.dateText}>{date}</Text>
          <TouchableOpacity>
            <Ionicons name="bookmark" size={16} color="#EB5757" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={14} color="#747688" />
          <Text style={styles.locationText} numberOfLines={1}>{location}</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 327,
    height: 106,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 10,
    marginRight: 16,
    shadowColor: '#493E83',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 5,
  },
  image: {
    width: 79,
    height: 92,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  dateAndBookmark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 13,
    color: '#5669FF',
    fontWeight: '500',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#120D26',
    marginBottom: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 13,
    color: '#747688',
    marginLeft: 4,
    flex: 1,
  },
});
