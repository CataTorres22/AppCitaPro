import React,{useEffect} from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';



const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Register')},3000)
        return () => clearTimeout(timer)
    }, [navigation])
  return (
    <View>
      <Text style={styles.text} >Loading...</Text>
        <Image source={require('../../src/constants/colors')} style={styles.logo} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    color: colors. default,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,   
  },
});

export default SplashScreen