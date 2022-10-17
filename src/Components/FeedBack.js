import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { AirbnbRating } from 'react-native-ratings';
import Modal from "react-native-modal";
import React from "react"
import CloseIcon from '../public/Icons/close.svg'

export default function FeedBack({textModal, showModal, hideModal}) {
        return(
            <View style={styles.parentContainer}>
                    <Modal visible={showModal}>
                        <View style={styles.modalCard}>
                        <View style={{alignSelf: 'flex-end', backgroundColor: '#2F3270'}}>
                            <TouchableHighlight underlayColor={false} onPress={() => hideModal()}>
                                <CloseIcon width={23} height={23}/>
                            </TouchableHighlight>
                        </View>
                        <AirbnbRating count={4} reviews={['Tidak Membantu', 'Lumayan Membantu', 'Membantu', 'Sangat Membantu']} size={30} reviewColor={'#fff'} reviewSize={17}/>
                        <View style={{backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, marginTop: 10}}>
                            <Text style={{textAlign: 'center', marginVertical: 10}}>{textModal}</Text>
                            <View>
                                <TouchableHighlight style={styles.containerButton} underlayColor={false} onPress={() => hideModal()}>
                                    <Text>Tanyakan Saya Nanti</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.containerButton} underlayColor={false} onPress={() => hideModal()}>
                                    <Text>Keluar</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.containerButton} underlayColor={false} onPress={() => hideModal()}>
                                    <Text>Kirim</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        </View>
                    </Modal>
            </View>
        )
}

const styles = StyleSheet.create({ 
    modalCard: {
        backgroundColor: '#AAD8EA',
        width: 250,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        alignSelf: 'center',
    },
    parentContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    containerButton: {
        alignSelf: 'flex-end',
        marginBottom: 15
    }
})