import './App.css';
import Nav from './admin/nav/nav';
import LandingPage from './admin/page/landing/landingpage';
import Auth from './admin/api/auth'

function App() {
  return (
    <div>
      <Nav />
      <LandingPage />
      <Auth />
    </div>
    
  );
}

export default App;
