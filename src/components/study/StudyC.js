import { Link } from "react-router-dom";
import { getAllStudies } from "../../studies";
import './../../components/study/StudyC.css';

function Study() {
    const studies = getAllStudies();
    return (
        <div>
            <h1 className="h1-estudios">Estudios</h1>
            <div className="cont-studies">
                {studies.map(study =>
                    <div key={study.id} className="study">
                        <div className="study-inst">
                            {study.instituto}<br />
                            <Link to={`${study.id}`} className="links">Ver más</Link>
                        </div>
                    </div>
                )};
            </div>
        </div>
    );
}

export default Study;

/*<ul>
                {studies.map(study=>
                    <li key={study.id}>
                        {study.titulo}<br/>
                        {study.instituto}<br/>
                        {study.ciudad}<br/>
                        {study.anioCulminacion}<br/>
                    </li>
                )}
            </ul>*/