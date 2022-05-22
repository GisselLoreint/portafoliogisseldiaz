import './DatosJobs.css';
import { useParams } from "react-router-dom";
import { getJob } from "../../jobs";
import imgJob from './../../img/imgJob.svg';

function DatosJobs() {
    const params=useParams();
    const job=getJob(parseInt(params.id));
    return (
        <div className="cont-more-jobs">
            {params.id}
            <div className='imgJob'>
                <img src={imgJob} alt=""></img>
            </div>
            <div className='descripcion-jobs'>
                <h1>{job.empresa}</h1><br/>
                <p><strong>Cargo: </strong>{job.cargo}</p><br/>
                <p><strong>Descripción: </strong>{job.descripcion}</p><br/>
                <p><strong>Jefe: </strong>{job.jefe}</p><br/>
                <p><strong>E-mail: </strong>{job.email}</p><br/>
                <p><strong>Año: </strong>{job.anio}</p><br/>
                <p><strong>Teléfono: </strong>{job.telefono}</p>
            </div>
            
        </div>
    );
}

export default DatosJobs;