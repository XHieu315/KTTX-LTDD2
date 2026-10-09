import React from 'react';
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, 
  Image, ImageBackground, Dimensions 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function EventDetailsScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Image */}
        <ImageBackground 
          source={require('../assets/background-events.png')}
          style={styles.headerImage}
        >
          {/* Dark gradient overlay can be simulated with a view if needed, but we'll keep it simple */}
          <View style={[styles.headerTop, { paddingTop: insets.top + 10 }]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            
            <Text style={styles.headerTitle}>Event Details</Text>
            
            <TouchableOpacity style={styles.bookmarkButton}>
              <Ionicons name="bookmark" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Floating Attendees Card */}
        <View style={styles.floatingCardContainer}>
          <View style={styles.floatingCard}>
            <View style={styles.avatarsWrapper}>
              <Image source={require('../assets/avatar1.png')} style={[styles.avatar, { zIndex: 3 }]} />
              <Image source={require('../assets/avatar2.png')} style={[styles.avatar, { zIndex: 2, marginLeft: -12 }]} />
              <Image source={require('../assets/avatar3.png')} style={[styles.avatar, { zIndex: 1, marginLeft: -12 }]} />
            </View>
            <Text style={styles.attendeesText}>+20 Going</Text>
            
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.mainTitle}>International Band Music Concert</Text>
          
          {/* Date Row */}
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="calendar" size={24} color="#5669FF" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>14 December, 2021</Text>
              <Text style={styles.infoSubtitle}>Tuesday, 4:00PM - 9:00PM</Text>
            </View>
          </View>

          {/* Location Row */}
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="location" size={24} color="#5669FF" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>Gala Convention Center</Text>
              <Text style={styles.infoSubtitle}>36 Guild Street London, UK</Text>
            </View>
          </View>

          {/* Organizer Row */}
          <View style={styles.infoRow}>
            <Image source={require('../assets/avatar-events.png')} style={styles.organizerAvatar} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>Ashfak Sayem</Text>
              <Text style={styles.infoSubtitle}>Organizer</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>

          {/* About Event */}
          <Text style={styles.aboutTitle}>About Event</Text>
          <Text style={styles.aboutText}>
            Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. <Text style={styles.readMore}>Read More...</Text>
          </Text>

        </View>
      </ScrollView>

      {/* Buy Ticket Button */}
      <View style={styles.bottomGradient}>
        <TouchableOpacity style={styles.buyButton}>
          <View style={{flex: 1}} />
          <Text style={styles.buyButtonText}>BUY TICKET $120</Text>
          <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 15}}>
            <View style={styles.arrowCircle}>
              <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 120, // space for the floating bottom button
  },
  headerImage: {
    width: '100%',
    height: 244,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  bookmarkButton: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingCardContainer: {
    alignItems: 'center',
    marginTop: -30,
    zIndex: 10,
  },
  floatingCard: {
    width: 295,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#5A5A5A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  avatarsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  attendeesText: {
    fontSize: 15,
    color: '#3F38DD',
    fontWeight: '500',
    flex: 1,
    marginLeft: 10,
  },
  inviteButton: {
    backgroundColor: '#5669FF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 7,
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  detailsContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  mainTitle: {
    fontSize: 35,
    color: '#120D26',
    fontWeight: '400',
    lineHeight: 46,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(86, 105, 255, 0.1)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  organizerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    color: '#120D26',
    fontWeight: '500',
    marginBottom: 4,
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#747688',
  },
  followButton: {
    backgroundColor: 'rgba(86, 105, 255, 0.1)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 7,
  },
  followButtonText: {
    color: '#5669FF',
    fontSize: 12,
    fontWeight: '500',
  },
  aboutTitle: {
    fontSize: 18,
    color: '#120D26',
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: '#120D26',
    lineHeight: 28,
  },
  readMore: {
    color: '#5669FF',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(255,255,255,0.9)', // Simplification of gradient
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buyButton: {
    width: 271,
    height: 58,
    backgroundColor: '#5669FF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6F7EC9',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 35,
    elevation: 8,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
    textAlign: 'center',
  },
  arrowCircle: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
