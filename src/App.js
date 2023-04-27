
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) =>{
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className='cont'>
        <Routes>
          <Route path='/profile/*' element={<Profile state={props.state.profilePage} />}/>
          <Route path='/messages/*' element={<Dialogs state={props.state.dialogsPage} />}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
          
        </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}


export default App;
