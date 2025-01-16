import React from 'react'
import "./About.css";
import Slider from "react-slick";
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function About() {

  const sliderSettings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "I stumbled upon Grand Restaurant while exploring the city, and it was a pleasant surprise. The unique fusion of flavors in their dishes is what sets them apart",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "The portions were generous, and the prices were reasonable. I'll be recommending this restaurant to all my foodie friends. It's a must-visit!",
    },
    {
      id: 3,
      name: "Michael Lee",
      feedback: "My recent visit to Grand Restaurant exceeded all expectations. The menu had a fantastic variety of options, and I was blown away by the quality of ingredients and presentation",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const MenuButton = () => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate('/Menu');
  //   };
  // }
  return (
    <>
      {/* Quality and balance  */}
      <div className="quality">
        <div className="image-section">
          <img
            src="/assets/about-us1.jpg"
            alt="Example"
            className="responsive-image"
          />
        </div>
        <div className="content-section">
          <h2 className="title">
            Quality & Balance<span className="line"></span>
          </h2>
          <h3 className="subtitle1">Our Food <br /> Philosophy</h3>
          <p className="para">
            Simple and balanced. Alexander Petillo brings together flavors and specialties from Italy and beyond to create his own culinary world, full of surprising artistry.
          </p>
          <button className="btn" >Learn More</button>
        </div>
      </div>
      {/* Quality and balance  */}
      <div className="success-container">
        <div className="centered-content">
          <h4 className="heading">The secret of our success</h4>
          <p className="paragraph">
            A distinctive, well-preserved and comfortable space, high-quality products, authentic cuisine, food and drinks are done flawlessly.
          </p>
        </div>
      </div>

      {/* custom layout */}
      <div className="custom-layout">
        {/* Left Section */}
        <div className="custom-left">
          <img
            src="/assets/about-us2.png"
            alt="Left"
            className="custom-image"
          />
        </div>

        {/* Center Section */}
        <div className="custom-center">
          <img
            src="/assets/about-us3.jpg"
            alt="Center 1"
            className="custom-image"
          />
          <img
            src="/assets/about-us4.jpg"
            alt="Center 2"
            className="custom-image"
          />
          <img
            src="/assets/about-us5.png"
            alt="Center 3"
            className="custom-image"
          />
          <img
            src="/assets/about-us6.jpg"
            alt="Center 4"
            className="custom-image"
          />
        </div>

        {/* Right Section */}
        <div className="custom-right">
          <img
            src="/assets/about-us7.jpg"
            alt="Right"
            className="custom-image"
          />
        </div>
      </div>
      {/* custom layout */}
      {/* testimonail  */}
      <div className="testimonial-slider">
        <h1>Testimonals</h1>
        <h4>From our customers</h4>
        <Slider {...sliderSettings}>
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <p>{item.feedback}</p>
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
      {/* testimonail  */}
      {/* Footer  */}
      <div className="footer">
        <div className="footer-column">
          <div className="logo">
            <img src="/assets/baliboo.png" alt="Logo" />
          </div>
          <p>For a truly memorable dining experience reserve in advance a table as soon as you can. Come and taste our remarkable food and wine.</p>
          <div className="social-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <h1>Quick Links</h1>
          <ul className="menu-links">
          <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/book-table">Book Table</Link>
                        </li>
          </ul>
        </div>

        <div className="footer-column">
          <h1>Gallery</h1>
          <div className="gallery">
            <Slider {...sliderSettings1}>

              <img src="/assets/gallery1.png" alt="Gallery 1" />
              <img src="/assets/gallery2.png" alt="Gallery 2" />
              <img src="/assets/gallery1.png" alt="Gallery 3" />
            </Slider>
            {/* Add slider functionality here */}

          </div>
        </div>
      </div>
      {/* Footer  */}
    </>
  )
}

export default About
