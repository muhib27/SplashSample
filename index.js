import { AppRegistry } from 'react-native';
import App from './App';
import Login from './component/Login'
import Splash from './component/Splash'


// class Main extends Component {
//     constructor(props){
//         super(props)
//         this.state = {currentScreen: 'Splash'};

//         setTimeout(()=> {
//             console.log('fsdsdsd sdsdffffffffffffffff')
//         }, 4000)
//     }

//     render(){
//         const {currentScreen }= this.state
//         let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Login/>
//         return mainScreen
//     }
// }
AppRegistry.registerComponent('SplashSample', () => Splash);