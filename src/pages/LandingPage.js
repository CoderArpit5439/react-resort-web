import React, { useState } from "react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from '../assets/logo.jpeg'

const LandingPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonials = [
    {
      text: "They call him Flipper Flipper faster than lightning no one you see is smarter than he black gold...",
      name: "ANGELO MATHEWS",
      image: "images/resource/client-thumb-1.jpg",
    },
    {
      text: "They call him Flipper Flipper faster than lightning no one you see is smarter than he...",
      name: "ANGELO MATHEWS",
      image: "images/resource/client-thumb-2.jpg",
    },
    {
      text: "They call him Flipper Flipper faster than lightning no one you see is smarter than he...",
      name: "ANGELO MATHEWS",
      image: "images/resource/client-thumb-3.jpg",
    },
    {
      text: "They call him Flipper Flipper faster than lightning no one you see is smarter than he...",
      name: "ANGELO MATHEWS",
      image: "images/resource/client-thumb-1.jpg",
    },
    {
      text: "They call him Flipper Flipper faster than lightning no one you see is smarter than he...",
      name: "ANGELO MATHEWS",
      image: "images/resource/client-thumb-2.jpg",
    },
    {
      text: "They call him Flipper Flipper faster than lightning no one you see is smarter than he...",
      name: "ANGELO MATHEWS",
      image: "images/resource/client-thumb-3.jpg",
    },
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
        <div class="header-top">
          <div class="auto-container clearfix">
            {/* <!-- Top Left --> */}
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

            {/* <!-- Top Right / Social Icon One --> */}
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
        </div>
        {/* <!-- Header Top End --> */}

        {/* <!--Header-Upper--> */}
        <div class="header-upper">
          <div class="auto-container">
            <div class="clearfix">
              <div class="pull-left logo-outer">
                <div class="logo">
                  <a >
                    <img src={logo} alt="" title="asdf"  width='auto' height='50px'/>
                  </a>
                </div>
              </div>

              <div class="pull-right upper-right clearfix">
                {/* <!--Info Box--> */}
                <div class="upper-column info-box">
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
                </div>

                {/* <!--Info Box--> */}
                <div class="upper-column info-box">
                  <div class="icon-box">
                    <span class="flaticon-pin"></span>
                  </div>
                  <ul>
                    <li>
                      <strong>Our Address</strong>
                    </li>
                    <li>A0 Lashley St, Victoria, Australia.</li>
                  </ul>
                </div>

                {/* <!--Info Box--> */}
                <div class="upper-column info-box">
                  <div class="icon-box">
                    <span class="flaticon-timer"></span>
                  </div>
                  <ul>
                    <li>
                      <strong>Working Hours</strong>
                    </li>
                    <li>Mon - Sat : 8:00 am to 7:00 pm</li>
                  </ul>
                </div>
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

              <div class="get-btn">
                <a  class="theme-btn appt-btn">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Bounce In Header--> */}
        <div class="bounce-in-header">
          <div class="auto-container clearfix">
            {/* <!--Logo--> */}
            <div class="logo pull-left">
              <a  class="img-responsive">
                <img src={logo} alt="asdf" width='auto' height='50px' />
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
                  <ul class="navigation clearfix">
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
                  </ul>
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
            <Swiper autoplay={{ delay: 3000 }} loop={true}>
              <SwiperSlide>
                <img src="/images/main-slider/1.jpg" />
                <h3>Welcome to Queenstown</h3>
                <h1>Travel Brings Power & Love</h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/main-slider/2.jpg" />
                <h3>Welcome to Queenstown</h3>
                <h1>Travel is the only thing...</h1>
              </SwiperSlide>
            </Swiper>
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
                    data-endeasing="Power4.easeIn"><h3 class="welcome-heading">Welcome to Queenstown</h3></div>
                    
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
                    data-endeasing="Power4.easeIn"><h3 class="welcome-heading">Welcome to Queenstown</h3></div>
                    
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
                    data-endeasing="Power4.easeIn"><h3 class="welcome-heading">Welcome to Queenstown</h3></div>
                    
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
        style={{ backgroundImage: "url(images/background/1.png)" }}
      >
        <div class="auto-container">
          {/* <!--Availability Inner--> */}
          <div
            class="availability-inner wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
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
                action="http://world5.commonsupport.com/html2/queenstown/contact.html"
              >
                <div class="row clearfix">
                  {/* <!-- Column / Form Group --> */}
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <input
                        class="datepicker"
                        type="text"
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
                        type="text"
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
                  <div class="column col-lg-2 col-sm-4 col-md-4 col-xs-12">
                    <div class="form-group">
                      <button type="submit" class="theme-btn btn-style-one">
                        BOOK NOW
                      </button>
                    </div>
                  </div>
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
                    <h2>Luxury Room</h2>
                    <div class="separator-icon"></div>
                    <div class="text">
                      They call him Flipper Flipper faster than lightning no one
                      you see is smarter than he black gold all of them had hair
                      of gold like young one in curls.
                    </div>
                    <div class="price">
                      $350
                      <span>
                        PER
                        <br />
                        NIGHT
                      </span>
                    </div>
                    {/* <!--Btn Book--> */}
                    <div class="btn-book">
                      <a  class="book-btn btn-style-one">
                        Book Now
                      </a>
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
                        <div className="overlay-box">
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
                        </div>
                      </figure>
                      <h3>
                        <a >{room.title}</a>
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
            <h2>Welcome to Queenstown</h2>
            <div class="separator-icon"></div>
            <div class="text">
              Flipper Flipper faster than lightning no one you see is smarter
              than he black gold young one in curls
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
                    <h2>We Enhance Our New Era</h2>
                    <div class="text">
                      <p>
                        They call him Flipper Flipper faster than lightning no
                        one you see is smarter than he black gold all of them
                        had hair of gold like their mother the young one in
                        curls never heard the word impossible you wanna be where
                        you can see our troubles are all the same you wanna be
                        where everybody knows your name.
                      </p>
                      <p>
                        The smarter than he black gold all of them had hair of
                        gold like their mother the young one in curls never
                        heard the word impossible you wanna be where are all the
                        same you wanna be where you can see our troubles.
                      </p>
                    </div>
                    <a
                      
                      class="read-more theme-btn btn-style-one"
                    >
                      Read More
                    </a>
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
            <h2>Nearby Attractive Spots</h2>
            <div class="separator-icon"></div>
            <div class="text">
              Flipper Flipper faster than lightning no one you see is smarter
              than he black gold young one in curls never heard the word{" "}
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
                    <h2>View Our Great Deals</h2>
                    <div class="text">
                      They call him Flipper Flipper faster than lightning no one
                      you see is smarter than he black gold all of them had hair
                      of gold like their mother the young one in curls never
                      heard the word impossible you wanna be where you can see
                      our troubles.
                    </div>
                  </div>

                  {/* <!--List Style One--> */}
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
                      <a
                        
                        class="theme-btn btn-style-one"
                      >
                        Read More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Spot Box--> */}
          <div class="spot-box">
            <div class="row clearfix">
              {/* <!--Content Column / Right Align--> */}
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
                  {/* <!--List Style One--> */}
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
                      <a
                        
                        class="theme-btn btn-style-one"
                      >
                        Read More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!--Featured Column--> */}
              <div class="featured-column col-md-6 col-sm-12 col-xs-12">
                <div class="row clearfix">
                  {/* <!--Image Column--> */}
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

                  {/* <!--Image Column--> */}
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

                  {/* <!--Image Column--> */}
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
          </div>
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
              <div className="client-thumb-outer mt-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Client Carousel--> */}

      {/* <!--News Section--> */}
      <section class="news-section">
        <div class="auto-container">
          <div class="sec-title-two">
            <h2>Latest Events & News</h2>
            <div class="separator-icon"></div>
            <div class="text">
              Flipper Flipper faster than lightning no one you see is smarter
              than he black gold young one in curls never heard the word
            </div>
          </div>

          {/* <!--News Inner--> */}
          <div class="news-inner">
            <div class="row clearfix">
              {/* <!--Carousel Column--> */}
              <div class="carousel-column col-md-6 col-sm-12 col-xs-12">
                {/* <!--Inner Box--> */}
                <div class="inner-box">
                  {/* <!--Single Item Carousel--> */}
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

              {/* <!--News Column--> */}
              <div class="news-column col-md-6 col-sm-12 col-xs-12">
                {/* <!--News Block--> */}
                <div class="news-block col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                    {/* <!--Image Box--> */}
                    <figure class="image-box">
                      <a >
                        <img src="images/resource/news-2.jpg" alt="" />
                      </a>
                      <div class="date">
                        26 <span>Apr</span>
                      </div>
                    </figure>
                    {/* <!--Lower Content--> */}
                    <div class="lower-content">
                      {/* <!--Outer Link--> */}
                      <div class="outer-link clearfix">
                        <div class="author pull-left">
                          <span>Posted By: </span>Jamun James
                        </div>
                        <div class="meta pull-right">
                          <a >
                            <span class="icon flaticon-favorite"></span> 14
                          </a>{" "}
                          <a >
                            <span class="icon flaticon-comments"></span> 08
                          </a>
                        </div>
                      </div>
                      <h3>
                        <a >
                          The lightning no one you see is the smarter than black
                        </a>
                      </h3>
                      <div class="text">
                        They call him Flipper than lightning no one you see is
                        smarter than he black gold all of them had hair of gold
                        like their mother the young one in curls.
                      </div>
                      <a class="read-more" >
                        Read more{" "}
                        <span class="arrow fa fa-angle-double-right"></span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!--News Block--> */}
                <div class="news-block col-md-6 col-sm-6 col-xs-12">
                  <div class="inner-box">
                    {/* <!--Image Box--> */}
                    <figure class="image-box">
                      <a >
                        <img src="images/resource/news-3.jpg" alt="" />
                      </a>
                      <div class="date">
                        04 <span>May</span>
                      </div>
                    </figure>
                    {/* <!--Lower Content--> */}
                    <div class="lower-content">
                      {/* <!--Outer Link--> */}
                      <div class="outer-link clearfix">
                        <div class="author pull-left">
                          <span>Posted By: </span>Jamun James
                        </div>
                        <div class="meta pull-right">
                          <a >
                            <span class="icon flaticon-favorite"></span> 11
                          </a>{" "}
                          <a >
                            <span class="icon flaticon-comments"></span> 10
                          </a>
                        </div>
                      </div>
                      <h3>
                        <a >
                          The young one in curls never heard the word
                        </a>
                      </h3>
                      <div class="text">
                        They call him faster than lightning no one you see is
                        smarter than he black gold all of them had hair of gold
                        like their mother the young one in curls.
                      </div>
                      <a class="read-more" >
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
      </section>
      {/* <!--End News Section--> */}

      {/* <!--Main Footer--> */}
      <footer class="main-footer">
        <div class="auto-container">
          {/* <!--sponsors style One--> */}
          <div className="sponsors-style-one">
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
                  <a >
                    <img src={src} alt={`Sponsor ${index + 1}`} />
                  </a>
                </figure>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

          <div class="row clearfix">
            {/* <!--Big Column--> */}
            <div class="big-column col-md-6 col-sm-12 col-xs-12">
              <div class="row clearfix">
                {/* <!-- Footer Widgets / Logo Widget --> */}
                <div class="footer-column col-lg-8 col-md-7 col-sm-6 col-xs-12">
                  <div class="footer-widget logo-widget">
                    <div class="footer-logo">
                      <a >
                        <img src="../assets/logo.jpeg" alt="" />
                      </a>
                    </div>
                    <div class="text">
                      They call him Flipper Flipper faster than lightning no one
                      you see is smarter than he black gold all of them had hair
                      of gold like their mother the young one.
                    </div>
                    {/* <!--Social Style Two--> */}
                    <ul class="social-icon-two">
                      <li>
                        <a class="fa fa-facebook-f" ></a>
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
                        <a class="fa fa-github" ></a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Footer Widgets / Links Widget --> */}
                <div class="footer-column col-lg-4 col-md-5 col-sm-6 col-xs-12">
                  <div class="footer-widget links-widget">
                    {/* <!--Footer Title--> */}
                    <div class="footer-title">
                      <h2>Information Links</h2>
                    </div>
                    <ul>
                      <li>
                        <a >Site Map</a>
                      </li>
                      <li>
                        <a >Search Terms</a>
                      </li>
                      <li>
                        <a >Advanced Search</a>
                      </li>
                      <li>
                        <a >Reservations</a>
                      </li>
                      <li>
                        <a >Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--Big Column--> */}
            <div class="big-column col-md-6 col-sm-12 col-xs-12">
              <div class="row clearfix">
                {/* <!-- Footer Widgets / Links Widget --> */}
                <div class="footer-column col-lg-5 col-md-5 col-sm-6 col-xs-12">
                  <div class="footer-widget links-widget">
                    {/* <!--Footer Title--> */}
                    <div class="footer-title">
                      <h2>Inquires</h2>
                    </div>
                    <ul>
                      <li>
                        <a >Accommodations</a>
                      </li>
                      <li>
                        <a >Photos & Videos</a>
                      </li>
                      <li>
                        <a >Services & Amenities</a>
                      </li>
                      <li>
                        <a >Restaurants</a>
                      </li>
                      <li>
                        <a >Destinations</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!--Newsletter Form--> */}
                <div class="footer-column col-lg-7 col-md-7 col-sm-6 col-xs-12">
                  <div class="footer-widget newsletter-form">
                    {/* <!--Footer Title--> */}
                    <div class="footer-title">
                      <h2>Newsletters</h2>
                    </div>
                    {/* <!--Form--> */}
                    <form
                      method="post"
                      action="http://world5.commonsupport.com/html2/queenstown/contact.html"
                    >
                      <div class="row clearfix">
                        {/* <!--Form Group--> */}
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="form-group">
                            <input
                              type="text"
                              name="text"
                              value=""
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        {/* <!--Form Group-->  */}
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="form-group">
                            <input
                              type="email"
                              name="email"
                              value=""
                              placeholder="Email ID"
                              required
                            />
                          </div>
                        </div>
                        {/* <!--Form Group--> */}
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="form-group button-group">
                            <button
                              type="submit"
                              class="btn-style-two theme-btn"
                            >
                              SUBSCRIBE
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Footer Bottom--> */}
          <div class="footer-bottom">
            <div class="row clearfix">
              <div class="column col-md-6 col-sm-6 col-xs-12">
                <div class="copyright">&copy; asdf</div>
              </div>
              <div class="column col-md-6 col-sm-6 col-xs-12 text-right">
                <ul class="cards">
                  <li>
                    <a class="fa fa-cc-visa" ></a>
                  </li>
                  <li>
                    <a class="fa fa-cc-mastercard" ></a>
                  </li>
                  <li>
                    <a class="fa fa-cc-paypal" ></a>
                  </li>
                  <li>
                    <a class="fa fa-cc-discover" ></a>
                  </li>
                  <li>
                    <a class="fa fa-cc-stripe" ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
