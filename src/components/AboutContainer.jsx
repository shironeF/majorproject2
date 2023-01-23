import React from "react";



export default function AboutContainer() {
  return (
    <React.Fragment>

    
   <center><h1>About Us</h1></center>
   
   
 
   <div className='container'>
    <div className='row d-flex'>
    <div class="card-group">
  <div class="col-4 card ">
    < img src="/img/ivanprofile.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Ma.Ivy Vanessa Nohara</h5>
      <p class="card-text">Time is Diamond, maiba-iba naman.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="col-4 card">
    <img src="/img/chrisprofile.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Chris Jhovin C. Cabral.</h5>
      <p class="card-text">Pag nanalo ako sa lotto,bibilhin ko ang KodeGO</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="col-4 card">
    <img src="/img/profile.jpg" class="card-img-top" alt="bg"/>
    <div class="card-body">
      <h5 class="card-title">Jerome Pingol</h5>
      <p class="card-text">Gwapo lang ambag ko sa grupo.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="col-3 card">
    <img src="/img/ron2.jpg" class="card-img-top" alt="profile"/>
    <div class="card-body">
      <h5 class="card-title">Shirone Fortuno</h5>
      <p class="card-text">Minsan nako nagbuhat ng mabigat ba bagay,pero mas mabigat pala tong grupo nato buhatin kahit hindi bagay.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>

   </div>



    
</React.Fragment>
   
  )
}

