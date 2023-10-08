import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fater from "react-native-vector-icons/Feather";
import Evil from "react-native-vector-icons/EvilIcons";
import DetailMusicStyles from "../Styles/DetailMusicStyles";
const DetailMusic = ({ infoSong }) => {
  return (
    <View style={{ flex: 1, marginTop: "10%" }}>
      <View style={DetailMusicStyles.backgroundContainer}>
        <View style={DetailMusicStyles.backgroundContainerShadow}></View>
      </View>
      <View style={DetailMusicStyles.infoContainer}>
        <Image
          style={DetailMusicStyles.infoImage}
          source={{ uri: infoSong.image }}
        />

        <View style={{ marginTop: "10%" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#000",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            {infoSong.track}
          </Text>
          <Text style={DetailMusicStyles.artistLabel}>{infoSong.artist}</Text>
        </View>
        <View>
          <View style={DetailMusicStyles.progressLabelContainer}>
            <Text style={DetailMusicStyles.progressLabelTxt}>0:00</Text>
            <Text style={DetailMusicStyles.progressLabelTxt}>3:30</Text>
          </View>

          <Slider
            style={DetailMusicStyles.progresContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#000"
            thumbTintColor="#000"
            onSlidingComplete={() => {}}
          />

          <View style={DetailMusicStyles.musicControlls}>
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

          <View style={DetailMusicStyles.iconsContainer}>
            <View style={DetailMusicStyles.icon}>
              <Text style={DetailMusicStyles.listenerLabel}>
                <Evil name="like" size={25} color={"black"} />
              </Text>
              <Text style={DetailMusicStyles.iconText}>
                {infoSong.listeners}
              </Text>
            </View>

            <View style={DetailMusicStyles.icon}>
              <Text style={DetailMusicStyles.listenerLabel}>
                <Fater name="share-2" size={24} color={"black"} />
              </Text>
              <Text style={DetailMusicStyles.iconText}>{25}</Text>
            </View>

            <View style={DetailMusicStyles.icon}>
              <Text style={DetailMusicStyles.listenerLabel}>
                <MaterialCommunityIcons
                  name="ear-hearing"
                  size={24}
                  color={"black"}
                />
              </Text>
              <Text style={DetailMusicStyles.iconText}>
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
