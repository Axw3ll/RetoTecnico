import React from 'react'
import { Text, View,StyleSheet,Image, TouchableOpacity,Button, Pressable} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
export const CardCanciones = ({name,artista,img,setModalVisible,modalVisible,CancionDetail,setReproductorVisible,reproductorVisible}) => {
  return (
    
        <TouchableOpacity 
            style={styles.contianer}
            onPress={() =>{setModalVisible(!modalVisible), CancionDetail(name)}  
            } 
        >
            <Image style={styles.imgContainer} source={{uri:img}}/>
        <View>
            <Text style={styles.songName}>{name}</Text>
            <Text style={styles.artistName}>{artista}</Text>
        </View>
        <Pressable 
            onPress={() =>{setReproductorVisible(!reproductorVisible), CancionDetail(name)}}
            style={{marginLeft:'auto',marginRight:10,justifyContent:'center',alignItems:'center'}}
        >
            <Ionicons name="play" size={30} color="white" />
        </Pressable>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    contianer:{
        width:'90%',
        height:100,
        padding:5,
        flexDirection:'row',
        marginHorizontal:'3%',
        borderBottomColor:'gray',
        borderBottomWidth:.1,
        alignItems:'center'
    },
    imgContainer:{
        backgroundColor:'blue',
        width:56,
        height:56,
        borderRadius:10,
        marginHorizontal:5,
        marginVertical:5
    },
    songName:{
        marginTop:10,
        marginHorizontal:5,
        marginBottom:5,
        fontSize:20,
        fontWeight:'bold',
        color:'#FAFBFF'
    },
    artistName:{
        marginHorizontal:5,
        color:'gray'
    },  
})