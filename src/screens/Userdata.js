import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Userdata = () => {
  const [myData , setmyData] = useState([]);
  const [isLoaded , setisLoaded] = useState(true)
  const getUserdata = async() => {
    try{
   const apiRes = await fetch(
     "https://0rohit2022.github.io/namesapi/names.json"
   );
   const fetchingData  = await apiRes.json()
   setmyData(fetchingData)
   setisLoaded(false)
  //  console.log(myData)
  }catch(error){
    console.log(error)
  }
}


  useEffect(() => {getUserdata()},[])
  // Rendering the students cards || Information
  const showUserdata = ({item}) => {
   return (
     <View style={styles.card}>
       <View style={styles.imgContainer}>
         <Image style={styles.imgStyle} source={{ uri: item.image }} />
       </View>

       <View>
         <View style={styles.bioDataContainer}>
           <Text style={styles.bioData}> Bio-Data </Text>
           <Text style={styles.idNumber}>
             {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
           </Text>
         </View>

         <View style={styles.mainContain}>
           <Text style={styles.myName}> Name: {item.name} </Text>
           <Text style={styles.myName}> email: {item.email} </Text>
           <Text style={styles.myName}> mobile: {item.mobile} </Text>
         </View>
       </View>
     </View>
   );
  }
  return (
    <View>
     <Text style={styles.mainHeader}>List of Students</Text>
     <FlatList
     keyExtractor={(item) => {item.id}}
     data={myData}
     renderItem={showUserdata}
     horizontal
     showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
  },
  mainHeader: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    paddingVertical: 50,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
  },
});
export default Userdata

