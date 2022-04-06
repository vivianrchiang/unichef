import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function CreateRecipePostScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}> Create Recipe Post </Text>
      </View>    

    {"\n"}
    {"\n"}

    <View style={styles.RectangleShapeView}>
    {"\n"}
    {"\n"}
    <TextInput style={styles.input} placeholder="Title" autoCapitalize="none" ></TextInput>

    <TextInput style={styles.ingredients} placeholder="Ingredients - make sure to list the quantity!" autoCapitalize="none" ></TextInput>

    <TextInput style={styles.directions} placeholder="Directions, please be as detailed as possible!" autoCapitalize="none" ></TextInput>

    <TouchableOpacity style={styles.buttonContainer2}>

                <Text style={styles.appButtonText}>Done</Text>
              </TouchableOpacity> 
    </View>
      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFBF',
  },
  title: {
    marginTop: 70,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center'
  },

  secondTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4B0082'
  },

  foodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "000000"
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  wrapper: {
    padding: 10,
    backgroundColor: '#FFFFFF'
},

header:{
  backgroundColor: "#df7077",
  height: 180,
},

RectangleShapeView: {
 
    marginTop: 20,
    width: 700,
    height: 450,
    alignSelf: 'center',
    backgroundColor: '#E6E6FA',
    borderColor: "#808080"
 
  },

  RectangleShapeView2: {
 
    marginTop: 20,
    width: 550,
    height: 450,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF'
 
  },

  text: {
      fontSize: 20,
      color:"#8A2BE2",
  },

  body: {
    fontSize: 15, 
    color: "000000",
    alignSelf: "center"
  },

  prices: {
    fontSize: 15,
    color: "000000",
    fontStyle: "italic"
  },

  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },

  buttonContainer2: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },

  appButtonText: {
    fontSize: 14,
    color: "#ffffff",
  },

  general: {
    fontSize: 20,
    fontWeight: "300",
    alignSelf: 'center',
    color: "#000000"
  },

  name:{
    fontSize:28,
    color: "#00008b",
    fontWeight: "600",
    alignSelf: 'center'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    marginTop: 20,
    fontSize: 30, 
    minHeight: 40,
    alignSelf: 'center'
},

ingredients: {
    width: '80%',
    borderBottomWidth: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    paddingTop: 0,
    fontSize: 15, 
    height: 80,
    alignSelf: 'center'
},

directions: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    paddingTop: 0,
    fontSize: 12, 
    height: 150,
    alignSelf: 'center'
}

});