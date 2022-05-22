import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Error404(){
    return(
        <div>
            <Header/>
            <h1>Error 404. La página no ha sido encontrada.</h1>
           <Footer/>
        </div>
    );
}

export default Error404;