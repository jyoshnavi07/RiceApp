import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import Headings from '../../../components/common/Headings';

// Featured Carousel Posts
const carouselPosts = [
  {
    title: 'How We Process Premium Basmati',
    image: '/assets/img3.jpg',
    summary: 'Step-by-step insight into how our rice is aged and packaged.',
  },
  {
    title: 'The Importance of Organic Rice',
    image: '/assets/img3.jpg',
    summary: 'Why organic farming is the future of healthy eating.',
  },
  {
    title: 'Customer Story: From Farm to Family',
    image: '/assets/img3.jpg',
    summary: 'Meet the families that trust The Quality Rice every day.',
  },
];

// Grid Blog Posts
const blogGrid = [
  {
    title: 'How Rice Improves Digestion',
    image: '/src/assets/img3.jpg',
    desc: 'A breakdown of rice’s benefits to gut health.',
    author: 'Nutrition Expert',
  },
  {
    title: 'Why Aged Rice is Better',
    image: '/assets/img3.jpg',
    desc: 'Understand how aging improves aroma and quality.',
    author: 'Rice Scientist',
  },
  {
    title: 'Quick Recipes With Biryani Rice',
    image: '/assets/img3.jpg',
    desc: 'Make the most flavorful dishes in under 30 minutes!',
    author: 'Chef Anil',
  },
];

// Full Story Blog Sections
const blogSections = [
  {
    title: 'The Journey of a Grain',
    image: '/assets/img3.jpg',
    content:
      'From lush fields to your plate, learn how each grain of rice is handpicked, aged, and processed with care by The Quality Rice.',
  },
  {
    title: 'Our Farmers, Our Pride',
    image: '/assets/img3.jpg',
    content:
      'We partner with over 200+ farmers to ensure our rice remains pure, organic, and sustainable. This blog features real farmer stories.',
  },
  {
    title: 'Customer Spotlight: Rice Recipes from Families',
    image: '/assets/img3.jpg',
    content:
      'We reached out to customers for their favorite recipes using The Quality Rice. Discover heartwarming stories and delicious meals.',
  },
];

const Blog = () => {
  return (
    <div>
      <Navbar/>
        {/* banner section start */}
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: "url('/assets/img1.jpg')",
            height: '400px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
        <h1 className='text-success'>Blog-The Quality Rice</h1>
        <h3 className='text-dark'>From grain to greatness – nourishing lives, one seed at a time</h3>
      </div>
      {/* banner section end */}
      <div className="container py-4">

        {/* Grid Section */}
        <section className="mb-5">
          <Headings title='More Rice Blogs '/>
          <div className="row g-4">
            {blogGrid.map((post, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.desc}</p>
                  </div>
                  <div className="card-footer text-muted text-end">By {post.author}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Story Scroll Sections */}
        <section>
          <Headings title='Stories From The Feilds'/>
          {blogSections.map((section, index) => (
            <div className="row align-items-center my-5" key={index}>
              <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="img-fluid rounded shadow w-100"
                  style={{ maxHeight: '350px', objectFit: 'cover' }}
                />
              </div>
              <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : 'order-lg-1'}`}>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
