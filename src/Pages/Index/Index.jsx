import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Content from './Components/Content';
import About from './Components/About';
import Footer from './Components/Footer';
import './Index.css';

function App() {
  return (
    <div className="index-app">
        <div className = "index-body">
      <Header />
      
      <NavBar />
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