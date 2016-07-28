/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  View,
  Dimensions,
  Alert
} from 'react-native';

class LoginView extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : "",
      password: "",
      hobby: "",
    }

  }
    
  _validation(_username, _password){
    if(_username.toLowerCase() == "admin" && _password.toLowerCase() == "password"){
      return true;
    }
    return false;
  }

  _onPressButton(){
    if(this._validation(this.state.username, this.state.password)){

        //push to next page
        this.props.navigator.push({id: 1, username: this.state.username, hobby: this.state.hobby});
        
        Alert.alert(
          'Login',
          'Success',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );
    }else{
        Alert.alert(
          'Login',
          'Fail',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );
    }
    
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../img/seekasia.png')} />
        <TextInput 
          style={styles.textinput}
          placeholder="User Name : (hints: admin)"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          autoCapitalize="none"
        />
        
        <TextInput 
          style={styles.textinput}
          placeholder="Password :  (hints: password)"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <TextInput 
          style={styles.textinput}
          placeholder="Hobby : (e.g. basketball)"
          onChangeText={(hobby) => this.setState({hobby})}
          value={this.state.hobby}
          autoCapitalize="none"
        />
        
        <TouchableHighlight onPress={() => {this._onPressButton()}}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
LoginView.propTypes = { navigator: React.PropTypes.any.isRequired };
LoginView.defaultProps = { navigator: undefined };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  },
  logo:{
    width: 300,
    resizeMode: 'contain',
    
  },
  textinput:{
    width: Dimensions.get('window').width - 20,
    margin: 10,
    height: 26,
    borderWidth: 1,
    borderColor: '#0f0f0f',
    fontSize: 13,
    padding: 4,
    
  },
  buttonText:{

    width: Dimensions.get('window').width - 20,
    height: 40,
    color: '#FA58F4',
    backgroundColor: '#08088A',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    paddingTop: 10,
  }
});

export default LoginView;
