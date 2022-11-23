import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Rohit Kumar</Text>
        <Text style={styles.paraStyle}>
          Mobile Engineer Developer[REACT NATIVE] || FULL STACK DEVELOPER[MERN]
        </Text>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://w0.peakpx.com/wallpaper/302/859/HD-wallpaper-ian-somerhalder-black-face-man-actor.jpg",
            }}
          />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About me</Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            distinctio ut nam sapiente asperiores consectetur perferendis
            veritatis,
          </Text>
        </View>

        <Text style={styles.mainHeader}>Follow me on Social Media</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/_rohit_kumar_2_/")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.Linkedin.com/rohitkumar")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/0Rohit2022")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/25/25657.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainHeader:{
    fontSize:22,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:10,
  },
  paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
    marginHorizontal:20
  },
  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  aboutSubHeader:{
    fontSize:18,
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    alignSelf:"center"
  },
  aboutPara:{
    color:"#fff"
  },
  menuContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,
    marginVertical:30
  }

});
export default About;
