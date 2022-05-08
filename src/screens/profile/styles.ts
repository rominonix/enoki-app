import { StyleSheet } from "react-native";
// import { color } from "../../../styles/baseStyles";

export default StyleSheet.create({
  titleText: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 10,
    paddingTop: 10,
  },
  horizontalScroll: {
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  celebrityContainer: {
    alignItems: "center",
  },
  celebrityImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15,
  },
  celebrityImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  celebrityText: {
    fontSize: 12,
    fontWeight: "700",
  },
  menu: {
    marginTop: 10,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingBottom: 120,
  },
  menuRow: {
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  iconWrapper: {
    alignItems: "center",
    marginRight: 15,
    width: 30,
  },
  menuIcon: {
    height: 20,
  },
  notificationsIcon: {
    width: 15,
  },
  passwordIcon: {
    width: 15,
  },
  paymentIcon: {
    width: 30,
  },
  helpIcon: {
    width: 20,
  },
  aboutIcon: {
    width: 20,
  },
  logoutIcon: {
    width: 21,
  },
  menuText: {
    fontWeight: "700",
  },
  modal: {
    // backgroundColor: color.lightGrey,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  modalTitle: {
    fontWeight: "700",
    marginBottom: 30,
  },
  modalButtonContainer: {
    flexDirection: "row",
  },
  addMemberButton: {
    alignItems: "center",
    flexDirection: "row",
  },
  userIcon: {
    width: 23,
    height: 23,
    marginRight: 0,
  },
  memberButtonText: {
    fontWeight: "700",
  },
  memberInput: {
    width: "100%",
  },
  checkbox: {
    marginRight: 5,
  },
  confirmFamilyMember: {
    flexDirection: "row",
  },
});