import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import SlidingSlides from "./components/quotes/Quotes";
import Quotes from "./components/quotes/Quotes";
import Skills from "./components/skills/Skills";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Contact />
            <Quotes />
            <Footer />
        </div>
    )
}

export default App;