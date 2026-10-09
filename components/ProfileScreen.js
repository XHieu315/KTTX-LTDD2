import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('ABOUT');

  const interests = [
    { name: 'Games Online', color: '#EE544A' },
    { name: 'Concert', color: '#F59762' },
    { name: 'Music', color: '#29D697' },
    { name: 'Art', color: '#46CDFB' },
    { name: 'Movie', color: '#EE544A' },
    { name: 'Others', color: '#F59762' },
  ];

  const events = [
    {
      id: 1,
      image: require('../assets/hand.png'),
      date: '1ST MAY- SAT -2:00 PM',
      title: 'A virtual evening of smooth jazz',
    },
    {
      id: 2,
      image: require('../assets/shoes.png'),
      date: '1ST MAY- SAT -2:00 PM',
      title: "Jo malone london's mother's day",
    },
    {
      id: 3,
      image: require('../assets/hand.png'),
      date: '1ST MAY- SAT -2:00 PM',
      title: "Women's leadership conference",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Rocks Velkeinjen',
      date: '10 Feb',
      rating: 4,
      text: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    },
    {
      id: 2,
      name: 'Angelina Zolly',
      date: '10 Feb',
      rating: 3,
      text: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    },
    {
      id: 3,
      name: 'Zenifero Bolex',
      date: '10 Feb',
      rating: 4,
      text: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
    },
  ];

  const renderStars = (rating) => {
    return (
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name={star <= rating ? 'star' : 'star-outline'}
            size={16}
            color={star <= rating ? '#FFC107' : '#E0E0E0'}
            style={{ marginRight: 2 }}
          />
        ))}
      </View>
    );
  };

  const renderAboutTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.aboutText}>
        Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase.{' '}
        <Text style={styles.readMore}>Read More</Text>
      </Text>

      <View style={styles.interestSection}>
        <View style={styles.interestHeader}>
          <Text style={styles.interestTitle}>Interest</Text>
          <TouchableOpacity style={styles.changeButton}>
            <Ionicons name="pencil" size={14} color="#5669FF" />
            <Text style={styles.changeText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.interestTags}>
          {interests.map((interest, index) => (
            <View key={index} style={[styles.tag, { backgroundColor: interest.color }]}>
              <Text style={styles.tagText}>{interest.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderEventTab = () => (
    <View style={styles.tabContent}>
      {events.map((event) => (
        <TouchableOpacity key={event.id} style={styles.eventItem}>
          <Image source={event.image} style={styles.eventImage} />
          <View style={styles.eventInfo}>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventTitle}>{event.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderReviewsTab = () => (
    <View style={styles.tabContent}>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <Image source={require('../assets/avatar-profile.png')} style={styles.reviewAvatar} />
            <View style={styles.reviewHeaderInfo}>
              <View style={styles.reviewNameRow}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              {renderStars(review.rating)}
            </View>
          </View>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#120D26" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={22} color="#120D26" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/avatar-profile.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>David Silbia</Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>350</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>346</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.followButton}>
              <Ionicons name="person-add-outline" size={18} color="#FFFFFF" />
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messagesButton}>
              <Ionicons name="chatbubble-outline" size={18} color="#5669FF" />
              <Text style={styles.messagesButtonText}>Massages</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Bar */}
        <View style={styles.tabBar}>
          {['ABOUT', 'EVENT', 'REVIEWS'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabButtonText, activeTab === tab && styles.tabButtonTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        {activeTab === 'ABOUT' && renderAboutTab()}
        {activeTab === 'EVENT' && renderEventTab()}
        {activeTab === 'REVIEWS' && renderReviewsTab()}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#120D26',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#120D26',
  },
  statLabel: {
    fontSize: 14,
    color: '#747688',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: '#DADADA',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5669FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    gap: 8,
    shadowColor: '#5669FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 4,
  },
  followButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  messagesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#5669FF',
    gap: 8,
  },
  messagesButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5669FF',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingHorizontal: 24,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabButtonActive: {
    borderBottomColor: '#5669FF',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9B9B9B',
  },
  tabButtonTextActive: {
    color: '#5669FF',
  },
  tabContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  // ABOUT tab
  aboutText: {
    fontSize: 16,
    lineHeight: 25,
    color: '#120D26',
    marginBottom: 24,
  },
  readMore: {
    color: '#5669FF',
    fontWeight: '500',
  },
  interestSection: {
    marginTop: 4,
  },
  interestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  interestTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#120D26',
  },
  changeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  changeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5669FF',
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  // EVENT tab
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    marginRight: 16,
  },
  eventInfo: {
    flex: 1,
  },
  eventDate: {
    fontSize: 13,
    fontWeight: '500',
    color: '#5669FF',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#120D26',
    lineHeight: 22,
  },
  // REVIEWS tab
  reviewItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  reviewHeaderInfo: {
    flex: 1,
  },
  reviewNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#120D26',
  },
  reviewDate: {
    fontSize: 14,
    color: '#ADAFBB',
  },
  starsRow: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#3C3E56',
    paddingLeft: 48,
  },
});
