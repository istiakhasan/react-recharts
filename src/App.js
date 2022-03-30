import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLinkChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
 import { useSpring, animated } from 'react-spring'
 import { useState } from 'react';


function App() {
   const [flip, set] = useState(false)
   const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, reset: true,
     reverse: flip,onRest: () => set(!flip) })
  return (
    <div >
   <animated.div style={props}>I will fade in</animated.div> 
  <MyLineChart  />
  <SpecialChart />
      
    </div>
  );
}

export default App;
