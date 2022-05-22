import './DatosStudy.css';
import { useParams } from "react-router-dom";
import { getStudy } from './../../studies';
import sheStudy from './../../img/she-study.svg';

function DatosStudy() {
    const params = useParams();
    const study = getStudy(parseInt(params.id));

    return (
        <div className='cont-more'>
            {params.id}
            <div className='descripcion'>
                <h1>{study.instituto}</h1><br/>
                <p><strong>Título: </strong>{study.titulo}</p><br/>
                <p><strong>Ciudad: </strong>{study.ciudad}</p><br/>
                <p><strong>Año culminado: </strong>{study.anioCulminacion}</p>
            </div>
            <div className='img-she'>
                <img src={sheStudy} alt=""></img>
            </div>
        </div>
    );
}

export default DatosStudy;