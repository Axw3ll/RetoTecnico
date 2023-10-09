import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { CardCanciones } from "../Components/CardCanciones";
import { RecentTracks } from "../Hooks/Tracks";
import {
  ProfileScreenStyles,
  ProfileScreenStylesLandscape,
} from "../Styles/ProfileScreenStyles";
import Entypo from "react-native-vector-icons/Entypo";
import CardTopArtist from "../Components/CardTopArtist";
import { Dimensions } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [artist, setArtist] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);
  const [orientation, setOrientation] = useState(
    Dimensions.get("window").width > Dimensions.get("window").height
  );

  useEffect(() => {
    const orientation = ({ window }) => {
      const { width, height } = window;
      setOrientation(width > height);
    };
    Dimensions.addEventListener("change", orientation);
    const getTopArtist = async () => {
      try {
        const TopArtistStorage = await AsyncStorage.getItem("artist");
        const TopArtist = JSON.parse(TopArtistStorage);
        setArtist(TopArtist);
      } catch (error) {
        console.log(error);
      }
    };
    const getRecentTracks = async () => {
      try {
        const response = await RecentTracks();
        setRecentTracks(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTopArtist();
    getRecentTracks();
    return () => {
      Dimensions.removeEventListener("change", orientation);
    };
  }, []);
  const Styles = orientation
    ? ProfileScreenStylesLandscape
    : ProfileScreenStyles;
  return (
    <View style={Styles.Container}>
      <View style={Styles.Header}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Entypo name="menu" size={26} color="#FFF" />
        </Pressable>
      </View>
      <View>
        <Text style={Styles.nameUser}>My Profile</Text>
        <Image
          source={require("../assets/usuario.png")}
          style={Styles.imageProfile}
        />
      </View>
      <View style={Styles.ContainerFlatlist}>
        <Text style={Styles.topArtistsLabel}>Recent Tracks</Text>

        <FlatList
          data={recentTracks}
          horizontal={false}
          renderItem={({ item }) => (
            <CardTopArtist
              name={item.track}
              artista={item.artist}
              img={item.image}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
