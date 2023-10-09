import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fater from "react-native-vector-icons/Feather";
import Evil from "react-native-vector-icons/EvilIcons";
import {DetailMusicStyles, DetailMusicStylesLandscape }  from "../Styles/DetailMusicStyles";
const DetailMusic = ({ infoSong,orientation}) => {
  const Styles = orientation ? DetailMusicStylesLandscape : DetailMusicStyles;
  return (
    <View style={{ flex: 1, marginTop: "10%" }}>
      <View style={Styles.backgroundContainer}>
        <View style={Styles.backgroundContainerShadow}></View>
      </View>
      <View style={Styles.infoContainer}>
        <Image
          style={Styles.infoImage}
          source={{ uri: infoSong.image }}
        />

        <View style={{ marginTop: "10%" }}>
          <Text
            style={Styles.nameSong}>
            {infoSong.track}
          </Text>
          <Text style={Styles.artistLabel}>{infoSong.artist}</Text>
        </View>
        <View style={Styles.reproductorContainer}>
          <View style={Styles.progressLabelContainer}>
            <Text style={Styles.progressLabelTxt}>0:00</Text>
            <Text style={Styles.progressLabelTxt}>3:30</Text>
          </View>

          <Slider
            style={Styles.progresContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#000"
            thumbTintColor="#000"
            onSlidingComplete={() => {}}
          />

          <View style={Styles.musicControlls}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="play-skip-back-outline"
                size={35}
                color="black"
                style={{ marginTop: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="pause-outline" size={65} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="play-skip-forward-outline"
                size={35}
                color="black"
                style={{ marginTop: 20 }}
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.iconsContainer}>
            <View style={Styles.icon}>
              <Text style={Styles.listenerLabel}>
                <Evil name="like" size={25} color={"black"} />
              </Text>
              <Text style={Styles.iconText}>
                {infoSong.listeners}
              </Text>
            </View>

            <View style={Styles.icon}>
              <Text style={Styles.listenerLabel}>
                <Fater name="share-2" size={24} color={"black"} />
              </Text>
              <Text style={Styles.iconText}>{25}</Text>
            </View>

            <View style={Styles.icon}>
              <Text style={Styles.listenerLabel}>
                <MaterialCommunityIcons
                  name="ear-hearing"
                  size={24}
                  color={"black"}
                />
              </Text>
              <Text style={Styles.iconText}>
                {infoSong.listeners}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailMusic;
