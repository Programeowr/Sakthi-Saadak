import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <Content />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;