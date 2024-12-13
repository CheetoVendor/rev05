import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import EventDemoComponent from './EventsDemoComponent';
import StateDemoComponent from './StateDemoComponent';
import PostComponent from './PostComponent';
function App() {

  return (
    <div className="App">
      <h2>Hello React</h2>
      <Hello name="Branden"></Hello>
      <EventDemoComponent></EventDemoComponent>
      <hr />
      <StateDemoComponent></StateDemoComponent>
      <hr />
      <PostComponent></PostComponent>
    </div>
  );
}

export default App;
