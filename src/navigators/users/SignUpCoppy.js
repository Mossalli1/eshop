import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView} from 'react-native';
import { AppRegistry } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'




class SignUp extends React.Component {

  static navigationOptions = {
    headerStyle :{
        height : 0,
    }
  }

  state = { 
    UserName:'', Email:'', Password:'',
  }

  upDateUserName = (text)=> this.setState({UserName : text})
  upDateEmail = (text)=> this.setState({Email : text})
  upDatePassword = (text)=> this.setState({Password : text})

  render() {
    return (
       
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./images/lk.png')} style={{width: 150, height: 150}} /> 
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false}>

            <KeyboardAvoidingView behavior="position" enabled>

                <View>

                  <FormLabel>First Name</FormLabel>
                  <FormInput placeholder={'Enter User Name'} onChangeText={this.upDateUserName}/>

                  <FormLabel>Last Name</FormLabel>
                  <FormInput placeholder={'Enter User Name'} onChangeText={this.upDateUserName}/>

                  <FormLabel>Street Address</FormLabel>
                  <FormInput placeholder={'Enter Address'} />

                  <FormLabel>Cell Phone</FormLabel>
                  <FormInput keyboardType={'number-pad'} placeholder={'Enter Cell Phone Number'} onChangeText={this.upDateUserName}/>
                  
                  <FormLabel>Email</FormLabel>
                  <FormInput placeholder={'Enter Email'} onChangeText={this.upDateEmail}/>
                  <FormValidationMessage>{'email is required'}</FormValidationMessage>

                  <FormLabel>Password</FormLabel>
                  <FormInput secureTextEntry={true} placeholder={'Enter Password'} onChangeText={this.upDatePassword}/>
                  
                  <Button onPress={()=> this.props.navigation.navigate('SignUp')}
                      title='Sign Up'
                  />

                </View>

            </KeyboardAvoidingView>
            
          </ScrollView>
          
        </View>

        
      
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    // justifyContent: 'center',
    // marginTop: 50,
    // paddingLeft: 15,
    // paddingRight : 15,
    // backgroundColor: '#fffde7',
  },
});
