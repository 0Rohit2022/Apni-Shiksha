import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Menu from "../component/Menu";
const Home = ({websiteName}) => {
  const description = `Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time-Thomas A. Edison.`;

  return (
      <ScrollView>
    <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require("../../assets/study.jpeg")}
          />
          <Text style={styles.mainHeader}>Welcome to</Text>
          <Text
            style={[
              styles.mainHeader,
              { fontSize: 33, color: "#4c5dab", marginTop: 0 },
            ]}
          >
            {websiteName}
          </Text>
          <Text style={styles.paraStyle}>{description}</Text>
        </View>

        <View style={styles.Menustyle}>
          <View style={styles.linestyle}></View>
          <Menu />
          <View style={[styles.linestyle, {marginVertical:10}]}></View>
        </View>
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    padding: 20,
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  headerImage: {
    height: undefined,
    width: "90%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 10,
    borderRadius: 20,
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainHeader: {
    marginTop: 10,
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    textAlign: "left",
  },
  linestyle:{
    marginBottom:20,
    borderWidth:0.5,
    borderColor:"grey"
  }
});

export default Home;
