import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// By ArrayList
// let ManList= [
//   {
//     id : 1,
//     item : 'shirt',
//    image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
//   },
//   {
//     id : 2,
//     item : 'Panjabi',
//    image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
//   },
//   {
//     id : 3,
//     item : 'Pant',
//    image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
//   }
// ]



export default class App extends React.Component {

  //By state with ArrayList
  state = {
      menList : [
        {
          id : 1, item : 'shirt', price : '1150/-',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 2, item : 'Panjabi',
          image : 'https://www.aamio.com/file/2017/05/Cotton-Exclusive-Men-Printed-Panjabi-with-Contrasted-Collar-and-Placket-LMP112-1.jpg'
        },
        {
          id : 3, item : 'Pant',
          image : 'https://images.express.com/is/image/expressfashion/0035_04769232_1378_f01?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
        },
        {
          id : 3, item : 'Fotua',
          image : 'https://www.upoharbd.com/images/uploads/cotton_karchupi_offWhite2.jpg'
        },
        {
          id : 3, item : 'Shoes',
          image : 'https://image.sportsmansguide.com/adimgs/l/5/582387_ts.jpg'
        },
        {
          id : 3, item : 'Polp Shirt',
          image : 'https://cdn.shopify.com/s/files/1/1368/9289/products/IvaUxv8Tb2M3TXLnEDj1_WoWs_Polo_front.jpg?v=1511458421'
        }
      ]
  }
  

lapsList(){
  return this.state.menList.map((data,i) =>{
    return(
      <View key={i}>
        
        <View style={styles.elements}>

          <View style={styles.images}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: data.image}}
            />
          </View>
          <View style= {styles.texes}>
            <Text style={styles.text_element_id}>ID : {data.id}</Text>
            <Text style={styles.text_element_item}>{data.item}</Text>
            <Text style={styles.text_element_price}>Price : {data.price}</Text>
            <Button
              title ={'Add to Cart'}
              onPress={()=> this.props.navigation.navigate('Cart')}
            />
          </View>

        </View>
       
      
      </View>
    )
  })
}
  
    
  // lapsList() {
  //   return ManList.map((data,i) => {
  //     return (
  //       <View key={i}><Text>{data.item}</Text></View>
  //     )
  //   })
  // }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          {this.lapsList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
  },

  elements: {
    flexWrap : 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
  },

  text_element_id : {
    fontSize: 15,
    textAlign: "center",
    color: "#FFFFFF",
  },

  text_element_item : {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },

  text_element_price : {
    fontSize: 15,
    textAlign: "center",
    color: "#FFFFFF",
  },

  images :{
    height : 110,
    width : 110,
    marginBottom : 5,
  },

  texes :{
    height : 110,
    width : 180,
    marginBottom : 5,
  }

});
