import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { truncateString } from "../Helpers/TruncateStringHelper";
const ReproductorModal = ({ infoSong }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.containerImage} source={{ uri: infoSong.image }} />
      <View style={styles.contentContainer}>
        <View style={styles.infoSong}>
          <View View>
            <Text>{truncateString(infoSong.track,18)}</Text>
            <Text style={styles.labelArtist}>{infoSong.artist}</Text>
          </View>
          <View style={styles.musicControlls}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="play-skip-back-outline" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="pause-outline" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="play-skip-forward-outline"
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Slider
            style={styles.progresContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#000"
            thumbTintColor="#000"
            onSlidingComplete={() => {}}
          />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "white",
    bottom: 80,
    alignSelf: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
  },
  contentContainer:{ 
    flexDirection: "column",
    alignItems:"center",
    width:'80%',
    marginRight:10
  },
  infoSong: {
    marginTop: 10,
    width: "100%",
    height: "39%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImage: {
    width: "20%",
    height: 70,
    borderRadius: 10,
    backgroundColor: "green",
    margin: 5,
  },
  labelArtist: {
    color: "gray",
    fontSize: 12,
  },
  progresContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
  },
  musicControlls: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
});
export default ReproductorModal;
