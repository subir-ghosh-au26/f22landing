import './App.css';
import Header from './components/header';
import Main from './components/section1';
import Reviews from './components/reviews';
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Video from './components/video'
import Footer from './components/footer'

function App() {
    return (
<>
        <Header />
        <Main />
        <Reviews />
        <Section2 />
        <Section3 />
        <Section4 />
        <Video />
        <Footer />
</>
    );
}

export default App;