import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'; // Correct import of Polygon
import 'leaflet/dist/leaflet.css';
import "./ContactUs.css";
import { statesData } from '../data/data';
import Slider from "react-slick";
import { Link } from 'react-router-dom';



// Fix for marker icons
// const center = [19.20062621397937, 72.87344864323596];
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
function ContactUs() {
    return (
        <>
            <div className="Contact-Us">
                {/* Left Side Content */}
                <div className="left-contact">
                    <h3>Explore Our Location</h3>
                    <p>Find us on the map to visit and explore our services.</p>
                    <ul>
                        <li>
                            <span className="label">Address:</span>
                            <span className="info">Plot no: A,Rd Number 27, Wagle Estate, MIDC, Thane</span>
                        </li>
                        <li>
                            <span className="label">Phone:</span>
                            <span className="info">+91-1234567890</span>
                        </li>
                        <li>
                            <span className="label">Email:</span>
                            <span className="info">info@example.com</span>
                        </li>
                        <li>
                            <span className="label">Follow:</span>
                            <span className="social-icons">
                                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right Side Animated Map */}
                <div className="map-container">
                <MapContainer center={[32.806671, -86.791130]} zoom={7} className="responsive-map">
  <TileLayer
    url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=bE7mZq4dPw9IqrMhVv0C"
    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  />
  {statesData.features.map((state) => {
    const coordinates = state.geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
    return (
      <Polygon
        key={state.id}
        pathOptions={{
          fillColor: '#ff9100', // Bright orange color
          fillOpacity: 0.5, // Adjust transparency
          color: '#ffffff', // White border
          weight: 2, // Border thickness
        }}
        positions={coordinates}
      />
    );
  })}
</MapContainer>


                </div>
            </div>
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
    );
}

export default ContactUs;
