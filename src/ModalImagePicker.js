import React from 'react'
import {View,Text, TouchableOpacity, Modal, StyleSheet,Image} from 'react-native'
import colors from '../constant/colors'

const ModalImagePicker=({visible, imageuri,onChooseImage, onSave, onCancel }) => {
  return{
    <Modal visible={visible} animationType="slide" transparent= {true} onRequestClose={onCancel}  >
    <View style={styles.modalContainer}>
    <View style ={syles.modalContent}>
    <Text style= {styles.modalTitle}> Cambiar foto de perfil </Text>
   <Image source={{uri: imageUri}} style={stylesPreview}/>
    <TouchableOpacity style = {style.imageButton} onPress={onChooseImage}>
      <Text style={style.imageButtonText}> Seleccionar imagen </Text>
  </TouchableOpacity>
  <View style={styles.modalButtons}>
  <TouchableOpacity style={styles.imageButto} onPress={onCancel}>
    <Text style={style.imageButtonText}> Cancelar </Text>
  </TouchableOpacity>
  }
}
