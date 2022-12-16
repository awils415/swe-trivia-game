import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import { app } from './firebase-config';
import { AuthContextProvider } from './context/AuthContext';
import Signin from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import PlayQuiz from './pages/PlayQuiz';


function App() {
  return (
    <div className='app-main'>
      <AuthContextProvider>
        <Routes>
          <></>
          <Route path='/' element={<Signin />} />
          <Route exact path='/home' element={<Quiz />} />
          <Route exact path='/play' element={<PlayQuiz />} />
          <Route exact path='/results' element={<Result />} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
