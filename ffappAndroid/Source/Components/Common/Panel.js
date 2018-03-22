import React, {Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated, LayoutAnimation} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Panel extends Component{
    constructor(props){
        super(props);

        this.icons = {     //Step 2
            'up'    : require('../../../Images/Arrowhead-01-128.png'),
            'down'  : require('../../../Images/Arrowhead-Down-01-128.png')
        };

        this.state = {       //Step 3
            title       : props.title,
            expanded    : false,
            //animation   : new Animated.Value()
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

	    /*this.state.animation.setValue(initialValue);  //Step 3
	    Animated.spring(     //Step 4
	        this.state.animation,
	        {
	            toValue: finalValue
	        }
	    ).start();*/
        
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
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return ( 
        <TouchableHighlight 
                         
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
            <View style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        />
                </View>
                {this.renderView()}

            </View>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: 'white',
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontSize: 25,
        fontFamily: "GillSans"
    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0,
        
    }
});

export default Panel;