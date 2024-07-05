
import './App.css';
import Welcome from './components/JSX';
import Hi from './components/class_comp';
import Fullname from './components/props';
import Subscribed from './components/state';

function App() {
  return (
    <div className="App">
      <Subscribed/>
      {/* <Hi/> */}
      {/* <Welcome/> */}
      {/* <Fullname name = "Abebe"/>
      <Fullname name = "Fernando"/>
      <Fullname name = "Roberto" age = "23">
        <p>It's a test subchild</p>
        <button>Click here!</button>
      </Fullname>
      */}
    </div>
  );
}

export default App;
