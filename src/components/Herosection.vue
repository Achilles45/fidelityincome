<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/hero1.jpeg" alt="First slide" />
          <div class="carousel-caption">
            <h2 class="animated bounceIn animate3d">Investing Beyound the News</h2>
            <p>Fidelity Income Investment allows you to take advantage in making quick investments into high yielding and secure opportunities that meets our strategy.</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/hero5.jpg" alt="Second slide" />
          <div class="carousel-caption">
            <h2 class="animated slideInLeft animate2d">Grow and Manage your wealth</h2>
            <p
              class="animated slideInRight animate3d"
            >We are building tools and software applications that will allow you to save, grow and track your income and expenditure from one device.</p>
           <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/hero3.jpeg" alt="Third slide" />
          <div class="carousel-caption">
            <h2
              class="animated slideInDown animate3d"
            >Opportunities that suits your needs</h2>
            <p
              class="animated slideInDown animate3d"
            >We are very customer centric in all our approach and processes and out suit of products and services has been deigned with our cutomers in mind to return maximum value.</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started</router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
.carousel__wrapper {
  // padding-top: 5rem;
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4, 9, 30, 0.9);
  }
  .carousel-img {
    width: 100vw;
    height: 80vh;
    display: block !important;
    background-position: center;
    background-size: cover;
  }
  .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 30%;
    transform: translateX(-50%, -50%);
    // width: 60%;
    text-align: center;
    color:#fff;
    h2 {
      font-weight: 900;
      font-size: 3rem;
      padding-bottom: 1rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      text-shadow: 0.03em 0.03em .0.5em rgba(0,0,0,.5);
      line-height: 1.3;
    }
    p {
      letter-spacing: 1px;
      font-size: .9rem;
      padding-bottom: 1rem;
      opacity: 0.6;
      line-height: 2;
    }
    .carousel-btn {
      color: #fff;
      background: #2ECC71;
      padding: 1.2rem 4rem;
      text-align: center;
      font-size: 0.9rem;
      text-decoration: none;
      border-radius: 3px;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
}

@media only screen and (max-width: 960px) {
  .carousel__wrapper {
    .carousel-img {
      width: auto;
      height: 100vh;
      max-height: 600px;
      display: block;
    }
    .carousel-caption {
      position: absolute;
      top: 28%;
      width: 80%;
      transform: translateX(-50%, -50%);
      text-align: left;
      h2 {
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }
      p {
        font-size: 0.8rem;
        padding-bottom: 2rem;
      }
    }
  }
}
</style>