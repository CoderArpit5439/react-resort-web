import React from "react";

const Luxury = () => {
  return (
    <div>
  <section class="py-5 bg-light text-light">
  <div class="container overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
    <div class="row align-items-center">
      {/* <!-- Slider Section --> */}
      <div class="col-md-6 mb-4 mb-md-0">
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://royellaa.netlify.app/images/home-1/Hotel1.jpg" class="d-block w-100" alt="Slide 1"/>
            </div>
            <div class="carousel-item">
              <img src="https://royellaa.netlify.app/images/home-1/Hotel1.jpg" class="d-block w-100" alt="Slide 2"/>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Section --> */}
      <div class="col-md-6">
        <h5 class="text-warning fw-medium">LUXURY HOTEL AND RESORT</h5>
        <h1 class="h3 fw-bold my-3">LUXURY BEST HOTEL IN CITY CALIFORNIA, USA</h1>
        <p class="text-secondary">
          Welcome to a haven where elegance meets serenity—your perfect escape from the everyday. Our Luxury Hotel and Resort offers an immersive experience of comfort, sophistication, and natural beauty, all in one unforgettable stay. From the moment you arrive, you’re embraced by impeccable hospitality, state-of-the-art amenities, and breathtaking surroundings designed to soothe and inspire.
        </p>

        <div class="d-flex mt-4">
          <div>
            <h1 class="display-5 text-warning fw-bold">10+</h1>
            <p class="pt-3 text-muted">Luxury Resorts</p>
          </div>
          <div class="ms-5">
            <h1 class="display-5 text-warning fw-bold">4.5</h1>
            <p class="pt-3 text-muted">Customer Ratings</p>
          </div>
        </div>

        <div class="my-4 position-relative">
          <hr class="text-secondary"/>
          <span class="position-absolute top-0 start-0 bg-warning" style={{width: "60px", height: "2px"}}></span>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Luxury;
