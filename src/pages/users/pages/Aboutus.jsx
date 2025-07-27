import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Headings from "../../../components/common/Headings";

import bannerImg from "/src/assets/contactbanner3.jpg";
import farmImg from "/src/assets/contactbanner3.jpg";
import packImg from "/src/assets/contactbanner3.jpg";
import deliveryImg from "/src/assets/contactbanner3.jpg";
import qualityImg from "/src/assets/contactbanner3.jpg";
import missionImg from "/src/assets/contactbanner3.jpg";

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* banner Section */}
      <div
        className="container-fluid hero-section d-flex align-items-center justify-content-start text-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
          paddingLeft: "100px",
        }}
      >
        <div className="text-light" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 fw-bold text-success">Welcome to PureGrain</h1>
          <p className="lead text-dark">
            Serving premium quality rice from the heart of tradition to your plate.
            Experience taste, aroma, and health in every grain.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Our Story */}
        <Headings title="Our Story" />
        <div className="row align-items-center " style={{minHeight:'200px'}}>
          {/* col 1 */}
          <div className="col-lg-8">
            <p className="text-lg mb-4 text-justify">
              At PureGrain, we are dedicated to delivering the highest quality rice
              harvested from the finest paddy fields. With years of experience and
              commitment to purity, we ensure every grain undergoes a careful selection
              and packaging process.
            </p>
            <blockquote className="italic text-center text-[#6BA539] font-semibold text-xl mb-6">
              "From farm to family – a journey of health, trust, and tradition."
            </blockquote>
          </div>
          {/* col-2 */}
          <div className="col-lg-4 p-0" >
            <img
              src={missionImg}
              alt="Mission 1"
              className="shadow"
              style={{
                width: "100%",
                height:'100%',
                borderRadius:'50%',
                border:'2px solid green'
              }}
            />
          </div>
        </div>

        <Headings title="Our Mission & Vision" />
        {/* Our Mission */}
        <div className="row align-items-center text-center mt-4 ">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <img src={missionImg} className="img-fluid rounded shadow w-100" alt="Mission" />
          </div>
          <div className="col-lg-6">
            <h4 className="text-[#6BA539] fw-bold">Our Mission</h4>
            <p>
              To serve every household with healthy, affordable rice while supporting
              local farmers and sustainable practices.
            </p>
          </div>
        </div>

        {/* OUr vision */}
        <div className="row align-items-center mt-4">
           <div className="col-lg-6 mb-3 mb-lg-0 text-center">
            <h4 className="text-[#6BA539] fw-bold">Our Vision</h4>
            <p>
              To be India's most trusted rice brand that stands for purity, tradition,
              and customer satisfaction.
            </p>
          </div>
          <div className="col-lg-6 ">
            <img src={missionImg} className="img-fluid rounded shadow w-100" alt="Vision" />
          </div>
        </div>

        
        {/* Why Choose Us */}
        <Headings title="Why Choose Us?" />
        <div className="row text-center g-4">
          <div className="col-md-4">
            <img src={qualityImg} className="img-fluid rounded shadow mb-3" alt="Quality Rice" />
            <h5 className="fw-bold text-[#6BA539]">Premium Quality</h5>
            <p>Only the finest grains are selected after rigorous quality checks.</p>
          </div>
          <div className="col-md-4">
            <img src={packImg} className="img-fluid rounded shadow mb-3" alt="Packaging" />
            <h5 className="fw-bold text-[#6BA539]">Hygienic Packaging</h5>
            <p>Sealed for freshness with zero contamination throughout.</p>
          </div>
          <div className="col-md-4">
            <img src={deliveryImg} className="img-fluid rounded shadow mb-3" alt="Delivery" />
            <h5 className="fw-bold text-[#6BA539]">Timely Delivery</h5>
            <p>Fast and reliable delivery across cities, towns, and villages.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
