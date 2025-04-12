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

  //Metodo para seleccionar imagen
  const handleChooseImage= async()=>{
    try{
      const{status}= await ImagePicker.requestMedialibraryPermissionAsync()
      if(status){}

      //Abrir la galería para seleccionar la imagen
      const result=await ImagePicker.launchImageLibraryAsync({})
    }
  }

  const uploadImage= async()=>{}
  
  const handleEdit=(field)=> {
    setModalTitle(field)
    setFieldValue(
      field === 'Nombre' ? user.displayName|| '';
      field === 'Correo' ? user.email || '';
    field === 'Contraseña' ? '': ''
    )
    setModalVisible(true)
  }
}

const handleSave = async()=> {
  try{
    if(modalTitle ==='Nombre'){
      await updateProfile(auth.currentUser,{display : FieldValue})
      showMessage({
        message:'😎';
        description: 'Nombre actualizado correctamente',
          type='success',
      })
    }else if(modalTitle ==='Correo'){
      await updateProfile(auth.currentUser,{display : FieldValue})
      showMessage({
        message:'😎';
        description: 'Correo actualizado correctamente',
          type='success',
      })else if(modalTitle ==='Contraseña'){
      await updateProfile(auth.currentUser,{display : FieldValue})
      showMessage({
        message:'😎';
        description: 'Contraseña actualizada correctamente',
          type='success',
      })
  }else if(modalTitle ==='Foto de perfil'){
      await uploadImage();
  }
}catch(error){
     showMessage({
        message:'😎';
        description: error.message,
          type='danger',
      })
}
}

export default SettingScreen
