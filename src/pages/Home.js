import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home1 from "../components/home1/Home1";

function Home(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Home1/>
           <Footer/>
        </div>
    );
}

export default Home;