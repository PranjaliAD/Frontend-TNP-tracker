import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RegistrationForm from '../Admin/ChangeItems/AddAnnouncement';
const Announcement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios.get('https://placement-internship-tracker-backend.vercel.app/api/')
            .then(response => {
                const data = response.data;
                setAnnouncements(data.announcements);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const addAnnouncement = (newAnnouncement) => {
        setAnnouncements([...announcements, newAnnouncement]);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div id="announcement-section">
            <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
                </div>
                <div className="flex">
                    <div className="w-1/2 pr-4">
                        <Slider {...sliderSettings}>
                            {announcements.map((announcement, index) => (
                                <div key={index}><img src={announcement.image} alt={`Slide ${index + 1}`} className="w-full h-auto" /></div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-1/2 overflow-y-scroll" style={{ maxHeight: '500px' }}>
                        {announcements.map((announcement, index) => (
                            <div key={index} className="p-4 border-b border-red-500">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{announcement.headline}</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{announcement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Add Announcement</button> */}
            {showForm && <RegistrationForm addAnnouncement={addAnnouncement} closeForm={toggleForm} />}
        </div>
    );
};

export default Announcement;
