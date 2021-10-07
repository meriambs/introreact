import './App.css';

import FirstComponent from './Components/NavBar/MyFirstComponent';
import SecondComponent from './Components/MySecondComponent';
import ThirdComponent from './Components/MyThirdComponent';
import FourthComponent from './Components/MyFourthComponent';

function App() {
  return (
    <div className="App">
      <h1>Introduction to React</h1>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

export default App;
