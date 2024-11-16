import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import About from './Components/About';
import Footer from './Components/Footer';
import './index.css';

function App() {
  return (
    <div className="index-app">
        <div className = "index-body">
      <Header />
      
      <Navbar />
      <main>
        <Content />
        <About />
      </main>
      <Footer />
       </div>
    </div>
  );
}

export default App;