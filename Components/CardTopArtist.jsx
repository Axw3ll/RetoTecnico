import React from 'react'
import { StyleSheet,View,Text,Image, TouchableOpacity } from 'react-native'
import { truncateString } from '../Helpers/TruncateStringHelper'
const CardTopArtist = ({name,artista,img}) => {

  return (
    <TouchableOpacity 
        style={styles.contianer}
        onPress={()=>{}}
        >
        <Image
        style={styles.imgContainer}
        source={{uri:img}}
        />
        <View>
            <Text style={styles.songName}>{truncateString(name,18)}</Text>
            <Text style={styles.artistName}>{artista}</Text>
        </View>
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
export default CardTopArtist