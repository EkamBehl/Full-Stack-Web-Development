
import { useState } from 'react';
import './App.css';
import { Radio } from './components/Radio';
import {Switcher} from './components/Switcher'
import { Title } from './components/Title';
function App() {
  const [questionToggled, setToggled] = useState(true)
  return (
    <div className="App">
      <div className='newPost'> <h3 >New Post</h3></div>
     
    <Radio setToggled={setToggled}/>
    <h5>{questionToggled}</h5>
    <div className='newPost'> <h3 >What Do you wanna ask or share</h3></div>
    <Title/>
    
    <Switcher questionToggled={questionToggled}/>
    </div>
  );
}

export default App;
