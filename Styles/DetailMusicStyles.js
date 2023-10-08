import { StyleSheet } from "react-native";

const DetailMusicStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  backgroundContainerShadow: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flex: 0.3,
    borderTopLeftRadius: 50,
  },
  infoContainer: {
    position: "absolute",
    alignSelf: "center",
    marginTop: "15%",
  },
  progresContainer: {
    height: 70,
    flexDirection: "row",
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelTxt: {
    color: "#000",
  },
  musicControlls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  listenerLabel: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 5,
  },
  icon: {
    flexDirection: "row",
  },
  iconText: {
    color: "gray",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  infoImage: {
    width: 350,
    height: 350,
    alignSelf: "center",
    marginTop: "10%",
    borderRadius: 50,
  },
  artistLabel: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
  },
});

export default DetailMusicStyles;
