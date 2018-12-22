import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button, Avatar } from 'react-native-elements';
import { AsyncStorage } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ImagePicker, Camera, Permissions } from 'expo';





export default class SignUp extends React.Component {

  static navigationOptions = {
    headerStyle :{
        height : 0,
        
    }
  }

    state = { 
      image: null, FirstName: '', Lastname: '', StreetAddress: '', CellNumber: '', UserName:'', Email:'', Password:'',
    }

    upDateFirstName = (text)=> this.setState({FirstName : text})
    upDateLastName = (text)=> this.setState({Lastname : text})
    upDateStreetAddress = (text)=> this.setState({StreetAddress : text})
    upDateCellNumber = (text)=> this.setState({CellNumber : text})
    upDateUserName = (text)=> this.setState({UserName : text})
    upDateEmail = (text)=> this.setState({Email : text})
    upDatePassword = (text)=> this.setState({Password : text})


    //Storing Data in Async Storage
    storeData = async()=> {
      AsyncStorage.setItem('user', JSON.stringify(this.state));  //For Object type data save
      // alert('Test')
      
    }


    //For Testing Get Data
    // getData = async () => {
    //     try{
    //         let user = await AsyncStorage.getItem('user'); //Getting Save Data
    //         let parsed = JSON.parse(user);
    //         //alert(user);
    //         alert('Name is '+parsed.Email + ', Cell is '+parsed.Password);
    //     }
    //     catch(error){
    //         alert(error);
    //     }
    // }



    //<=========Picking Image start============>

    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };

    //Picking Image End



    signup(){

      if (this.state.Email == "" || this.state.Password == ""){
        ToastAndroid.show('Email or Password is Empty!', ToastAndroid.SHORT);
      }else{
        this.storeData();
        this.props.navigation.navigate('Login');
        ToastAndroid.show('Congratulation', ToastAndroid.SHORT);
      }
    }


    
  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

          <View style={{flex: 1}}>
                    <Avatar
                        large
                        rounded
                        icon={{name:'user', type: 'entypo'}}  //Config is in App.js file
                        source={{uri : this.state.image}} // Get Image
                        containerStyle={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}
                        onPress={this._pickImage}
                    />
          </View>

          <View style={{flex:3}}>

              <ScrollView showsVerticalScrollIndicator={false}>
                  {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}

                    

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'First Name'} onChangeText={this.upDateFirstName}/>

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Last Name'} onChangeText={this.upDateLastName}/>

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Street Address'} onChangeText={this.upDateStreetAddress}/> 

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Cell Phone'} keyboardType={"phone-pad"} onChangeText={this.upDateCellNumber}/> 

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Email'} onChangeText={this.upDateEmail}/>

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'User Name'} onChangeText={this.upDateUserName}/>

                    <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} secureTextEntry={true} placeholder={'Password'} onChangeText={this.upDatePassword}/>

                    <TouchableOpacity style={styles.button} onPress={()=> this.signup()}>
                        <Text style={styles.buttonText}>Signup</Text>
                    </TouchableOpacity>
                  
                  
                    <Text style={styles.text}>
                      If You Alredy SignUp Please  <Text style={{color : 'blue'}} onPress = {()=> this.props.navigation.navigate('Login')}>Login Here
                      </Text>
                    </Text>

              </ScrollView>

          </View>

      </KeyboardAvoidingView>
      
    );
  }
  
}



const styles = StyleSheet.create({
  container: {
    flexGrow : 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    // marginTop: 50,
    // paddingLeft: 15,
    // paddingRight : 15,
    backgroundColor: '#424242',
  },

  text:{
    marginBottom: 10,
    marginTop: 10,
    padding : 20,
  },

  textInput:{
    width:290,
    marginBottom: 10,
    height: 40,
    backgroundColor : '#9e9e9e',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fbfbfb',
    fontWeight: 'bold'
  },

  button:{
    width: 290,
    height: 40,
    backgroundColor: '#0c1130',
    marginVertical: 15,
    paddingVertical: 8,
    borderRadius: 25,
  },

  buttonText:{
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center'
  },


});


