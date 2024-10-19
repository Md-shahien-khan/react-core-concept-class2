import './App.css'
import Counter from './Counter';
import Home from './Home';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('Button Clicked');
  }
  // Arrow Function
  const handleclick2 = () =>{
    alert('button 2 clicked');
  }


  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
  <>
  <h3>React Core Concepts 2</h3>
    <Friends></Friends>
    <User></User>
    <Team></Team>
    <Counter></Counter>
    <Home></Home>
  {/* <button onclick='handleClick()'></button> we used to write like that */}
  {/* <button onClick={handleClick}>Click Me</button>
  <button onClick={handleclick2}>Click 2</button>
  <button onClick={() => {alert('third clciked')}}>Third Click</button>
  <button onClick={function handleClick4(){
    alert('fourth clciked');
  }}>Fourth Click</button>
  <button onClick={() => addToFive(3)}>Add to 5</button> */}
  </>
  )
}

export default App
