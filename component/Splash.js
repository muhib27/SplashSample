
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
export default class Splash extends Component {
  state = {
    ready: false,
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({ ready: true })
  //   }, 5000)
  // }
  //   constructor(props){
  //       super(props)
  //       setInterval(() =>{
  //           this.setState({timer: this.state.timer + 1})
  //       }, 1000)
  //   }
    render() {
      // if (this.state.ready === false) {
      //   return <Login />
      // }
      return this.props.children;
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});