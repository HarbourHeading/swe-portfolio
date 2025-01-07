import styles from "./App.module.css";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Experience} from "./components/Experience/Experience";
import {Hero} from "./components/Hero/Hero";
import {Navbar} from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects";
import Loader from "react-loaders";


function App() {

    return (
        <div className={styles.App}>
            <Loader type="line-scale" active/>
            <div className={styles.AwaitLoading}>
                <Navbar/>
                <Hero/>
                <Projects/>
                <Experience/>
                <About/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
