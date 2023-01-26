import React from 'react'
import { NavLink } from 'react-bootstrap'

const StoresContainer = () => {
    return (
        <React.Fragment>
            <div className="container">
                <NavLink to="/menu/Mcdo">

                    <div className="col-4 card">
                        <img src='/img/mcdo.jpg' class="card-img-left" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" MCDONALDS>
                                <p class="card-text">McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California. </p>
                                <p class="card-text"><small class="text-muted">Last updated 2 minutes ago</small></p>
                            </h5>
                        </div>
                    </div>
                </NavLink>
            </div>
        </React.Fragment>
    )
}

export default StoresContainer