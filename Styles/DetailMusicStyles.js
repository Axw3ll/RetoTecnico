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
    
  },
  progresContainer: {
    
    flexDirection: "row",
  },
  progressLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelTxt: {
    color: "#000",
  },
  musicControlls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: '1%',
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
    marginTop: '10%',
    marginBottom: '1%',
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
  nameSong:
  {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

const DetailMusicStylesLandscape = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
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
    flexDirection:'row',
    position: "absolute",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop:'5%',
    width:'90%',
  },
  progresContainer: {
    flexDirection: "col",
  },
  progressLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  progressLabelTxt: {
    color: "#000",
  },
  musicControlls: {
    flexDirection: "row",
    justifyContent: "space-around", 
    marginTop: '1%',
  },
  listenerLabel: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: '1%',
  },
  icon: {
    flexDirection: "row",
    alignItems: "center", 
    paddingHorizontal:15,
  },
  iconText: {
    color: "gray",
    fontSize: 14,
    marginTop: 12,
    justifyContent: "space-between",
  },
  infoImage: {
    width: 200,
    height: 200,
    marginRight: 25,  
    alignSelf: "center",
    borderRadius: 50,
    marginBottom:40,
  },
  artistLabel: {
    textAlign: "center",
    color: "gray",
    fontSize: 20,
    paddingHorizontal:35,
  },
  reproductorContainer:{
    marginTop:'7%',
    paddingHorizontal: "2%"
  },
  nameSong:
  {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal:5,
  }
})
export {DetailMusicStyles,DetailMusicStylesLandscape};
