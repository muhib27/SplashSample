
// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View
//   } from 'react-native';
//   import {
//     createStackNavigator,
//   } from 'react-navigation';
  
//   const App = createStackNavigator({
//     splash: { screen: Splash },
//     login: { screen: Login },
//   });
// // export default class Splash extends Component {
// //   state = {
// //     ready: false,
// //   }

// //   // componentDidMount () {
// //   //   setTimeout(() => {
// //   //     this.setState({ ready: true })
// //   //   }, 5000)
// //   // }
// //   //   constructor(props){
// //   //       super(props)
// //   //       setInterval(() =>{
// //   //           this.setState({timer: this.state.timer + 1})
// //   //       }, 1000)
// //   //   }
// //     render() {
// //       // if (this.state.ready === false) {
// //       //   return <Login />
// //       // }
// //       return this.props.children;
// //     }
// //   }

// class Splash extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         // onPress={() =>
//         //   navigate('login', { name: 'Jane' })
//         // }
//       />
//     );
//   }
// }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'green',
//     },
//     welcome: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//     },
//     instructions: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: 5,
//     },
// });



import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Splash extends Component {
  render() {
    return (
      <View>
        <Text>This is the Settings screen</Text>
        <Button onPress={() => this.props.navigation.navigate('login')} title="Home"/>
      </View>
    )
  }
};

export default Splash;