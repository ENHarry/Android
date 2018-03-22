import React, {Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight, TouchableOpacity, Animated, LayoutAnimation, Linking} from 'react-native';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

var arrofImages = [
    require('../../../Images/brevite.jpg'),
    require('../../../Images/KindMind.jpg'),
    require('../../../Images/pathoslogo.png'),
    require('../../../Images/radiate.jpg'),
    require('../../../Images/redplanet.jpg'),
    require('../../../Images/ventir.png')
];

var arrofWeb = [
  "https://brevite.co",
  "http://kindmind.io",
  "https://google.com",
  "http://www.radiatemarket.com",
  "https://google.com",
  "http://www.ventircreates.com"
];


class FFBusPanel extends Component{
    constructor(props){
        super(props);
        this.state = {       //Step 3
            FFBusid         : props.FFBusid,
            FFBusname       : props.FFBusname,
            expanded    : false,
        };

    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    toggle(){
        let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

    }

    renderView() {
        if(this.state.expanded) {
            return (
            <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}> 
                {this.props.children}
            </View>
            );
        }
    }


    render(){
        return ( 
        <TouchableHighlight 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
            <View style={[styles.container,{height: this.state.animation}]}>
                <View flexDirection ="row">
                <View padding = {8}>
                <Image source={arrofImages[this.state.FFBusid]} style={styles.photo}/>
                </View>
                <View style = {styles.nameCont} flex = {2} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.nameStyle}>{this.state.FFBusname}</Text>
                </View>
                <View style={styles.iconCont}>
                <TouchableOpacity onPress = {() => Linking.openURL(arrofWeb[this.state.FFBusid])}>
                <SimpleIcon name = "arrow-right" size = {26}/>
                </TouchableOpacity>
                </View>
                </View>
                <View flexDirection = "column">
                {this.renderView()}
                </View>

            </View>
        </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: 'white',
        //margin:10,
        overflow:'hidden',
    },
    nameCont: {
        alignItems: 'center',
        paddingTop: 5,
        paddingRight: 18,
        
    },
    nameStyle: {
        paddingTop: 20,
        marginRight: 8,
        marginLeft: 8,
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'GillSans',
    },
    title       : {
        paddingTop: 6,
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'GillSans'
    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        flexDirection: 'column',
        padding: 10,
        paddingTop: 30,
        paddingBottom     : 10,
        paddingTop  : 0
    },
    photo: {
        height: 80,
        width: 90,
        borderRadius: 20,
    },
    iconCont: {
        marginRight: 17.5,
        justifyContent: 'center'
    } 
});

export default FFBusPanel;