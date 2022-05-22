import '../header/Header.css';
import header from './../../img/header.svg';

function Header() {
    return (
        <header>
            <img src={header} alt="img-header"></img>
            <h1>Gissel Loreint<br></br>Diaz Betancourth</h1>
        </header>
    );
}

export default Header;