import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, FlatList, Image
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import EventCard from './EventCard';

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const renderCategory = (iconLib, iconName, label, bgColor) => (
    <TouchableOpacity style={[styles.categoryPill, { backgroundColor: bgColor }]}>
      {iconLib === 'Ionicons' && <Ionicons name={iconName} size={18} color="#FFFFFF" />}
      {iconLib === 'MaterialIcons' && <MaterialIcons name={iconName} size={18} color="#FFFFFF" />}
      {iconLib === 'FontAwesome5' && <FontAwesome5 name={iconName} size={16} color="#FFFFFF" />}
      <Text style={styles.categoryText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Header Section */}
        <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
          <View style={styles.headerTop}>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={28} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>Current Location</Text>
              <View style={styles.locationRow}>
                <Text style={styles.locationValue}>New Yourk, USA</Text>
                <Ionicons name="caret-down" size={12} color="#FFFFFF" style={{ marginLeft: 4 }} />
              </View>
            </View>

            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchRow}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#FFFFFF" style={{ opacity: 0.6 }} />
              <Text style={styles.searchPlaceholder}>| Search...</Text>
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="options" size={16} color="#FFFFFF" />
              <Text style={styles.filterText}>Filters</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
            {renderCategory('Ionicons', 'basketball-outline', 'Sports', '#F0635A')}
            {renderCategory('Ionicons', 'musical-notes-outline', 'Music', '#F59762')}
            {renderCategory('Ionicons', 'restaurant-outline', 'Food', '#29D697')}
            {renderCategory('Ionicons', 'color-palette-outline', 'Art', '#46CDFB')}
          </ScrollView>
        </View>

        {/* Upcoming Events */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="caret-forward" size={12} color="#747688" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
          <EventCard
            onPress={() => navigation.navigate('EventDetails')}
            imageColor="#FFCD6C"
            imageSource={require('../assets/hand.png')}
            day="10"
            month="JUNE"
            title="International Band Mu..."
            attendees="+20 Going"
            location="36 Guild Street London, UK"
          />
          <EventCard
            onPress={() => navigation.navigate('EventDetails')}
            imageColor="#B9DAFB"
            imageSource={require('../assets/shoes.png')}
            day="10"
            month="JUNE"
            title="Jo Malone London's Mo..."
            attendees="+20 Going"
            location="Radius Gallery • Santa Cruz, CA"
          />
        </ScrollView>

        {/* Invite Banner */}
        <View style={styles.inviteBanner}>
          <View style={styles.inviteContent}>
            <Text style={styles.inviteTitle}>Invite your friends</Text>
            <Text style={styles.inviteSubtitle}>Get $20 for ticket</Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>INVITE</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/ticket.png')}
            style={styles.inviteImage}
            resizeMode="contain"
          />
        </View>

        {/* Nearby You */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby You</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="caret-forward" size={12} color="#747688" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}>
          <EventCard
            onPress={() => navigation.navigate('EventDetails')}
            imageColor="#ECACAD"
            imageSource={require('../assets/hand.png')}
            day="12"
            month="JUNE"
            title="Gala Music Festival"
            attendees="+20 Going"
            location="36 Guild Street London, UK"
          />
          <EventCard
            onPress={() => navigation.navigate('EventDetails')}
            imageColor="#9895EE"
            imageSource={require('../assets/shoes.png')}
            day="14"
            month="JUNE"
            title="Women's Leadership"
            attendees="+20 Going"
            location="Radius Gallery • Santa Cruz, CA"
          />
        </ScrollView>

      </ScrollView>

      {/* Custom Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="compass" size={24} color="#5669FF" />
          <Text style={[styles.tabLabel, { color: '#5669FF' }]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('EventDetails')}>
          <Ionicons name="calendar-outline" size={24} color="#C4C4C4" />
          <Text style={styles.tabLabel}>Events</Text>
        </TouchableOpacity>

        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab}>
            <Ionicons name="add" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Map')}>
          <Ionicons name="location-outline" size={24} color="#C4C4C4" />
          <Text style={styles.tabLabel}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#C4C4C4" />
          <Text style={styles.tabLabel}>Profile</Text>
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
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#4A43EC',
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationLabel: {
    color: '#FFFFFF',
    opacity: 0.7,
    fontSize: 12,
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  notificationButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#02E9FE',
    borderWidth: 1,
    borderColor: '#4A43EC',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 35,
  },
  searchPlaceholder: {
    color: '#FFFFFF',
    opacity: 0.3,
    fontSize: 20,
    marginLeft: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5D56F3',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 15,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 4,
  },
  categoriesContainer: {
    marginTop: -20, // To overlap the curved header slightly if needed, but in design it is below
    paddingTop: 30, // Adjust space
    marginBottom: 25,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 39,
    borderRadius: 20,
    marginRight: 12,
    shadowColor: '#2E2E4F',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 3,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#120D26',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#747688',
    marginRight: 4,
  },
  inviteBanner: {
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'rgba(0, 248, 255, 0.16)',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  inviteContent: {
    flex: 1,
  },
  inviteTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#120D26',
    marginBottom: 5,
  },
  inviteSubtitle: {
    fontSize: 13,
    color: '#484D70',
    marginBottom: 12,
  },
  inviteButton: {
    backgroundColor: '#00F8FF',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  inviteImage: {
    position: 'absolute',
    right: -10,
    top: -15,
    width: 263,
    height: 164,
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20, // Safe area for iPhone
    shadowColor: '#9DB2D6',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#C4C4C4', // Inactive color
  },
  fabContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#5669FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4A43EC',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
});
