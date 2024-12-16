import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import EventDemoComponent from './EventsDemoComponent';
import StateDemoComponent from './StateDemoComponent';
import PostComponent from './PostComponent';
import ListandKeysComponent from './components/listandkeys/ListandKeysComponent';
import AxiosGetDemo from './components/axiosdemo/AxiosGetDemo';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './todolist/ToDoList';
function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path='/hello' element={<Hello />} />
        <Route path='/sdc' element={<StateDemoComponent />} />
        <Route path='/posts' element={<AxiosGetDemo />} />
        <Route path='/postview' element={<PostComponent />} />
        <Route path='/todolist' element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
