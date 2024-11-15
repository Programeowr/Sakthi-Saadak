import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
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