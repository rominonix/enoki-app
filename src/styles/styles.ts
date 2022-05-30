import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAFAB2",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingBottom: 100,
  },
  input: {
    backgroundColor: "#F1FFE0",
    width: 350,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  },

  inputLogin: {
    backgroundColor: "#F1FFE0",
    width: 300,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  },
  button: {
    width: 200,
    borderRadius: 3,
    marginTop: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#B3E96F",
  },

  // Samling style

  imgContainerAlbum: {
    width: 350,
    height: 300,
    // borderTopStartRadius: 10,
    // borderTopRightRadius: 10,
    backgroundColor: "#F1FFE0",
    resizeMode: "cover",
  },

  samlingContainer: {
    borderRadius: 10,
    backgroundColor: "#F1FFE0",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  singleImage: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
  },

  imageTitle: {
    fontSize: 18,
    textTransform: "capitalize",
  },

  // Home styles
  generalTitle: {
    fontSize: 24,
    paddingBottom: 18,
  },

  homeSubtitle: {
    fontSize: 20,
    paddingBottom: 10,
    textTransform: "capitalize",
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
    backgroundColor: "#F1FFE0",
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
  },

  name: {
    paddingBottom: 10,
    fontSize: 24,
  },

  homeDescription: {
    fontSize: 18,
    paddingHorizontal: 20,
    lineHeight: 26,
    fontWeight: "400",
  },

  //ny foto style

  buttonContainer: {
    width: 350,
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonNewFoto: {
    width: "auto",
    borderRadius: 3,
    margin: 20,
    paddingHorizontal: 38,
    paddingVertical: 15,
    backgroundColor: "#B3E96F",
  },

  textArea: {
    backgroundColor: "#F1FFE0",
    width: 350,
    minHeight: 200,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  }
});
