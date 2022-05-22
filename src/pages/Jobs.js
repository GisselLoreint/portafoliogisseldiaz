import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import JobsC from "../components/jobs/JobsC";

function Jobs(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <JobsC/>
           <Footer/>
        </div>
    );
}

export default Jobs;