import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css"
import 'font-awesome/css/font-awesome.min.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';


function Home() {

    // our breakfast
    const [hoveredColumnFirst, setHoveredColumnFirst] = useState(null);
    const [hoveredColumnSecond, setHoveredColumnSecond] = useState(null);

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
    // map 
    useEffect(() => {
        if (L.DomUtil.get('map') !== null) {
            L.DomUtil.get('map')._leaflet_id = null; // Remove the existing map instance
        }
        const map = L.map('map').setView([19.0760, 72.8777], 11); // Default view set to Mumbai

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        const customIcon = L.icon({
            iconUrl: '/assets/mapicon.png', // Replace with your icon URL
            iconSize: [32, 32], // Size of the icon [width, height]
            iconAnchor: [16, 32], // Anchor point of the icon (bottom center)
            popupAnchor: [0, -32], // Anchor point of the popup relative to the icon
        });

        // Coordinates for 5 locations in Mumbai
        const locations = [
            { name: 'Thane', lat: 19.2197, lng: 72.9805 },
            { name: 'Dadar', lat: 19.0189, lng: 72.8477 },
            { name: 'Borivali', lat: 18.9400, lng: 72.8354 },
            { name: 'Colaba Causeway', lat: 18.9360, lng: 72.8207 },
            { name: 'Bandra-Worli Sea Link', lat: 19.0303, lng: 72.8257 },
        ];

        // Add markers for each location
        locations.forEach(location => {
            L.marker([location.lat, location.lng], { icon: customIcon })
                .addTo(map)
                .bindPopup(`<b>${location.name}</b>`)
                .openPopup();
        });

    }, []);

    // map 


    // 1st menu 
    const menuItemsFirst = [
        {
            title: "Chinese Food",
            subtitle: "Schezwan Fried Rice",
            price: "210.00",
            image: "/assets/home-menu7.png",
        },
        {
            title: "Punjabi Food",
            subtitle: "Rajma Chawl",
            price: "310.00",
            image: "/assets/home-menu8.png",
        },
        {
            title: "Jain Food",
            subtitle: "Pav Bhaji ",
            price: "180.00",
            image: "/assets/home-menu9.png",
        },
        {
            title: "South Food",
            subtitle: "Masala Food",
            price: "760.00",
            image: "/assets/home-menu10.png",
        },
        {
            title: "Uttar-Pradesh Food",
            subtitle: "Aloo Tikki",
            price: "980.00",
            image: "/assets/home-menu11.png",
        },
        {
            title: "Gujrati Food",
            subtitle: "Dhokla",
            price: "230.00",
            image: "/assets/home-menu12.png",
        },
    ];

    const menuItems = [
        {
            title: "Mutton Food",
            subtitle: "Mutton Masala",
            price: "120.00",
            image: "/assets/home-menu1.png",
        },
        {
            title: "Paneer Food",
            subtitle: "Paneer Tikka",
            price: "340.00",
            image: "/assets/home-menu2.png",
        },
        {
            title: "Mushroom Food",
            subtitle: "Mushroom Haryali ",
            price: "180.00",
            image: "/assets/home-menu3.png",
        },
        {
            title: "Rajasthani Food",
            subtitle: "Rajasthani Kabab",
            price: "760.00",
            image: "/assets/home-menu4.png",
        },
        {
            title: "Non-Veg Food",
            subtitle: "Chicken Platter",
            price: "980.00",
            image: "/assets/home-menu5.png",
        },
        {
            title: "Egg Food",
            subtitle: "Egg Bhurji",
            price: "230.00",
            image: "/assets/home-menu6.png",
        },
    ];


    //   our-breakfst 

    // Testimonial 
    const [selectedContent, setSelectedContent] = useState(1);

    const contentData = [
        { id: 1, title: "Today's Best Offer", content: "Visit our restaurant today and enjoy 'Today's Best Offer'! Experience the flavors of our special dishes and make your day extraordinary. Our friendly staff is dedicated to providing exceptional service, making every visit memorable. Come, enjoy a warm and inviting atmosphere that feels like home.", image: "/assets/home-product1.png" },
        { id: 2, title: "Small Bite", content: "Indulge in our carefully crafted small bites, perfect for satisfying your cravings. Each dish is made with the finest ingredients and offers a burst of flavors that will leave you wanting more. Whether you're here for a quick snack or a light meal, our small bites are sure to delight your taste buds. Enjoy them with your favorite drink and make every moment special!", image: "/assets/home-product2.png" },
        { id: 3, title: "Today’s Menu", content: "Discover the exquisite flavors of today’s menu, thoughtfully curated to offer a variety of delectable dishes. Each item is crafted with fresh, locally sourced ingredients, ensuring a delightful and satisfying dining experience. Whether you’re in the mood for a hearty meal or a light bite, our menu has something to suit every palate. Enjoy a taste of culinary excellence with every bite", image: "/assets/home-product3.png" },
        { id: 4, title: "Try Our Snacks", content: "Experience the perfect blend of flavor and crunch with our delectable snacks. Whether you're looking for a savory bite or something with a little zing, our selection is sure to satisfy your cravings. Made with fresh, quality ingredients, each snack is a delightful treat that pairs well with any meal. Come and indulge in our irresistible snack options.", image: "/assets/home-product4.png" },
        { id: 5, title: "Exotic Taste", content: "Embark on a culinary journey with our exotic taste offerings, carefully crafted to bring bold flavors from around the world to your table. Our chefs use the finest spices and ingredients to create unique dishes that transport your taste buds to new heights. Explore a world of taste with every bite and discover something new and exciting.", image: "/assets/home-product5.png" },
        { id: 6, title: "Offer for Desserts", content: "End your meal on a sweet note with our irresistible dessert offerings. From rich, creamy treats to light, refreshing options, our desserts are designed to satisfy every sweet craving. Don't miss out on our special offers, giving you the perfect excuse to indulge in these heavenly creations. Treat yourself to the ultimate dessert experience today!", image: "/assets/home-product6.png" },
    ];

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

    return (
        // 4 image ka html code 
        <>
            <div className="image-row">
                <div className="image-container" style={{ backgroundImage: 'url(/assets/home-page1.jpg)' }}></div>
                <div className="image-container" style={{ backgroundImage: 'url(/assets/home-page2.jpg)' }}></div>
                <div className="image-container" style={{ backgroundImage: 'url(/assets/home-page3.jpg)' }}></div>
                <div className="image-container" style={{ backgroundImage: 'url(/assets/home-page2.jpg)' }}></div>
            </div>
            <div className="text">
                <h1>The Gourmet <br /> Garden</h1>
                <span>ESTD - 1990</span>
            </div>
            <div className="content-row">
                <div className="left-image" style={{ backgroundImage: "url('assets/home-page2.jpg')" }}></div>
                <div className="center-text">
                    <h2>Jose <br /> Osuna</h2>
                    <p>We take pride in creating an inviting atmosphere that feels like a home away from home. Whether you’re here for a leisurely brunch, a romantic dinner, or a glass of wine with friends, you’ll find that our warm, attentive service and cozy ambiance make every visit special.</p>
                </div>
                <div className="right-image" style={{ backgroundImage: "url('assets/home-page3.jpg')" }}></div>
            </div>
            <div className="content-row1">
                <div className="left-list">
                    <ul>
                        {contentData.map(item => (
                            <li
                                key={item.id}
                                onClick={() => setSelectedContent(item.id)}
                                className={selectedContent === item.id ? 'active' : ''}
                            >


                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="right-content">
                    <div className="right-content-right-image">
                        <h2>{contentData.find(item => item.id === selectedContent)?.title}</h2>
                        <p>{contentData.find(item => item.id === selectedContent)?.content}</p>
                    </div>

                    <img
                        src={contentData.find(item => item.id === selectedContent)?.image}
                        alt={contentData.find(item => item.id === selectedContent)?.title}
                        className="content-image"
                    />

                </div>
            </div>

            {/* our breakfast  */}
            <div className="container">
                <h1 className='heading-txt'>Our BreakFast</h1>
                <div className="row">
                    <div className="column">

                        {menuItemsFirst.map((item, index) => (
                            <div
                                className="home-menu"
                                key={index}
                                style={{
                                    backgroundImage:
                                        hoveredColumnFirst === index ? `url(${item.image})` : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transition: "background-image 2.9s ease-in-out"


                                }}
                                onMouseEnter={() => setHoveredColumnFirst(index)}
                                onMouseLeave={() => setHoveredColumnFirst(null)}
                            >
                                <h4 className="title1">{item.title}</h4>
                                <div className="desc">
                                    <span className="subtitle">{item.subtitle}</span>
                                    <span className="dots">. . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . .</span>
                                    <span className="price">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="column">

                        {menuItems.map((item, index) => (
                            <div
                                className="home-menu"
                                key={index}
                                style={{
                                    backgroundImage:
                                        hoveredColumnSecond === index ? `url(${item.image})` : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transition: "background-image 2.9s ease-in-out"


                                }}
                                onMouseEnter={() => setHoveredColumnSecond(index)}
                                onMouseLeave={() => setHoveredColumnSecond(null)}
                            >
                                <h4 className="title1">{item.title}</h4>
                                <div className="desc">
                                    <span className="subtitle">{item.subtitle}</span>
                                    <span className="dots">. . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . .</span>
                                    <span className="price">{item.price}</span>
                                </div>
                            </div>
                        ))}
                        {/* </div> */}
                    </div>
                </div>

            </div>
            {/* our breakfast  */}
            {/* google maps  */}

            <div id="map" style={{ width: '90%', height: '500px' }}></div>;
            {/* google maps  */}
            {/* Testimonail  */}
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
            {/* Testimonail  */}

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

export default Home;

