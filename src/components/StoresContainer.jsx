import React from 'react'
import { NavLink } from 'react-router-dom'

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
            <br>
            </br>
            <div className="container">
                <NavLink to="/menu/Joby">

                    <div className="col-4 card">
                        <img src='/img/jollibee.jpg' class="card-img-left" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" JOLLIBEE>
                                <p class="card-text">Jollibee is a Filipino chain of fast food restaurants owned by Jollibee Foods Corporation (JFC). As of December 2021, JFC had a total of about 1,500 Jollibee outlets worldwide, with restaurants in Southeast Asia, the Middle East, East Asia Hong Kong, Macau, North America, and Europe, Spain, Italy.</p>
                                <p class="card-text"><small class="text-muted">Last updated 2 minutes ago</small></p>
                            </h5>
                        </div>
                    </div>
                </NavLink>
            </div>
            <br>
            </br>

            <div className="container">
                <NavLink to="/menu/Bk">

                    <div className="col-4 card">
                        <img src='/img/burgerking.jpg' class="card-img-left" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" BURGER KING>
                                <p class="card-text">Burger King is an American-based multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida based restaurant chain.</p>
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