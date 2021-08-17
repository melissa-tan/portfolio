import './App.css';
import Header from './components/Header';
import Contact from "./components/Contact"
import About from "./components/About"
import Home from "./components/Home"
import Projects from "./components/Projects"

function App() {
    return (
        <div className="app">
            <Header />
            <div className="section">
                <div className="section-child">
                    <Home />
                </div>
                <div className="section-child">
                    <About />
                </div>
                <div className="section-child">
                    <Projects />
                </div>
                <div className="section-child">
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;
