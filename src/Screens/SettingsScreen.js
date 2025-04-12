import React,{useState,useEffect} from 'react'
import{View, Text,Touchable} from 'react-native'
import {useAuth} from '../context/AuthContext'
import ModalEditProfile from '../components/ModalEditProfile'
import {updateEmail,updatePassword, updateProfile} from 'firebase/auth'
import {showMessage} from 'react-native-flash-message'
import {useNavigation} from '@react-navigation/native'
import * ImagePicker from 'expo-image-picker'

const   CLOUDINARY_URL= 'https://api-cloudinary.com/v1_1/dvt9eesc4/image/upload'
const UPLOAD_PRESET= 'IMAGE_CITAPRO'

const SettingsScreen =() =>{
  const navigation = useNavigation();
  const {user, setUser}=useAuth();
  const [imageUri. setImageUri]= useState(null);
  const defaultImage= require
  conts[isModalVisible, setModalVisible]= useState(false)
  const[modalTitle,setModalTitle]= useState('')
  const [FieldValue,setFieldValue]= useState('')

  const handleGoBack= () =>{
    navigation.goBack()
  }

  useEffect(()=>{
    if(user && user.photoURL){
      setImageUri(user.photoURL)
    }else{
      setImageUri(defaultImage)
    }
  },[user])
}
