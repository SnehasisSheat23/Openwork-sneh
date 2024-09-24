import Artist from "../Artist/Artist";
import Festivalsection from "../Festivalsection/Festivalsection";
import Footer from "../Footer/Footer";
import Highlights from "../Highlights/Highlights";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";

function Home(){
    return (
        <>
            <Navbar />
            <Landing />
            <Festivalsection />
            <Highlights />
            <Artist />
            <Footer />
        </>
    )
}

export default Home