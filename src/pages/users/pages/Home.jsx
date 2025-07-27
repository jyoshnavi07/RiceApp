import React from 'react';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import offers from '/src/components/offers.js';
import Card from '../../../components/common/Card';
import SecondaryBtn from '../../../components/common/SecondaryBtn';
import Headings from '../../../components/common/Headings';

const brands = [
  {
    name: 'India Gate',
    logo: './src/assets/img6.jpg',
    description:
      'India Gate is a symbol of premium quality and unmatched taste. Known for its extra-long grains, rich aroma, and natural aging process, this brand is ideal for luxurious dishes like biryani and pulao.',
  },
  {
    name: 'Daawat',
    logo: './src/assets/img8.jpg',
    description:
      'Daawat offers the authentic taste of traditional Indian basmati. Its aged grains are soft yet firm, with a fragrant aroma that elevates every meal.',
  },
  {
    name: 'Fortune',
    logo: './src/assets/img3.jpg',
    description:
      'Fortune rice is perfect for everyday cooking. With its non-sticky grains, quick cooking time, and affordable quality, it’s a go-to choice for daily meals.',
  },
  {
    name: 'Kohinoor',
    logo: './src/assets/img4.jpg',
    description:
      'Kohinoor brings the royal taste of heritage basmati. Naturally aged and carefully selected, its rice grains are long, slender, and aromatic.',
  },
  {
    name: 'Lal Qilla',
    logo: './src/assets/img5.jpg',
    description:
      'Lal Qilla rice is celebrated for its royal basmati quality and superior grain strength. It turns every meal into a royal feast.',
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />.
      {/* banner section start */}
      <div
        className="container-fluid hero-section d-flex align-items-start justify-content-end text-center"
        style={{
          backgroundImage: "url('/assets/banner.png')",
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '2rem'
        }}
      >
        <div className="text-light" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 fw-bold text-success">Discover the Best Rice Brands</h1>
          <p className="lead text-muted">Taste the tradition and quality of India’s finest basmati rice.</p>
          <SecondaryBtn title='Explore Now'/>
        </div>
      </div>
      {/* banner section end */}

      <div className='container'>
          
        {/* scrolling top brands */}
        <section className="py-5">
          <div className="container">
            <Headings title='Top Brands'/>
            <div
              className="d-flex overflow-auto pb-3"
              style={{
                gap: '1rem',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth:'none'
              }}
            >
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: '280px',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <Card
                    name={brand.name}
                    logo={brand.logo}
                    description={brand.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <div className="container-fluid px-0 mb-5">
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <Headings title='Offers'/>
            <div className="carousel-inner">
              {offers.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 " style={{ minHeight: '80vh' }}>
                    {/* Left Side */}
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h1 className="display-6 fw-bold text-success">{item.title}</h1>
                      <p className="lead text-muted">{item.description}</p>
                      <div className="bg-white shadow-sm rounded p-3 my-3">
                        <strong>{item.offer}</strong>
                      </div>
                      <SecondaryBtn title='Shop Now'/>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-5 text-center">
                      <div style={{ height: '400px', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt="Hero"
                          className="img-fluid rounded shadow w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <section className="py-5 bg-white">
          <div className="container">
            <Headings title='Our Categories'/>
            <div className="row text-center">
              <div className="col-md-12 col-lg-4">
                <div className='catogories'>
                  <h5>Raw Basmati</h5>
                  <p>Perfect for biryanis and festive dishes.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className='catogories'>
                  <h5>Sella/Parboiled</h5>
                  <p>Non-sticky grains, ideal for daily meals.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="catogories">
                  <h5>Organic Rice</h5>
                  <p>Grown without chemicals, 100% natural.</p>
                </div>   
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-5 mb-5 bg-light">
          <div className="container">
            <Headings title='Why Choose Us'/>
            <div className="row text-center">
              <div className="col-md-3">
                <i className="bi bi-award text-success fs-1"></i>
                <h6 className="fw-semibold mt-2">Quality Assured</h6>
              </div>
              <div className="col-md-3">
                <i className="bi bi-truck text-success fs-1"></i>
                <h6 className="fw-semibold mt-2">Fast Delivery</h6>
              </div>
              <div className="col-md-3">
                <i className="bi bi-wallet2 text-success fs-1"></i>
                <h6 className="fw-semibold mt-2">Affordable Pricing</h6>
              </div>
              <div className="col-md-3">
                <i className="bi bi-star text-success fs-1"></i>
                <h6 className="fw-semibold mt-2">Top-Rated Brands</h6>
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <Headings title='Order Now'/>
        <section className="callUs text-white text-center py-5 mb-5">
          <h2 className="fw-bold">Order Now and Experience Premium Quality Rice</h2>
          <p>Start shopping from India’s most trusted rice brands.</p>
          <SecondaryBtn title='Shop Now'/>
        </section>
       </div>
      <Footer />
    </div>
  );
};

export default Home;













      {/* Testimonials */}
      {/* <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>"India Gate rice never disappoints! My biryani turns out amazing every time."</p>
                <footer className="blockquote-footer">Sita, Home Chef</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>"Fast delivery and amazing product range. Highly recommended!"</p>
                <footer className="blockquote-footer">Ravi, Restaurant Owner</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section> */}