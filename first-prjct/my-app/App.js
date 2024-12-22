import { View, Text, Image,Button, Modal, ActivityIndicator, Alert } from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";
import { StatusBar } from "expo-status-bar";
const logo = require("./assets/adaptive-icon.png")

export default function app () {

  const [isModalVisible, setModalVisible] = useState(false);
  return <View style={{flex: 1, backgroundColor : "plum", padding: 60}}>
    
    {/* <Text>
      <Text style={{color: "white"}}>Hello</Text> World
    </Text> */}
    {/*---------for displaying an image---------*/}
    {/* <Image source={logo} style={{width: 300, height: 300}}/> */}
    {/* <Pressable onPress={() => console.log("TEXT PRESSED")}>
    <Text>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto nesciunt aperiam quaerat autem inventore tenetur asperiores consectetur adipisci maiores natus explicabo blanditiis animi obcaecati aut, perspiciatis sint soluta nam!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto nesciunt aperiam quaerat autem inventore tenetur asperiores consectetur adipisci maiores natus explicabo blanditiis animi obcaecati aut, perspiciatis sint soluta nam!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto nesciunt aperiam quaerat autem inventore tenetur asperiores consectetur adipisci maiores natus explicabo blanditiis animi obcaecati aut, perspiciatis sint soluta nam!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto nesciunt aperiam quaerat autem inventore tenetur asperiores consectetur adipisci maiores natus explicabo blanditiis animi obcaecati aut, perspiciatis sint soluta nam!
    </Text>
    </Pressable>
    <Pressable onPress={() => console.log("image PRESSED")}>
    <Image source={logo} style={{width: 300, height: 300}}/>
    </Pressable> */}
    {/* <Image source={{ uri: "https://picsum.photos/300"}} 
    style={{width: 300, height: 300}}
    /> */}
    {/*---------for displaying a background image---------*/}
    {/* <ImageBackground source={logo} style={{flex : 1}}>
      <Text>IMAGE TEXT</Text>
    </ImageBackground> */}   
    {/* <Button 
      title="press" 
      onPress={() => setModalVisible(true)}
      color="midnightblue"
    />
    <Modal 
      visible={isModalVisible}
      onRequestClose={() => setModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
        <Text>Modal Content</Text>
        <Button 
          title="Close" 
          color="midnightblue" 
          onPress={() => setModalVisible(false)}
        />
      </View>
    </Modal> */}
    {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content"/> */}
    {/* <ActivityIndicator size="medium" color="red"/> */}
    {/* <Button 
      title="Alert 2" 
      onPress={() => Alert.alert("invalid data", "DB INCORRECT", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
          ])
        }
    /> */}
    <Greet name="yahya" />
  </View>
}