import './assets/css/variables.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import Computer from './pages/ComputerPage/Computer';
import Multiplayer from './pages/MultiplayerPage/Multiplayer'
import Profile from './pages/ProfilePage/Profile';
import Leaderboard from './pages/LeaderBoardPage/Leaderboard';
import Admin from './pages/AdminPage/Admin';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='play' element={<Navigate to = '/' />}/>
        <Route path='play/computer' element={<Computer />}/>
        <Route path='play/multiplayer' element={<Multiplayer />}/>
      </Route>
        {/* protected routes (?) */}
        <Route path='profile' element={<Profile />}/>
        <Route path='leaderboard' element={<Leaderboard />}/>
        {/* admin routes */}
        <Route path='admin' element={<Admin />}/>
    </Routes>
  );
}

export default App;
