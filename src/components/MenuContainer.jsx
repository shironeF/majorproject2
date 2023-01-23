import React from 'react';

export default function MenuContainer() {
    return (
        <React.Fragment>

            <center><h1>Restaurants: </h1></center>

            <div className='container'>
                <div className='row d-flex'>
                    <div class="card-group">
                        <div class="col-2 card">
                            <img src="/img/mcdonalds.jpg" class="card-img-left" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Mcdonalds</h5>
                                <p class="card-text">McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row d-flex '>
                    <div class="card-group">
                        <div class="col-4 card">
                            <img src="/img/jolibee.jpg" class="card-img-left" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Jollibee</h5>
                                <p class="card-text">Jollibee is a Filipino chain of fast food restaurants owned by Jollibee Foods Corporation (JFC). As of December 2021, JFC had a total of about 1,500 Jollibee outlets worldwide, with restaurants in Southeast Asia, the Middle East, East Asia Hong Kong, Macau, North America, and Europe, Spain, Italy </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row d-flex '>
                    <div class="card-group">
                        <div class="col-4 card">
                            <img src="/img/burgerking.jpg" class="card-img-left" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Burger King</h5>
                                <p class="card-text">Burger King is an American-based multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain. </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}