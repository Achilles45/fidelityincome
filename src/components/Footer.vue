<template>
  <footer id="footer">
      <div class="container">
          <div class="row">
              <div class="col-md-3">
                  <h6 class="head">Company</h6>
                  <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><a href="#process">Our Process</a></li>
                   <li><a href="#pricing">Pricing</a></li>
                  </ul>
              </div>
               <div class="col-md-3">
                  <h6 class="head">Features</h6>
                  <ul>
                      <li><router-link to="/">Investments</router-link></li>
                      <li><router-link to="/">Data Analysis (coming ...)</router-link></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h6 class="head">Legal</h6>
                  <ul>
                      <li><router-link to="/">Privacy Policy</router-link></li>
                      <li><router-link to="/">Terms & Conditions</router-link></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h6 class="head">Contact Info</h6>
                  <div class="details">
                      <div class="first d-flex">
                          <i class="fa fa-map-marker"></i>
                          <div class="content">
                              <p class="pl-4">10 College Junction, Makurdi, Benue State, Nigeria</p>
                          </div>
                      </div>
                      <div class="first d-flex">
                          <i class="fa fa-envelope"></i>
                          <div class="content">
                              <p class="pl-4">fidelityincome@gmail.com</p>
                          </div>
                      </div>
                       <!-- <div class="first d-flex">
                          <i class="fa fa-phone"></i>
                          <div class="content">
                              <p class="pl-4">+234-8106-583-308</p>
                          </div>
                      </div> -->
                  </div>
              </div>
          </div><br>
          <hr>
          <div class="row">
              <div class="footer__bottom">
              <div class="col-12">
                  <small>Fidelity Income Investment Company is your preferred company when it comes to making investment effortlessly. We crowdfund investments and put these money into diverse investment portfolios ranging from crypocurrencies and forex trading, agriculture, oil and gas, import and export and others, creting value for our investors and jobs in the country where we do business. Our legal partners are working on the new legal terms and conditions. Need clarification, send a message on the live chat provided here...</small><br>
              </div><br>
              <div class="col-12 text-center">
                  <small class="copy">Copyright &copy;2020 All rights reserved. Fidelity Income Investment Company Limited</small>
              </div>
          </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
footer{
    background: #f8f9fc;
    padding: 5rem 0;
    .head{
        color:#00093a;
        font-weight: 900;
        text-transform: uppercase;
        font-size: .9rem;
        padding-bottom: 1rem;
    }
    .email{
        font-size: .8rem;
    }
    ul{
        li a{
            line-height: 2.7;
            color: #00093a;
            opacity: .6;
            font-weight: 400;
            font-size: 1.02rem;
        }
    }
    p{
        color:#00093a;
        opacity: .6;
        font-weight: 400;
        font-size: 1.02rem;
    }
    .fa-envelope, .fa-phone, .fa-map-marker{
        color:#00093a;
        opacity: .6;
        font-weight: bold;
    }
    .footer__bottom{
        small{
            color: #00093a;
            opacity: .5;
        }
        .copy{
            text-align: center !important;
        }
    }
}
</style>