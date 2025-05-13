import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuth } from '../context/AuthContext'



const HomeScreen = () => {
  const {user}= useAuth()
  return (
    <View>
      <Text style={styles.subtitle}>Hola {user?.displayName || 'Usuario'}</Text>
      <Text style={styles.text} >Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      color: colors.luminous,
      fontWeight: 'bold'
    }
    })

export default HomeScreen