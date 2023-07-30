import './assets/css/variables.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import NotFound from './pages/NotFoundPage/NotFound';
import Layout from './components/Layout';
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import SignUp from './pages/SignUpPage/SignUp';
import Computer from './pages/ComputerPage/Computer';
import Online from './pages/OnlinePage/Online'
import Profile from './pages/ProfilePage/Profile';
import Leaderboard from './pages/LeaderBoardPage/Leaderboard';
import Admin from './pages/AdminPage/Admin';


function App() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />}/>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='play' element={<Navigate to = '/' />}/>
        <Route path='play/computer' element={<Computer />}/>
        <Route path='play/online' element={<Online />}/>
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
