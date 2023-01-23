import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreateAccount from './pages/CreateAccount';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
