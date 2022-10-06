import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div class="container">
            <div class="card-group">
  <div class="card">
    {/* <img src="..." class="card-img-top" alt="..."/> */}
    <h3 class="card-title banner_one">GANGA CONFECTIONERIES PVT.LTD.</h3>
    {/* <button class="arrow">REWARD RS.500</button> */}
    <div class="card-body">
      {/* <h3 class="card-title">GANGA CONFECTIONERIES PVT.LTD.</h3> */}
      <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/25/927447-sweets-new.jpg" class="card-img-top" alt="..."/>
      <button class="arrow">REWARD RS.500</button>
      <p class="card-text">Ganga Confectioneries is listed under Sweet Shops in Rajendra Nagar Sector 5, Sahibabad Delhi. Check Address, Contact Number, Rating & Reviews, Photos, Maps etc, on Justdial.<span class="banner-para">Cakes are pretty much the highlight of all events in our lives. Any celebration, whether a birthday, an aniversary, or an acoomplishment, is incomplete without a delicious cake. A cake can be defined as an defined as an ideal sweet dish when it just melts in your mouth and has the most distinctive flavour with the perfect filling and texture. All your sweet carvings can be satisfied at the cake shops in Sahibabad, Delhi, where you would never be disappointed with the availability of a variety of scrumptious cakes and bankery items.</span></p>
     
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;