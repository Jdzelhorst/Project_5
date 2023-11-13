import styles from './App.module.css'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="sign-in/" element={<h2>Sing In</h2>} />
          <Route path="sign-up/" element={<SignUpForm />} />
          <Route path='*' element={<h2>Page not found!</h2>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
