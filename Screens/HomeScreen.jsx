import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { CardCanciones } from "../Components/CardCanciones";
import { TopArtists, getTopTracks } from "../Hooks/Tracks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DetailMusic from "../Components/DetailMusic";
import Entypo from "react-native-vector-icons/Entypo";
import HomeScreenStyles from "../Styles/HomeScreenStyles";
import ReproductorModal from "../Components/ReproductorModal";
const HomeScreen = ({ navigation }) => {

  const [dataSongs, setDataSongs] = useState([]);
  const [dataTopArtis, setDataTopArtist] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [reproductorVisible, setReproductorVisible] = useState(false);
  const [infoSong, setInfoSong] = useState([]);

  useEffect(() => {
    const topMusic = async () => {
      try {
        const response = await getTopTracks();
        setDataSongs(response);
      } catch (error) {
        console.log(error);
      }
    };
    topMusic();
    setTopArtist();
  }, []);

  const setTopArtist = async () => {
    try {
      const topArtist = await TopArtists();
      setDataTopArtist(topArtist);
      await AsyncStorage.setItem("artist", JSON.stringify(topArtist));
      setDataTopArtist(topArtist);
    } catch (error) {
      console.log(error);
    }
  };
  const CancionDetail = (name) => {
    const cancionDetail = dataSongs.filter((item) => item.track === name);
    setInfoSong(cancionDetail[0]);
  };
  return (
    <View style={{ padding: 10 }}>
      <View style={HomeScreenStyles.Header}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Entypo name="menu" size={26} color="#FFF" />
        </Pressable>
        <Text
          style={HomeScreenStyles.textHeader}
        >
          Poll,Top Tracks this Week, All Genres
        </Text>
      </View>
      <FlatList
        data={dataSongs}
        renderItem={({ item }) => (
          <CardCanciones
            name={item.track}
            artista={item.artist}
            img={item.image}
            setModalVisible={setModalVisible}
            CancionDetail={CancionDetail}
            setReproductorVisible={setReproductorVisible}
          />
        )}
        style={HomeScreenStyles.flatList}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <DetailMusic infoSong={infoSong} />
      </Modal>      
      {reproductorVisible ? <ReproductorModal infoSong={infoSong} />: null}
    </View>
  );
};

export default HomeScreen;
