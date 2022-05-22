import './../../components/home1/Home1.css';
import imgMe from './../../img/me.jfif';


function Home1() {
    return (
        <div>
            <h1 className="h1-estudios">Mi Portafolio</h1>
            <div className='img-me'>
                <img src={imgMe}></img>
            </div>
            
        </div>
    );
}

export default Home1;