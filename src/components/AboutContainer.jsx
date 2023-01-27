import React from 'react'
import Footer from './Footer';


const AboutContainer = () => {
  return (
    <>
      <center>
        <span class="text-orange-600 text-[3rem] lg:text-[5rem]">
          <div></div>
          The Dev Team{" "}
        </span>
      </center>

      <div className="container">
        <div className="">
          <div class="card-deck mt-5 d-flex">
            <div class="card col-3 me-1">
              <img
                class="card-img-top h-100"
                src="img/ivanprofile2.jpg"
                alt=""
              />
              <div class="card-body">
                <center>
                  <p class="text-headingColor text-xl font-bold">
                    {" "}
                    Ma.Ivy Vanessa Nohara
                  </p>
                </center>
                <br></br>
                <p class="text 100xl font-semibold text-headingColor uppercase relative before:bg-orange-400 transition-all ease-in-out text-center">
                  Fullstack Web Developer
                </p>
                <br></br>
                <center>
                  <a
                    class="btn btn-primary"
                    href="https://www.facebook.com/ivanrahano"
                    role="button"
                  >
                    Facebook
                  </a>
                </center>
              </div>
            </div>
            <div class="card col-3 me-1">
              <img
                class="card-img-top"
                src="img/chrisprofile.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <center>
                  <p class="text-headingColor text-xl font-bold">
                    Chris Jhovin C. Cabral.
                  </p>
                </center>
                <br></br>
                <p class="text 100xl font-semibold text-headingColor uppercase relative before:bg-orange-400 transition-all ease-in-out text-center">
                  Fullstack Web Developer
                </p>
                <br></br>
                <center>
                  <a
                    class="btn btn-primary"
                    href="https://www.facebook.com/chrisjhovin.cabral.1"
                    role="button"
                  >
                    Facebook
                  </a>
                </center>
              </div>
            </div>
            <div class="card col-3 me-1">
              <img class="card-img-top" src="img/profile.jpg" alt="" />
              <div class="card-body">
                <center>
                  <p class="text-headingColor text-xl font-bold">
                    {" "}
                    Jerome L. Pingol.
                  </p>
                </center>
                <br></br>
                <p class="text 100xl font-semibold text-headingColor uppercase relative before:bg-orange-400 transition-all ease-in-out text-center">
                  Fullstack Web Developer
                </p>
                <br></br>
                <center>
                  <a
                    class="btn btn-primary"
                    href="https://www.facebook.com/OnlineRakitero26"
                    role="button"
                  >
                    Facebook
                  </a>
                </center>
              </div>
            </div>

            <div class="card col-3">
              <img
                class="card-img-top"
                src="img/ron2.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <center>
                  <p class="text-headingColor text-xl font-bold">
                    {" "}
                    Shirone Fortuno
                  </p>
                </center>
                <br></br>
                <p class="text 100xl font-semibold text-headingColor uppercase relative before:bg-orange-400 transition-all ease-in-out text-center">
                  Fullstack Web Developer
                </p>
                <br></br>
                <center>
                  <a
                    class="btn btn-primary"
                    href="https://www.facebook.com/shifortuno"
                    role="button"
                  >
                    Facebook
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
