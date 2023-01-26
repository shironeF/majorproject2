import React from 'react'
import { NavLink } from 'react-router-dom'

const StoresContainer = () => {
    return (
        <React.Fragment>

            <h3>Select Store </h3>
           

            <div className="container">
                <div className="d-flex card-group">
                    <NavLink to="/menu/Mcdo" className="col-4 card border border-0">
                        <div className="card border border-0">
                            <div class="card border border-0">
                                <img src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-original-logo-hd-0.png" class="card-img imgH" alt="..." />
                                <div class="card-img-overlay">
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/menu/Joby" className="col-4 card border border-0">
                        <div className="card border border-0">
                            <div class="card border border-0">
                                <img src="https://1000logos.net/wp-content/uploads/2021/05/Jollibee-logo.png" class="card-img imgH" alt="..." />
                                <div class="card-img-overlay">
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/menu/Bk" className="col-4 card border border-0">
                        <div className="card border border-0">
                            <div class="card border border-0">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAy3jFhdIW1Lghu3fU4OVlq8si9P86FXiEbOXHRNa6MJy6slZV_CM6f9ukLv3Upny5IHQ&usqp=CAU" class="card-img imgH" alt="..." />
                                <div class="card-img-overlay">
                                </div>
                            </div>
                        </div>

                    </NavLink>

                </div>

            </div>

        </React.Fragment>
    )
}

export default StoresContainer