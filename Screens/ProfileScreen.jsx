import React, { useEffect,useState} from 'react'
import { View,Text,Image, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import { CardCanciones } from '../Components/CardCanciones';
import { RecentTracks } from '../Hooks/Tracks';
import ProfileScreenStyles from '../Styles/ProfileScreenStyles';
import Entypo from "react-native-vector-icons/Entypo";
import CardTopArtist from '../Components/CardTopArtist';
const ProfileScreen = (
  {navigation}
) => {
    const [artist,setArtist] = useState([]);
    const [recentTracks,setRecentTracks] = useState([]);

    useEffect(() => {
      const getTopArtist = async () => {
        try{
          const TopArtistStorage  = await AsyncStorage.getItem('artist')
          const TopArtist = JSON.parse(TopArtistStorage);
          setArtist(TopArtist);

        }catch(error){
          console.log(error);
        }
      }
      const getRecentTracks = async () => {
        try {
          const response = await RecentTracks()
          setRecentTracks(response)
        } catch (error) {
          console.log(error)
        }
      }
      getTopArtist();
      getRecentTracks();
    }, []);
  return (
    <View style={{padding:10}}>
      <View style={{ marginTop: "10%",flexDirection:"row",alignItems:'center'}}>
      <Pressable
          onPress={() => {navigation.openDrawer();
          }}
        >
          <Entypo name="menu" size={26} color="#FFF"/>
        </Pressable>
        <Text
          style={{
            color: "#FFF",
            fontSize: 28,
            fontWeight: 700,
            marginLeft: 125,
                     }}
        >
          My Profile
        </Text>
     
      </View>
         <Image
            source={require('../assets/usuario.png')}
            style={ProfileScreenStyles.imageProfile}
            /> 
            <Text style={ProfileScreenStyles.topArtistsLabel}>Top Artist</Text>
            <FlatList
            data={artist}
            horizontal={false}
            renderItem={({item}) => <CardTopArtist name={item.name} artista={item.artist} img={item.image} />}
            /> 

            {/* Recient tracks
            <FlatList
            data={recentTracks}
            horizontal={false}
            renderItem={({item}) => <CardCanciones name={item.name} artista={item.artist} img={item.image} />}
           /> */}
    </View>
  )
}

export default ProfileScreen
