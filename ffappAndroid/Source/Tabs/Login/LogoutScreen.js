import React,{Component} from 'react';
import {Text, View, Linking} from 'react-native';
import {Button,ClickEmail} from '../../Components/Common';
class LogoutScreen extends Component {
    constructor(logoutFunc) {
        super()
        this.logoutFunc = logoutFunc;
    }
    render() {
        return(
                <View alignItems = "center">
                    <View>
                        <Button onPress={this.props.logoutFunc}> Log out </Button>
                    </View>
                    <View height = {70}/>
                        <ClickEmail onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
                            <Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>
                        </ClickEmail>
                </View>
            );
    }
}
const styles = {
    feedbackText: {
        fontSize: 20,
        textAlign: 'center'
    }
}
export default LogoutScreen;