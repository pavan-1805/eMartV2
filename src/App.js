import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import MartContextProvider from './context/MartContextProvider';
function App() {
  return (
    <MartContextProvider>
      <div className="main">
              <div className="main-second">
                <Header/>                        
              </div>          
            <Footer/>   
                          
          </div>
      </MartContextProvider>
  );
}

export default App;
