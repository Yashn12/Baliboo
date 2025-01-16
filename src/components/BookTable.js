import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./BookTable.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';



function BookTable() {
  // const navigate = useNavigate();

  // Dummy Image URLs
  const images = [
    { src: '/assets/book-table1.jpg', title: 'Dish 1', subtitle: 'Breakfast Dish', link: '/menu' },
    { src: '/assets/book-table2.jpg', title: 'Dish 2', subtitle: 'Lunch Treat', link: '/menu' },
    { src: '/assets/book-table3.jpg', title: 'Dish 3', subtitle: 'Dinner Delight', link: '/menu' },
    { src: '/assets/book-table4.jpg', title: 'Dish 4', subtitle: 'Sweet Dish', link: '/menu' }
  ];
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
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    persons: "",
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/confirmation"); // Replace '/confirmation' with your desired page route
  };

  const today = new Date().toISOString().split("T")[0];

  // Generate options for the dropdown
  const personOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div>
      <div className="table-booking-container">
        <h1>Book a Table</h1>
        <p>
          Reserve your table today and indulge in an unforgettable dining experience.
          Our seamless booking process ensures you enjoy the perfect spot for every occasion.
          Book now to savor exceptional cuisine and warm hospitality!
        </p>

        <form onSubmit={handleSubmit} className="table-booking-form">
          {/* First Row */}
          <div className="input-row">
            {/* Date input */}
            <input
              type="date"
              name="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              required
              placeholder="Date"
            />

            {/* Time input */}
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              placeholder="Time"
            />

            {/* Number of People */}
            <select
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Number of People</option>
              {personOptions.map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Person" : "People"}
                </option>
              ))}
            </select>
          </div>

          {/* Second Row */}
          <div className="input-row">
            {/* Name input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />

            {/* Email input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />

            {/* Phone input */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone"
            />
          </div>

          <button type="submit" className="submit-button">
            Book a Table
          </button>
        </form>
      </div>
      {/* image-gallery  */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container1">
            <img
              src={image.src}
              alt={image.title}
              className="gallery-image"
              onClick={() => navigate(image.link)}
            />
            <div className="image-overlay">
              <h4>{image.title}</h4>
              <h3>{image.subtitle}</h3>
              <a href={image.link}>View Menu</a>
            </div>
          </div>
        ))}
      </div>

      {/* image-gallery  */}

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
    </div>
  );
}

export default BookTable;