import { StyleSheet, Dimensions} from "react-native";
const WindowWid = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const HomeScreenStyles = StyleSheet.create({
  Header: {
    marginTop: WindowHeight < 700 ? 25 : 40,
    flexDirection: "row",
    alignItems: "center",
  },
  textHeader: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: WindowWid <370 ? 25:45 ,
    fontWeight: "700",
  },
  flatList: {
    marginTop: "5%",
    marginBottom: "10%",
  },
});

export default HomeScreenStyles;
