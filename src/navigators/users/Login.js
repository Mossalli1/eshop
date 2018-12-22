import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, AsyncStorage, ToastAndroid, TouchableOpacity} from 'react-native';
import { AppRegistry } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';




class Login extends React.Component {

  static navigationOptions = {
    headerStyle :{
        height : 0,
    }
  }

  state = { 
    Email:'', Password:'', parsed:''
  }


  upDateEmail = (text)=> this.setState({Email : text})
  upDatePassword = (text)=> this.setState({Password : text})

  

  //Getting Data from Async Storage
  getData = async () => {
    try{
        let user = await AsyncStorage.getItem('user'); //Getting Save Data
        // parsed = JSON.parse(user);
        this.setState({
          parsed: JSON.parse(user)
        })
        // alert(JSON.parse(user));
        //alert(this.state.parsed.Email);
    }
    catch(error){
        alert(error);
    }
  }



  login(){

    console.log('Login here',this.state.parsed.Email, this.state.parsed.Password)

    
    
    if (this.state.Email == this.state.parsed.Email && this.state.Password == this.state.parsed.Password){
      this.props.navigation.navigate('Test')
    }else{
      ToastAndroid.show('User Name or Password Does Not Match!', ToastAndroid.SHORT);
    }
  }


  render() {
    // console.log('Login here',this.state)
    return (
      <View style={styles.container}>

          <View style={{flex : 1,paddingTop: 15,alignItems: 'center',justifyContent: 'center',}}>
            <Image source={require('./images/lk.png')} style={{width: 150, height: 150}} /> 
          </View>
        
          <View style={{flex : 3,alignItems: 'center',justifyContent: 'center',}}>
            <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Email'} onChangeText={this.upDateEmail}/>

            <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Password'} secureTextEntry={true} onChangeText={this.upDatePassword}/>

            <TouchableOpacity style={styles.button} onPressIn={this.getData} onPress={() => this.login()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* <Button onPressIn={() => this.getData()} onPress={() => this.login()}
                title='Login'
            /> */}

            <Text style={styles.text}>
                If You Are a New User  <Text style={{color : 'blue'}} onPress = {()=> this.props.navigation.navigate('SignUp')}>Signup Here
                </Text>
            </Text>
          </View>

      </View>
    );
  }

 
}

export default Login;

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
