import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const ShowTask = ({ task }) => {


    return (
        <>



            {task && <Link to={`/taskdetail/${task._id}`} className='nav-link'> <div className={`card showtask ${task.status}`} >
                <div className="card-header" >
                    Status: {task.status}
                </div>
                <div className="card-body">

                    <h1  >{task.heading}</h1>

                </div>
            </div></Link>}

        </>
    )
}

export default ShowTask