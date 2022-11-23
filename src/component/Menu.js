import React from "react";
import {useNavigation} from "@react-navigation/native"

import { View , Text , StyleSheet , Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Menu = () => {

    const Navigate  = useNavigation()
        return (
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Navigate.navigate("Course")}
            >
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://img.icons8.com/stickers/90/000000/training.png",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Navigate.navigate("About")}
            >
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://img.icons8.com/stickers/100/000000/conference.png",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Navigate.navigate("Contact")}
            >
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://img.icons8.com/stickers/100/000000/about.png",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Navigate.navigate("Userdata")}
            >
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
                }}
              />
            </TouchableOpacity>
          </View>
        );
}

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    textstyle:{
        textTransform:"uppercase",
    },
    iconStyle:{
      width:"100%",
      height:50,
      aspectRatio:1
    }
})

export default Menu