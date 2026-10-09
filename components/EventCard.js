import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventCard({ imageColor, imageSource, imageResizeMode = "contain", day, month, title, attendees, location, onPress }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.9}>
      
      {/* Image Section */}
      <View style={[styles.imageContainer, { backgroundColor: imageColor || '#FFCD6C' }]}>
        
        {imageSource && (
          <Image 
            source={imageSource} 
            style={styles.cardBgImage} 
            resizeMode={imageResizeMode} 
          />
        )}

        {/* Date Badge */}
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>{day}</Text>
          <Text style={styles.dateMonth}>{month}</Text>
        </View>

        {/* Bookmark Icon */}
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark" size={16} color="#EB5757" />
        </TouchableOpacity>

      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>

        {/* Attendees */}
        <View style={styles.attendeesContainer}>
          <View style={styles.avatarsWrapper}>
            <Image source={require('../assets/avatar1.png')} style={[styles.avatar, { zIndex: 3 }]} />
            <Image source={require('../assets/avatar2.png')} style={[styles.avatar, { zIndex: 2, left: -8 }]} />
            <Image source={require('../assets/avatar3.png')} style={[styles.avatar, { zIndex: 1, left: -16 }]} />
          </View>
          <Text style={styles.attendeesText}>{attendees}</Text>
        </View>

        {/* Location */}
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
    width: 237,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginRight: 16,
    padding: 10,
    shadowColor: '#505588',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 30,
    elevation: 3,
  },
  imageContainer: {
    height: 131,
    borderRadius: 10,
    marginBottom: 14,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden', // Để hình ảnh không bị tràn ra khỏi góc bo tròn
  },
  cardBgImage: {
    position: 'absolute',
    top: -8,
    left: -8,
    right: -8,
    bottom: -8,
  },
  dateBadge: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateDay: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F0635A',
    lineHeight: 20,
  },
  dateMonth: {
    fontSize: 10,
    fontWeight: '600',
    color: '#F0635A',
    textTransform: 'uppercase',
  },
  bookmarkButton: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
  },
  attendeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  attendeesText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3F38DD',
    marginLeft: -8, // compensate for the overlapping avatars
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 13,
    color: '#747688',
    marginLeft: 6,
    flex: 1,
  },
});
