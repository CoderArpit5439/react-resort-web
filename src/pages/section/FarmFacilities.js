import React from "react";
import './FarmFacilities.css'; // For custom styles like background overlays

const FarmFacilities = () => {
  const features = [
    { icon: "https://royellaa.netlify.app/images/home-1/feature-1.png", label: "Room Services" },
    { icon: "https://royellaa.netlify.app/images/home-1/feature-2.png", label: "Wi-Fi Internet" },
    { icon: "https://royellaa.netlify.app/images/home-1/feature-3.png", label: "Smart Key" },
    { icon: "https://royellaa.netlify.app/images/home-1/feature-4.png", label: "Breakfast" },
    { icon: "https://royellaa.netlify.app/images/home-1/feature-5.png", label: "Swimming Pool" },
    { icon: "https://royellaa.netlify.app/images/home-1/feature-1.png", label: "Room Service" },
  ];

  return (
    <section className="bg-dark text-white position-relative">
      <div
        className="py-5"
        style={{
          backgroundImage: "url('https://royellaa.netlify.app/images/home-1/section-shape2.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          opacity: "0.95",
        }}
      >
        <div className="container text-center px-3 px-md-5">
          {/* <div className="d-flex justify-content-center align-items-center mb-4">
            <hr className="w-25 me-2 text-secondary" />
            <img
              src="/images/home-1/section-shape1.png"
              alt="room_section_logo"
              width={50}
              height={50}
            />
            <hr className="w-25 ms-2 text-secondary" />
          </div> */}
          <h1 className="h3 text-uppercase fw-semibold">Farm’s Facilities</h1>
          <p className="text-light mt-3">
          At our farmhouse, comfort meets convenience to create an experience that feels like home—only better. We’ve carefully curated a range of modern facilities to ensure your stay is as relaxing and enjoyable as possible. Enjoy seamless Room Services for anything you need, right at your doorstep. Stay connected in the quiet of nature with high-speed Wi-Fi Internet, perfect for both leisure and remote work.
          </p>

          <div className="row justify-content-center mt-5 g-4">
            {features.map((feature, idx) => (
              <div className="col-6 col-md-4 col-lg-2" key={idx}>
                <div className="facility-box text-center position-relative border border-secondary p-4 h-100">
                  <img src={feature.icon} alt={feature.label} className="mb-3" />
                  <h5 className="position-relative facility-title">{feature.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmFacilities;
