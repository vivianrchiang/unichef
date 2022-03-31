import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//import Carousel from 'flat-carousel';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootTabScreenProps } from '../types';


export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Marketplace</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('VeggieFriedRice')}
                >

                <Text style={styles.appButtonText}>Sell Something!</Text>
              </TouchableOpacity>  

              {"\n"}
              {"\n"}
      <View style={styles.wrapper}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                      <img src="https://i.pinimg.com/originals/6f/3b/71/6f3b71075667949114b817ec0d77f24d.jpg" alt="cupcakes" 
      width="400" height="250" style={{justifyContent: 'flex-start',     flexDirection: 'row',
      alignSelf: 'center',}} ></img>
            <Text style={styles.title1}>Chocolate Muffins with cream cheese frosting. 30 min ago. </Text>
            <Text style={styles.title1}>Cost: 2$/muffin</Text>
            <Text style={styles.title1}>Location: Philadelphia, PA.</Text>
            <TouchableOpacity style={styles.buttonContainer1}
                onPress={() => navigation.navigate('VeggieFriedRice')}
                >

                <Text style={styles.appButtonText}>Contact Seller</Text>
              </TouchableOpacity>  


      {"\n"} {"\n"}
                    </View>
                    <View style={{flex:1}}>
                      <img src="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Vegetable-Pasta-Bake-Square-FS-19.jpg" alt="Pasta" 
         width="350" height="250" style={{justifyContent: 'flex-start',     flexDirection: 'row',
         alignSelf: 'center',}}></img>
                     <Text style={styles.title1}>Rigatoni with Vodka Pasta Sauce. 43 min ago. </Text>
            <Text style={styles.title1}>Cost: 5$/serving/</Text>
            <Text style={styles.title1}>Location: Philadelphia, PA.</Text>
            <TouchableOpacity style={styles.buttonContainer1}
                onPress={() => navigation.navigate('VeggieFriedRice')}
                >

                <Text style={styles.appButtonText}>Contact Seller</Text>
              </TouchableOpacity> {"\n"} {"\n"}
                    </View>
                    <View style={{flex:1}}>
                      <img src="https://www.bakingkneads.com/wp-content/uploads/2019/03/123-Macarons.jpg" alt="Macarons" 
    width="400" height="250" style={{justifyContent: 'flex-start',     flexDirection: 'row',
    alignSelf: 'center',}}></img>
                <Text style={styles.title1}>Flavored Macarons. 1 hr ago. </Text>
            <Text style={styles.title1}>Cost: 3$/macaron</Text>
            <Text style={styles.title1}>Location: Philadelphia, PA.</Text>
            <TouchableOpacity style={styles.buttonContainer1}
                onPress={() => navigation.navigate('VeggieFriedRice')}
                >

                <Text style={styles.appButtonText}>Contact Seller</Text>
              </TouchableOpacity> {"\n"} {"\n"}
                    </View>
                </View>
         

      </View>
      </View>
      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  title: {
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title1: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },
  buttonContainer1: {
    marginTop: 10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#0FA973",
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
appButtonText: {
  fontSize: 14,
  color: "#ffffff",
  alignSelf: 'center'
},

header:{
  backgroundColor: "#00008b",
  height: 180,
}
});

const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Taco_Truck_St_Louis_MO.jpg' }
];

// const MyCarousel = () => (
//   <Carousel>
//       {images.map((image, index) => (
//           <div
//               key={index}
//               className="demo-item"
//               style={{ backgroundImage: 'url(' + image.src + ')' }}
//           />
          
//       ))}
//   </Carousel>
// );