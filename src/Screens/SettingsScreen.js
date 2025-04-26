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
const handleChooseImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
 
      if (status !== 'granted') {
        showMessage({
          message: 'Permiso denegado',
          description: 'Se necesita permiso para acceder a la galería.',
          type: 'danger',
        });
        return;
      }
 
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
 
      if (result.canceled) {
        showMessage({
          message: 'Cancelado',
          description: 'No se seleccionó ninguna imagen.',
          type: 'info',
        });
        return;
      }
 
      setImageUri(result.assets[0].uri);
    } catch (error) {
      console.error('Error seleccionando la imagen:', error);
      showMessage({
        message: 'Error',
        description: 'Ocurrió un error al intentar seleccionar la imagen.',
        type: 'danger',
      });
    }
  };
 
const uploadImage = async () => {
    if (!user || !imageUri) {
      console.error('Usuario o URI de imagen no válidos:', { user, imageUri });
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });
      formData.append('upload_preset', UPLOAD_PRESET);
 
      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });
 
      const data = await response.json();
 
      if (data.secure_url) {
        await updateProfile(auth.currentUser, { photoURL: data.secure_url });
        setUser({ ...user, photoURL: data.secure_url });
        setImageUri(data.secure_url);
        showMessage({
          message: 'Éxito',
          description: 'Foto de perfil actualizada correctamente.',
          type: 'success',
        });
      } else {
        throw new Error(data.error?.message || 'No se pudo obtener la URL de la imagen subida');
      }
    } catch (error) {
      console.error('Error subiendo la imagen:', error);
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
      });
    } finally {
      setImageModalVisible(false);
    }
  };
  
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
}finally{
    setModalVisible(false)
}
}

return{
  <View style=(style.container)>
  <TouchableOpacity style={styles.backButton} onPress=(handleGoBack)>
  <Text style=(styles.backButtonText)> Volver </Text>
  </TouchableOpacity>
  <Text style=()> Ajustes </Text>
<Text style=()> Sobre tu cuenta </Text>
}

export default SettingScreen



import ModalEditProfile from '../components/ModalEditProfile'
import ModalImagePicker from '../components/ModalImagePicker'
import * as ImagePicker from 'expo-image-picker'
  
<ModalEditProfile
        visible={isEditModalVisible}
        title={modalTitle}
        value={fieldValue}
        onChangeText={setFieldValue}
        onSave={handleSave}
        onCancel={() => setEditModalVisible(false)}
      />
 
      <ModalImagePicker
        visible={isImageModalVisible}
        imageUri={imageUri}
        onChooseImage={handleChooseImage}
        onSave={uploadImage}
        onCancel={() => setImageModalVisible(false)}
      />
    </View>
