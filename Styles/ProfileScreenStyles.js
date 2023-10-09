import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const ProfileScreenStyles = StyleSheet.create({
  Container:{
    flex:1,
    padding:10
  },
  Header:{
     marginTop: "10%",
     flexDirection:"row",
     alignItems:'center'
  },
  nameUser:{
    color: "#FFF",
    fontSize: 28,
    marginLeft: windowWidth < 370 ? 50 : 120,
  },
  nameProfile: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  imageProfile: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  topArtistsLabel: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
});

const ProfileScreenStylesLandscape = StyleSheet.create({
  Container:{
    flex:1,
    padding:10,
    flexDirection:'row'
  },
  Header:{
    marginTop: "3%",
    flexDirection:"row",
    alignItems:'center',
 },
 nameUser:{
  textAlign: "center",
  fontWeight: "bold",
  color: "#FFF",
  fontSize: 28,
  marginLeft:'3%'
},
nameProfile: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "#FFF",
},
ContainerFlatlist:{
  paddingLeft:'5%',
},
imageProfile: {
  width: 300,
  height: 300,
},
topArtistsLabel: {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
  color: "#FFF",
},
});
export  {ProfileScreenStyles,ProfileScreenStylesLandscape};
