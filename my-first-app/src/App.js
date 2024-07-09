
import './App.css';
import Welcome from './components/JSX';
import Hi from './components/class_comp';
import Event_funcne from './components/event-class-component';
import Event_funcn from './components/event-function-component';
import Fullname from './components/props';
import Subscribed from './components/state';

function App() {
  return (
    <div className="App">
    <Event_funcne/>
      {/* <Event_funcn/> */}
      {/* <Subscribed/> */}
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
