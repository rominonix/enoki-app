import { StyleSheet } from "react-native";
// import {
//   useFonts,
//   WorkSans_600SemiBold_Italic,
// } from '@expo-google-fonts/dev';
// @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400;600;800&display=swap');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FFE0",
    // backgroundColor: "#DAFAB2",

    // backgroundColor: "#DAFAB2",

    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingBottom: 100,
  },
  input: {
    backgroundColor: "#DAFAB2",
    // backgroundColor: "#F1FFE0",

    width: 350,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  },

  inputLogin: {
    backgroundColor: "#DAFAB2",
    // backgroundColor: "#F1FFE0",

    width: 300,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  },
  button: {
    color: "#c4c4c4",
    fontWeight: "600",
    width: 200,
    borderRadius: 3,
    marginTop: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#B3E96F",
  },

  // Samling style

  imgContainerAlbum: {
    // marginTop: 20,
    width: 160,
    height: 160,
    // borderTopStartRadius: 10,
    // borderTopRightRadius: 10,
    backgroundColor: "#F1FFE0",
    resizeMode: "cover",
  },

  samlingContainer: {
    // paddingTop: 20,
    
    borderRadius: 10,
    backgroundColor: "#E2F2CD",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    
  },

  singleImage: {
    paddingVertical: 8,
    // paddingHorizontal: 30,
    alignItems: "center",
  },

  imageTitle: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#828C61"
  },

  // Home styles
  generalTitle: {
    position: "absolute",
    
    fontSize: 18,
    // paddingBottom: 18,
   
    color: "#828C61",
    fontWeight: "400",
    textTransform: "uppercase",
    top: 40
    // fontFamily: WorkSans_600SemiBold_Italic
  },

  homeSubtitle: {
    fontSize: 14,
    marginTop: 20,
    paddingBottom: 10,
    color: "#828C61",
    fontWeight: "400",
    textTransform: "uppercase"
  },

  imageAuthor: {
    fontSize: 12,
    fontWeight: "600",
    position: "absolute",
    bottom: 3,
    right: 5,
    color: "whitesmoke",
  },

  imgHome: {
    width: 350,
    height: 450,
    borderRadius: 5,
    margin: 0,
  },

  ingress: {
    backgroundColor: "#E2F2CD",
    // backgroundColor: "#DAFAB2",

    paddingHorizontal: 10,
    paddingVertical: 16,
    marginVertical: 20,
    width: 350,
    borderRadius: 5,
  },

  ingressSoloText: {
    fontSize: 16,
    fontWeight: "400",
    paddingBottom: 4,
    color: "#828C61"
  },

  name: {
    fontSize: 14,
    paddingBottom: 10,
    color: "#828C61",
    fontWeight: "400",
    textTransform: "uppercase",
    // paddingBottom: 10,
    // fontSize: 24,
  },

  homeDescription: {
    fontSize: 18,
    paddingHorizontal: 20,
    lineHeight: 26,
    fontWeight: "400",
    color: "#494545",
  },

  //ny foto style

  buttonContainer: {
    marginTop: 30,
    width: 250,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red"
  },

  buttonNewFoto: {
    width: "auto",
    borderRadius: 3,
    margin: 10,
    paddingHorizontal: 38,
    paddingVertical: 15,
    backgroundColor: "#828C61",
  },

  textArea: {
    backgroundColor: "#DAFAB2",
    width: 350,
    minHeight: 200,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  },

  // loggin style

  label: {
    color: "#828C61",
    fontSize: 12,
  },

  lineContainer: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },

  line: {
    borderColor: "#c4c4c4",
    borderWidth: 0.5,
    width: "30%",
    marginHorizontal: 20,
  },

  textButton: {
    color: "#343434",
    fontWeight: "700",
    fontSize: 10,
    textTransform: "uppercase",
  },


  textButtonLogin: {
    color: "#828C61",
    fontWeight: "700",
    fontSize: 10,
    textTransform: "uppercase",
  },

  buttonLogin: {
    width: "auto",
    borderRadius: 3,
    margin: 10,
    paddingHorizontal: 38,
    paddingVertical: 15,
    // shadowOpacity: 5,
    backgroundColor: "#E2F2CD",
    borderColor: "#828C61",
    borderWidth: 0.5
  },

  buttonGame: {
    width: 200,
    borderRadius: 3,
    margin: 10,
    paddingHorizontal: 38,
    paddingVertical: 15,
    // shadowOpacity: 5,
    backgroundColor: "#E2F2CD",
    borderColor: "#828C61",
    borderWidth: 0.5
  },

  titleInLogin : {
    fontSize: 16, fontWeight: "500", color: "#828C61", textTransform:"uppercase" 
  },

  optionInProfile: {
    color: "#828C61", fontWeight: "400", fontSize: 14, textTransform: "uppercase", margin:10
  }
});
