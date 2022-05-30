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
      imgContainerHome: {
      
        // width: 350,
        // height: 450,
        // borderRadius: 30
        // backgroundColor: "white",
        // marginHorizontal: 40, 
        // marginVertical: 10
        // paddingVertical: 30
      }, 

      imgContainerAlbum: {
        width: 300,
        height: 200,
        backgroundColor: "green",
        // marginHorizontal: 40, 
        marginVertical: 10
        // paddingVertical: 30
      },
      imgHome: {
        width: 350,
        height: 450,
        borderRadius: 5,
        margin: 0
      },

      articleCard: {
        borderRadius: 5,
        marginBottom: 10,
        height: 240,
        alignItems: "flex-start",
      },
      articleList: {
        paddingTop: 10,
        width: "100%",
      },

// Home styles
      homeTitle : {
        fontSize: 24,
        paddingBottom: 18,
      },

      homeSubtitle: {
        fontSize: 20,
        paddingBottom: 10,
        textTransform: "capitalize",
        // fontWeight: "400",        
        // position: "absolute",
        // elevation: 3,
        // zIndex: 3,
        // top: 5,
        // left:"28%",
        // textAlign: "center",
        // color: "whitesmoke"
      },
      imageAuthor: {
        fontSize: 12,
        fontWeight: "600",
        position: "absolute",
        bottom: 3,
        right: 5,
        color: "whitesmoke"  
      }, 
      // swedishName: {
      //   textTransform: "capitalize"
      // }, 

      ingress: {
        backgroundColor: "#F1FFE0",
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginVertical: 20, 
        width: 350,
        borderRadius: 5, 
      }, 

      ingressSoloText: {
        // color: "white",
        fontSize: 16,
        fontWeight: "400",
        paddingBottom: 4
      }, 

      name: {
        // color: "white",
        paddingBottom: 10,
        fontSize: 24
      }, 

      homeDescription: {
        fontSize: 18,
        paddingHorizontal: 20,
        lineHeight: 26,
        fontWeight: "400"
      }

})
