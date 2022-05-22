import { Link } from "react-router-dom";
import { getAllJobs } from "../../jobs";
import './../../components/jobs/JobsC.css';

function Jobs() {
    const jobs = getAllJobs();
    return (
        <div>
            <h1 className="h1-estudios">Experiencia laboral</h1>
            <div className="cont-jobs">
                {jobs.map(j =>
                    <div key={j.id} className="jobs">
                        <div className="jobs-titulo">
                            {j.empresa}<br/>
                            <Link to={`${j.id}`} className="links">Ver más</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Jobs;
