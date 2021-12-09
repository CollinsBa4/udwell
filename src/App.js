import  Header from './Components/Header/Header'
import UserProfile from './Components/UserProfileMenu/UserProfile';
import './App.css';
import DashBoard from './Components/DashBoard/Dashboard';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    
    <div className="App">
        <Header />
      <main>
         <UserProfile />
         <DashBoard/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
