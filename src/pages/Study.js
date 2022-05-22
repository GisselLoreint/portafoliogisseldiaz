import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import DatosStudy from "../components/datosstudy/DatosStudy";

function Study() {
    return (
        <div>
            <Header />
            <Navbar />
            <DatosStudy/>
            <Footer />
        </div>
    );
}

export default Study;