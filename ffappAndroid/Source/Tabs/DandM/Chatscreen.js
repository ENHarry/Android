import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Platform, Linking} from
'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import NavBar from '../../Components/Header/NavBar';
import {email} from 'react-native-communications';
class Chatscreen extends Component {
	constructor(props) {
		super(props);
	 this.state = {textValue: null};
	}
	// onIdeaChange(text){
	// this.state.ideaChanged(text)
	// }
	render() {
		console.log(this.state.textValue)
		return (
		<View style={styles.container}>
		<Text style={styles.welcome}>
		 Got an Idea? Submit!
		</Text>
		<View style={styles.textInputContainer}>
		<AutoGrowingTextInput
		value={this.state.textValue}
		onChange={(event) => this._onChange(event)}
		style={styles.textInput}
		placeholder={'Type here...'}
		placeholderTextColor='#66737C'
		maxHeight={200}
		minHeight={45}
		ref={(r) => { this._textInput = r; }}
		/>
		<TouchableOpacity style={styles.button} onPress={() =>
		this._resetTextInput()}>
		<Text>Clear</Text>
		</TouchableOpacity>
		</View>
		<TouchableOpacity onPress={() => email(['afsanulraihan@gmail.com'],null,null,'App Idea Submission', this.state.textValue)}>
		<Text> Submit! </Text>
		</TouchableOpacity>
		</View>
		);
		}
		_onChange(event) {
		this.setState({ textValue: event.nativeEvent.text || '' });
		}
		_resetTextInput() {
		 this._textInput.clear();
		 this._textInput.resetHeightToMin();
	}
}
/*class Chatscreen extends Component {
 render () {
 return (
 <View>
 <NavBar wayto = {this.props.navigation}/>
 <Text> Hello this is the Chat page </Text>
 </View>
 );
 }
}
*/
// export default Chatscreen;
const IsIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
container: {
 flex: 1,
 alignItems: 'center',
 backgroundColor: '#C84D4D'
 },
textInputContainer: {
 flexDirection: 'row',
 paddingLeft: 8,
 paddingRight: 8
 },
welcome: {
 marginTop: 100,
 fontSize: 50,
 textAlign: 'center',
 margin: 10,
 fontWeight: 'bold'
 },
textInput: {
 paddingLeft: 10,
 fontSize: 17,
 flex: 1,
 backgroundColor: 'white',
 borderWidth: 0,
 borderRadius: IsIOS ? 4 : 0,
 },
button: {
 paddingLeft: 5,
 alignItems: 'center',
 justifyContent: 'center',
 }
});
export default Chatscreen;