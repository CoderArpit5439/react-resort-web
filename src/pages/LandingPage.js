import React, { useState } from "react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../assets/logo.jpeg";

const LandingPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonials = [
    {
      text: "Booked a farmhouse near Indore—BBQ, bonfire and stargazing. Perfect weekend!",
      name: " Ritu & Amitt, Indore",
      image: "images/resource/client-thumb-1.jpg",
    },
    {
      text: "“Amazing lakeside farmhouse near Bangalore. Kids loved the games and pool!",
      name: " Neha & Raj, Bangalore",
      image: "images/resource/client-thumb-2.jpg",
    },
    {
      text: "Outdoor barbecue at a farmhouse in Goa made our anniversary special. Highly recommend!",
      name: "” Sanya & Vikram, Goa",
      image: "images/resource/client-thumb-3.jpg",
    },
    {
      text: "Clear photos, smooth booking—our stay in Rishikesh was unforgettable!",
      name: " Priya & Sameer,Rishikesh",
      image: "images/resource/client-thumb-1.jpg",
    }   
  ];

  const roomData = [
    {
      image: "images/rooms/2.jpg",
      title: "Deluxe Bedroom",
    },
    {
      image: "images/rooms/3.jpg",
      title: "Luxury Room",
    },
    {
      image: "images/rooms/4.jpg",
      title: "Double Bedroom",
    },
    {
      image: "images/rooms/2.jpg",
      title: "Deluxe Bedroom",
    },
    {
      image: "images/rooms/3.jpg",
      title: "Luxury Room",
    },
    {
      image: "images/rooms/4.jpg",
      title: "Double Bedroom",
    },
  ];

  const slides = [
    "images/resource/news-1.jpg",
    "images/resource/news-1.jpg",
    "images/resource/news-1.jpg",
  ];

  const sponsorImages = [
    "images/clients/1.png",
    "images/clients/2.png",
    "images/clients/3.png",
    "images/clients/4.png",
    "images/clients/5.png",
    "images/clients/1.png",
    "images/clients/2.png",
    "images/clients/3.png",
    "images/clients/4.png",
    "images/clients/5.png",
  ];

  return (
    <div class="page-wrapper">
      {/* <!-- Preloader -->
    <div class="preloader"></div>
 	 */}
      {/* <!-- Main Header / Header Style One--> */}
      <header class="main-header header-style-one">
        {/* <!-- Header Top --> */}
        {/* <div class="header-top">
          <div class="auto-container clearfix">
            <div class="top-left">
              <ul class="clearfix">
                <li>
                  <a >Privacy Policy</a>
                </li>
                <li>
                  <a >Help & Support</a>
                </li>
              </ul>
            </div>

            <div class="top-right">
              <ul class="social-icon-one clearfix">
                <li>
                  <a class="fa fa-facebook" ></a>
                </li>
                <li>
                  <a class="fa fa-twitter" ></a>
                </li>
                <li>
                  <a class="fa fa-google-plus" ></a>
                </li>
                <li>
                  <a class="fa fa-instagram" ></a>
                </li>
                <li>
                  <a class="fa fa-behance" ></a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <!-- Header Top End --> */}

        {/* <!--Header-Upper--> */}
        <div
          class="header-upper"
          style={{ paddingTop: "15px", paddingBottom: "15px" }}
        >
          <div class="auto-container">
            <div class="clearfix">
              <div class="pull-left logo-outer">
                <div class="logo">
                  <a>
                    <img
                      src={logo}
                      alt=""
                      title="asdf"
                      width="auto"
                      height="50px"
                    />
                  </a>
                </div>
              </div>

              <div class="pull-right upper-right clearfix">
                {/* <!--Info Box--> */}
                {/* <div class="upper-column info-box">
                  <div class="icon-box">
                    <span class="flaticon-technology"></span>
                  </div>
                  <ul>
                    <li>
                      <strong>Contact us</strong>
                    </li>
                    <li>
                      <a >(01) 123 786 4567</a>
                    </li>
                  </ul>
                </div> */}

                {/* <!--Info Box--> */}
                {/* <div class="upper-column info-box">
                  <div class="icon-box">
                    <span class="flaticon-pin"></span>
                  </div>
                  <ul>
                    <li>
                      <strong>Our Address</strong>
                    </li>
                    <li>A0 Lashley St, Victoria, Australia.</li>
                  </ul>
                </div> */}

                {/* <!--Info Box--> */}
                {/* <div class="upper-column info-box">
                  <div class="icon-box">
                    <span class="flaticon-timer"></span>
                  </div>
                  <ul>
                    <li>
                      <strong>Working Hours</strong>
                    </li>
                    <li>Mon - Sat : 8:00 am to 7:00 pm</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!--Header-Lower--> */}
        <div class="header-lower">
          <div class="auto-container">
            <div class="nav-outer clearfix">
              {/* <!-- Main Menu --> */}
              <nav class="main-menu">
                <div class="navbar-header">
                  {/* <!-- Toggle Button -->    	 */}
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>

                {/* <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <li class="current dropdown"><a >Home</a>
                                    <ul>
                                        <li><a >Homepage One</a></li>
                                        <li><a >Homepage Two</a></li>
                                        <li><a >Homepage Three</a></li>
                                        <li class="dropdown"><a >Headers Style</a>
                                            <ul>
                                                <li><a >Header Style One</a></li>
                                                <li><a >Header Style Two</a></li>
                                                <li><a >Header Style Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a >About Us</a>
                                    <ul>
                                        <li><a >About Us</a></li>
                                        <li><a >Dining</a></li>
                                        <li><a >Meetings & Events</a></li>
                                        <li><a >Wellness & Spa</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a >Rooms</a>
                                    <ul>
                                        <li><a >Rooms</a></li>
                                        <li><a >Room Single</a></li>
                                        <li><a >Choose Room</a></li>
                                        <li><a >Room Details</a></li>
                                        <li><a >Choose Date</a></li>
                                        <li><a >Payment Method</a></li>
                                        <li><a >Confirmation</a></li>
                                    </ul>
                                </li>
                                <li><a >Gallery</a></li>
                                <li class="dropdown"><a >Blog</a>
                                    <ul>
                                        <li><a >Blog</a></li>
                                        <li><a >Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a >Contact Us</a></li>
                            </ul>
                        </div> */}
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <div class="get-btn">
                <a  class="theme-btn appt-btn">
                  BOOK NOW
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!--Bounce In Header--> */}
        <div class="bounce-in-header">
          <div class="auto-container clearfix">
            {/* <!--Logo--> */}
            <div class="logo pull-left">
              <a class="img-responsive">
                <img src={logo} alt="asdf" width="auto" height="50px" />
              </a>
            </div>

            {/* <!--Right Col--> */}
            <div class="right-col pull-right">
              {/* <!-- Main Menu --> */}
              <nav class="main-menu">
                <div class="navbar-header">
                  {/* <!-- Toggle Button -->    	 */}
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>

                <div class="navbar-collapse collapse clearfix">
                  {/* <ul class="navigation clearfix">
                    <li class="current dropdown">
                      <a >Home</a>
                      <ul>
                        <li>
                          <a >Homepage One</a>
                        </li>
                        <li>
                          <a >Homepage Two</a>
                        </li>
                        <li>
                          <a >Homepage Three</a>
                        </li>
                        <li class="dropdown">
                          <a >Headers Style</a>
                          <ul>
                            <li>
                              <a >Header Style One</a>
                            </li>
                            <li>
                              <a >Header Style Two</a>
                            </li>
                            <li>
                              <a >Header Style Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a >About Us</a>
                      <ul>
                        <li>
                          <a >About Us</a>
                        </li>
                        <li>
                          <a >Dining</a>
                        </li>
                        <li>
                        <a>Meetings & Events</a>
                        </li>
                        <li>
                        <a>Wellness & Spa</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a >Rooms</a>
                      <ul>
                        <li>
                          <a >Rooms</a>
                        </li>
                        <li>
                          <a >Room Single</a>
                        </li>
                        <li>
                          <a >Choose Room</a>
                        </li>
                        <li>
                        <a>Room Details</a>
                        </li>
                        <li>
                          <a >Choose Date</a>
                        </li>
                        <li>
                          <a >Payment Method</a>
                        </li>
                        <li>
                          <a >Confirmation</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a >Gallery</a>
                    </li>
                    <li class="dropdown">
                      <a >Blog</a>
                      <ul>
                        <li>
                          <a >Blog</a>
                        </li>
                        <li>
                          <a >Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a >Contact Us</a>
                    </li>
                  </ul> */}
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}
            </div>
          </div>
        </div>
      </header>
      {/* <!--End Main Header --> */}

      {/* <!--Main Slider--> */}
      <section class="main-slider revolution-slider negative-margin">
        <div class="tp-banner-container">
          <div class="tp-banner">
            {/* <Swiper autoplay={{ delay: 3000 }} loop={true}>
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1725113800650-77ca39631859?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h3>Welcome to Book my farm</h3>
                <h1>Travel Brings Power & Love</h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1709338572945-f1ccb9e765a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGluZGlhJTIwcmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D" />
                <h3>Welcome to Book my farm</h3>
                <h1>Travel is the only thing...</h1>
              </SwiperSlide>
            </Swiper> */}
            {/* <ul>
                	
                    <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="images/main-slider/1.jpg"  data-saveperformance="off"  data-title="Awesome Title Here">
                    <img src="images/main-slider/1.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/> 
                    
                    <div class="tp-caption sfl sfb tp-resizeme"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-50"
                    data-speed="1500"
                    data-start="500"
                    data-easing="easeOutExpo"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.01"
                    data-endelementdelay="0.3"
                    data-endspeed="1200"
                    data-endeasing="Power4.easeIn"><h3 class="welcome-heading">Welcome to Book My Farm</h3></div>
                    
                    <div class="tp-caption sfr sfb tp-resizeme"
                    data-x="center" data-hoffset="15"
                    data-y="center" data-voffset="50"
                    data-speed="1500"
                    data-start="1000"
                    data-easing="easeOutExpo"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.01"
                    data-endelementdelay="0.3"
                    data-endspeed="1200"
                    data-endeasing="Power4.easeIn"><h1>Travel Brings Power & Love<br/>back to your Life</h1></div>
                    
                    </li>
                    
                    <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="images/main-slider/2.jpg"  data-saveperformance="off"  data-title="Awesome Title Here">
                    <img src="images/main-slider/2.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/> 
                    
                    <div class="tp-caption sfl sfb tp-resizeme"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-50"
                    data-speed="1500"
                    data-start="500"
                    data-easing="easeOutExpo"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.01"
                    data-endelementdelay="0.3"
                    data-endspeed="1200"
                    data-endeasing="Power4.easeIn"><h3 class="welcome-heading">Welcome to Book My Farm</h3></div>
                    
                    <div class="tp-caption sfr sfb tp-resizeme"
                    data-x="center" data-hoffset="15"
                    data-y="center" data-voffset="50"
                    data-speed="1500"
                    data-start="1000"
                    data-easing="easeOutExpo"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.01"
                    data-endelementdelay="0.3"
                    data-endspeed="1200"
                    data-endeasing="Power4.easeIn"><h1>Travel is the only thing that makes<br/>you Happier Ever</h1></div>
                    
                    </li>
                    
                    
                    <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="images/main-slider/3.jpg"  data-saveperformance="off"  data-title="Awesome Title Here">
                    <img src="images/main-slider/3.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/> 
                    
                    <div class="tp-caption sfl sfb tp-resizeme"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-50"
                    data-speed="1500"
                    data-start="500"
                    data-easing="easeOutExpo"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.01"
                    data-endelementdelay="0.3"
                    data-endspeed="1200"
                    data-endeasing="Power4.easeIn"><h3 class="welcome-heading">Welcome to Book My Farm</h3></div>
                    
                    <div class="tp-caption sfr sfb tp-resizeme"
                    data-x="center" data-hoffset="15"
                    data-y="center" data-voffset="50"
                    data-speed="1500"
                    data-start="1000"
                    data-easing="easeOutExpo"
                    data-splitin="none"
                    data-splitout="none"
                    data-elementdelay="0.01"
                    data-endelementdelay="0.3"
                    data-endspeed="1200"
                    data-endeasing="Power4.easeIn"><h1>Life is a Journey make the<br/>most of it</h1></div>
                    
                    </li>
                    
                </ul> */}

            <div class="tp-bannertimer"></div>
          </div>
        </div>
      </section>
      {/* <!--End Main Slider--> */}

      {/* <!--Availability Form--> */}
      <section
        class="availability-form"
        style={{ backgroundImage: "url(images/background/1.png)"  }}
      >
        <div class="auto-container">
          {/* <!--Availability Inner--> */}
          <div
            class="availability-inner wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
             style={{ paddingTop: "100px" }}
          >
            {/* <!--Title Box--> */}
            <div
              class="title-box"
              style={{ backgroundImage: "url(images/background/2.jpg)" }}
            >
              <h2>Check your Availability</h2>
            </div>
            <div class="lower-box">
              <form
                method="post"
                action="http://world5.commonsupport.com/html2/book my farm/contact.html"
              >
                <div class="row clearfix">
                  {/* <!-- Column / Form Group --> */}
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <input
                        class="datepicker"
                        type="date"
                        placeholder="Check In Date"
                      />
                      <label class="flaticon-calendar"></label>
                    </div>
                  </div>

                  {/* <!-- Column / Form Group --> */}
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <input
                        class="datepicker"
                        type="date"
                        placeholder="Check Out Date"
                      />
                      <label class="flaticon-calendar"></label>
                    </div>
                  </div>

                  {/* <!-- Column / Form Group --> */}
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <select>
                        <option>Rooms</option>
                        <option>Luxury Room</option>
                        <option>Deluxe Room</option>
                        <option>Modern Room</option>
                        <option>Family Room</option>
                        <option>Villa Room</option>
                        <option>Double Room</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Column / Form Group --> */}
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <select>
                        <option>Childrens</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Column / Form Group --> */}
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <select>
                        <option>Adults</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Column / Form Group --> */}
                  {/* <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <button type="submit" class="theme-btn btn-style-one">
                        BOOK NOW
                      </button>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Availability Form--> */}

      {/* <!--Luxury Room--> */}
      <section
        class="luxury-room"
        style={{ backgroundImage: "url(images/background/3.jpg)" }}
      >
        <div class="auto-container">
          {/* <!--Room Info One--> */}
          <div class="room-info-one">
            <div class="clearfix">
              {/* <!--Image Column--> */}
              <div class="image-column col-md-7 col-sm-12 col-xs-12">
                {/* <!--Image Box--> */}
                <figure class="image-box">
                  <img src="images/rooms/1.jpg" alt="" />
                </figure>
              </div>

              {/* <!--Content Column--> */}
              <div class="content-column col-md-5 col-sm-12 col-xs-12">
                <div class="inner-box">
                  <div class="sec-title-one">
                    <h2>Why BookMyFarm?</h2>
                    <div class="separator-icon"></div>
                    <div class="text">
                      <ul>
                        <li>
                          100% Verified Listings: Every property is inspected
                          and approved by our team.
                        </li>
                        <li>
                          Transparent Pricing: No hidden fees—what you see is
                          what you pay.
                        </li>
                        <li>
                          Professional Photos & Virtual Tours: Know exactly what
                          you’re getting.
                        </li>
                        <li>
                          Customizable Add-Ons: From bonfire setups to full
                          catering packages.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Three Items Carousel Box--> */}
          <div
            className="room-carousel-container wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {roomData.map((room, index) => (
                <SwiperSlide key={index}>
                  <div className="room-box-one">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src={room.image} alt={room.title} />
                        {/* <div className="overlay-box">
                          <div className="inner-box">
                            <div className="content">
                              <div className="icon-box">
                                <a >
                                  <span className="flaticon-eye-2"></span>
                                </a>
                              </div>
                              <h3>{room.title}</h3>
                            </div>
                          </div>
                        </div> */}
                      </figure>
                      <h3>
                        <a>{room.title}</a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* <!--End Luxury Room--> */}

      {/* <!--Welcome Section--> */}
      <section class="welcome-section">
        <div class="auto-container">
          {/* <!--Sec Title One--> */}
          <div class="sec-title-two">
            <h2>Welcome to Book My Farm</h2>
            <div class="separator-icon"></div>
            <div class="text">
              Escape to Your Private Farmhouse Retreat in Indore & Beyond
            </div>
            <div class="text">
              Discover and book from 1,000+ verified farmhouses across India,
              starting at Rs. 5,000
            </div>
          </div>

          {/* <!--Welcome Inner--> */}
          <div class="welcome-inner">
            <div class="row clearfix">
              {/* <!--Image Column--> */}
              <div class="image-column col-md-6 col-sm-6 col-xs-12">
                <figure
                  class="image-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img src="images/resource/welcome-image.jpg" alt="" />
                </figure>
              </div>

              {/* <!--Content Column--> */}
              <div class="content-column col-md-6 col-sm-6 col-xs-12">
                <div class="inner-box">
                  <div class="sec-title-three">
                    <h2>How It Works</h2>
                    <div class="text">
                      <ul>
                        <li>
                          Search & Select: Browse curated listings by city,
                          price range or amenities across India.
                        </li>
                        <li>
                          Customize Your Stay: Add extras—DJ, BBQ, catering,
                          decor—right in your booking flow.
                        </li>
                        <li>
                          Secure Booking & Payment: Pay only 20% upfront to
                          confirm. For questions, call our team.
                        </li>
                        <li>
                          Enjoy & Review: Relax, recharge—and leave an honest
                          review to help fellow travelers. .
                        </li>
                      </ul>
                    </div>
                    <a class="read-more theme-btn btn-style-one">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Welcome Section--> */}

      {/* <!--Attractive Spots Section--> */}
      <section class="attractive-spot-section">
        <div class="auto-container">
          {/* <!--Sec Title Two--> */}
          <div class="sec-title-two">
            <h2>About Us</h2>
            <div class="separator-icon"></div>
            <div class="text">
              At BookMyFarm, based in Indore, we’re on a mission to bring urban
              explorers closer to nature. Our platform features the best private
              farmhouses across India—from serene Indore retreats to scenic
              properties in Goa, Rishikesh, Bangalore and more.
            </div>
          </div>

          {/* <!--Spot Box--> */}
          <div class="spot-box">
            <div class="row clearfix">
              {/* <!--Featured Column--> */}
              <div class="featured-column col-md-6 col-sm-12 col-xs-12">
                <div class="row clearfix">
                  {/* <!--Image Column--> */}
                  <div class="image-block col-md-12 col-xs-12">
                    <figure class="image-box">
                      <a
                        class="lightbox-image"
                        href="images/resource/featured-1.jpg"
                        data-fancybox-group="featured-images"
                      >
                        <img src="images/resource/featured-1.jpg" alt="" />
                      </a>
                    </figure>
                  </div>

                  {/* <!--Image Column--> */}
                  <div class="image-block col-md-6 col-sm-6 col-xs-12">
                    <figure class="image-box">
                      <a
                        class="lightbox-image"
                        href="images/resource/featured-2.jpg"
                        data-fancybox-group="featured-images"
                      >
                        <img src="images/resource/featured-2.jpg" alt="" />
                      </a>
                    </figure>
                  </div>

                  {/* <!--Image Column--> */}
                  <div class="image-block col-md-6 col-sm-6 col-xs-12">
                    <figure class="image-box">
                      <a
                        class="lightbox-image"
                        href="images/resource/featured-3.jpg"
                        data-fancybox-group="featured-images"
                      >
                        <img src="images/resource/featured-3.jpg" alt="" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              {/* <!--Content Column / Left Align--> */}
              <div class="content-column left-align col-md-6 col-sm-12 col-xs-12">
                <div class="inner-box">
                  <div class="sec-title-three">
                    <h2>Featured Add-On Services</h2>
                    <div class="text">
                      Only pay 20% to confirm your booking, or call our team to clear any doubts.
                    </div>
                  </div>

                  {/* <!--List Style One--> */}
                  <ul class="list-style-one">
                    <li>
                      <span class="icon flaticon-reuse"></span>DJ & Live Music
                    </li>
                    <li>
                      <span class="icon flaticon-reuse"></span>Gourmet BBQ &
                      Catering
                    </li>
                    <li>
                      <span class="icon flaticon-reuse"></span>Bonfire & Decor
                      Packages
                    </li>
                    <li>
                      <span class="icon flaticon-reuse"></span>Outdoor Games &
                      Activities
                    </li>
                    <li>
                      <span class="icon flaticon-reuse"></span>Photography &
                      Drone Tours
                    </li>
                    {/* <li class="read-btn">
                      <a class="theme-btn btn-style-one">Read More</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Spot Box--> */}
          {/* <div class="spot-box">
            <div class="row clearfix">
              <div class="content-column right-align col-md-6 col-sm-12 col-xs-12">
                <div class="inner-box">
                  <div class="sec-title-three">
                    <h2>View Our Great Deals</h2>
                    <div class="text">
                      They call him Flipper Flipper faster than lightning no one
                      you see is smarter than he black gold all of them had hair
                      of gold like their mother the young one in curls never
                      heard the word impossible you wanna be where you can see
                      our troubles.
                    </div>
                  </div>
                  <ul class="list-style-one">
                    <li>
                      <span class="icon flaticon-big-pizza-slice"></span>TASTY
                      RESTAURANT
                    </li>
                    <li>
                      <span class="icon flaticon-shape-1"></span>PURIFIED
                      DRINKING WATER
                    </li>
                    <li>
                      <span class="icon flaticon-weather-2"></span>NATURAL
                      ENVIRONMENT
                    </li>
                    <li>
                      <span class="icon flaticon-wifi"></span>HIGH SPEED WIFI
                    </li>
                    <li>
                      <span class="icon flaticon-reuse"></span>CLEAN INTERIORS{" "}
                    </li>
                    <li class="read-btn">
                      <a class="theme-btn btn-style-one">Read More</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="featured-column col-md-6 col-sm-12 col-xs-12">
                <div class="row clearfix">
                  <div class="image-block col-md-12 col-xs-12">
                    <figure class="image-box">
                      <a
                        class="lightbox-image"
                        href="images/resource/featured-4.jpg"
                        data-fancybox-group="featured-images"
                      >
                        <img src="images/resource/featured-4.jpg" alt="" />
                      </a>
                    </figure>
                  </div>

                  <div class="image-block col-md-6 col-sm-6 col-xs-12">
                    <figure class="image-box">
                      <a
                        class="lightbox-image"
                        href="images/resource/featured-5.jpg"
                        data-fancybox-group="featured-images"
                      >
                        <img src="images/resource/featured-5.jpg" alt="" />
                      </a>
                    </figure>
                  </div>

                  <div class="image-block col-md-6 col-sm-6 col-xs-12">
                    <figure class="image-box">
                      <a
                        class="lightbox-image"
                        href="images/resource/featured-6.jpg"
                        data-fancybox-group="featured-images"
                      >
                        <img src="images/resource/featured-6.jpg" alt="" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!--End Attractive Spots Section--> */}

      {/* <!--Client Carousel--> */}
      <section
        class="client-carousel-section"
        style={{ backgroundImage: "url(images/background/4.jpg)" }}
      >
        <div class="auto-container">
          <div class="client-carousel-outer">
            <div class="icon-box">
              <span class="flaticon-interface-1"></span>
            </div>
            {/* <!--Sec Title Two--> */}
            <div class="sec-title-two">
              <h2>What Our Client Says</h2>
              <div class="separator-icon"></div>
            </div>

            <div className="testimonial-carousel-wrapper">
              {/* Text Carousel */}
              <Swiper
                modules={[Thumbs, Autoplay]}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={10}
                className="client-image-carousel"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-item">
                      <div className="text">{item.text}</div>
                      <h4>- {item.name} -</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbs Carousel */}
              {/* <div className="client-thumb-outer mt-4">
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={5}
                  spaceBetween={10}
                  watchSlidesProgress={true}
                  className="client-thumbs-carousel"
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                  }}
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div style={{ width: "60px", marginRight: "10px" }}>
                        <div className="thumb-item">
                          <figure className="thumb-box">
                            <img src={item.image} alt={`Client ${index}`} />
                          </figure>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Client Carousel--> */}

      {/* <!--News Section--> */}
      {/* <section class="news-section">
        <div class="auto-container">
          <div class="sec-title-two">
            <h2>Latest Events & News</h2>
            <div class="separator-icon"></div>
            <div class="text">
              Flipper Flipper faster than lightning no one you see is smarter
              than he black gold young one in curls never heard the word
            </div>
          </div>

          
          <div class="news-inner">
            <div class="row clearfix">
              <div class="carousel-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-box">
                  <div class="single-item-carousel">
                    <Swiper
                      modules={[Autoplay, Navigation, Pagination]}
                      className="single-item-carousel"
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      {slides.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="slide-item">
                            <img src={img} alt={`slide-${index}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div class="news-column col-md-6 col-sm-12 col-xs-12">
                <div class="news-block col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                    <figure class="image-box">
                      <a>
                        <img src="images/resource/news-2.jpg" alt="" />
                      </a>
                      <div class="date">
                        26 <span>Apr</span>
                      </div>
                    </figure>
                    <div class="lower-content">
                      <div class="outer-link clearfix">
                        <div class="author pull-left">
                          <span>Posted By: </span>Jamun James
                        </div>
                        <div class="meta pull-right">
                          <a>
                            <span class="icon flaticon-favorite"></span> 14
                          </a>{" "}
                          <a>
                            <span class="icon flaticon-comments"></span> 08
                          </a>
                        </div>
                      </div>
                      <h3>
                        <a>
                          The lightning no one you see is the smarter than black
                        </a>
                      </h3>
                      <div class="text">
                        They call him Flipper than lightning no one you see is
                        smarter than he black gold all of them had hair of gold
                        like their mother the young one in curls.
                      </div>
                      <a class="read-more">
                        Read more{" "}
                        <span class="arrow fa fa-angle-double-right"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="news-block col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                    <figure class="image-box">
                      <a>
                        <img src="images/resource/news-3.jpg" alt="" />
                      </a>
                      <div class="date">
                        04 <span>May</span>
                      </div>
                    </figure>
                    <div class="lower-content">
                      <div class="outer-link clearfix">
                        <div class="author pull-left">
                          <span>Posted By: </span>Jamun James
                        </div>
                        <div class="meta pull-right">
                          <a>
                            <span class="icon flaticon-favorite"></span> 11
                          </a>{" "}
                          <a>
                            <span class="icon flaticon-comments"></span> 10
                          </a>
                        </div>
                      </div>
                      <h3>
                        <a>The young one in curls never heard the word</a>
                      </h3>
                      <div class="text">
                        They call him faster than lightning no one you see is
                        smarter than he black gold all of them had hair of gold
                        like their mother the young one in curls.
                      </div>
                      <a class="read-more">
                        Read more{" "}
                        <span class="arrow fa fa-angle-double-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!--End News Section--> */}

      {/* <!--Main Footer--> */}
      <footer class="main-footer">
        <div class="auto-container">
          {/* <div className="sponsors-style-one">
            <div className="sponsors-outer">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 2500 }}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
                className="sponsors-carousel"
              >
                {sponsorImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a>
                          <img src={src} alt={`Sponsor ${index + 1}`} />
                        </a>
                      </figure>
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div> */}

          <div class="row clearfix">
            <div class="big-column col-md-6 col-sm-12 col-xs-12">
              <div class="row clearfix">
                <div class="footer-column col-lg-8 col-md-7 col-sm-6 col-xs-12">
                  <div class="footer-widget logo-widget">
                    <div class="footer-logo" style={{marginTop:"20px"}}>
                      <a>
                        <img src={logo} alt=""  width="auto" height="50px" />
                      </a>
                    </div>
                    {/* <div class="text">
                      They call him Flipper Flipper faster than lightning no one
                      you see is smarter than he black gold all of them had hair
                      of gold like their mother the young one.
                    </div> */}
                    <ul class="social-icon-two">
                      <li>
                        <a class="fa fa-facebook-f"></a>
                      </li>
                      <li>
                        <a class="fa fa-twitter"></a>
                      </li>
                      <li>
                        <a class="fa fa-google-plus"></a>
                      </li>
                      <li>
                        <a class="fa fa-instagram"></a>
                      </li>
                      <li>
                        <a class="fa fa-github"></a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            
          </div>

          
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
