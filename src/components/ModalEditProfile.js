import React from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'

const ModalEditProfile = ({ visible, title, value, onChangeText, onSave, onCancel }) => {
    return (
        <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onCancel}>
            <View style={styles.ModalContainer}>
                <View style={styles.ModalContainer}>
                    <Text style={styles.ModalContainer}></Text>
                    <TextInput style={styles.TextInput}
                        placeholder={`Nuevo${title.toLowerCase()}`}
                        value={value} onChangeText={onChangeText} />
                    <View style={styles.ModalButtons}>
                        <TouchableOpacity style={styles.ModalButton} onPress={onCancel}>
                            <Text style={style.ModalButtonText}>Cancelar</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.ModalButton, styles.saveButton]} onPress={onSave}>
                            <Text style={style.ModalButtonText}>Guardar</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: colors.fondoClaro,
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: colors.default,
    },
    modalInput: {
      width: '100%',
      height: 40,
      borderColor: colors.variante3,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    modalButton: {
      flex: 1,
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: colors.variante3,
    },
    saveButton: {
      backgroundColor: colors.exito,
    },
    modalButtonText: {
      color: colors.luminous,
      fontWeight: 'bold',
    },
  });
  
  export default ModalEditProfile;