// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import RegistrationForm from '../Admin/ChangeItems/AddAnnouncement';
// import img1 from '../../Assets/edusity_assets/announcment-img-1.jpg';
// import img2 from '../../Assets/edusity_assets/announcment-img-2.jpg';
// import img3 from '../../Assets/edusity_assets/announcment-img-3.jpg';
// import img4 from '../../Assets/edusity_assets/announcment-img-4.jpg';
// import img5 from '../../Assets/edusity_assets/announcment-img-5.jpg';
// import img6 from '../../Assets/edusity_assets/announcment-img-6.jpg';
// import img7 from '../../Assets/edusity_assets/announcment-img-7.jpg';
// import Title from '../Title/Title';
// const Announcement = () => {
//     const [announcement, setAnnouncements] = useState([]);
//     const [showForm, setShowForm] = useState(false);

//     useEffect(() => {
//         // const value = localStorage.getItem('adminData');
//         axios.get(`https://placement-internship-tracker-backend.vercel.app/api/`)
//             .then(response => {
//                 const data = response.data;
//                 setAnnouncements(data.announcements);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const addAnnouncement = (newAnnouncement) => {
//         setAnnouncements([...announcement, newAnnouncement]);
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     return (
//         <div id="announcement-section">
//             {/* {console.log(announcement)} */}
//             <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
//             <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
//                 <div className="flex items-center justify-between mb-4">
//                     <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
//                 </div>
//                 <div className="flex">
//                     {/* <div className="w-1/2 pr-4">
//                         <Slider {...sliderSettings}>
//                             {announcements.map((announcement, index) => (
//                                 <div key={index}><img src={announcement.image} alt={`Slide ${index + 1}`} className="w-full h-auto" /></div>
//                             ))}
//                         </Slider>
//                     </div> */}
//                     <div className="w-1/2 pr-4">
//                         <Slider {...sliderSettings}>
//                             <div><img src={img1} alt="Slide 1" className="w-full h-auto" /></div>
//                             <div><img src={img2} alt="Slide 2" className="w-full h-auto" /></div>
//                             <div><img src={img3} alt="Slide 3" className="w-full h-auto" /></div>
//                             <div><img src={img4} alt="Slide 4" className="w-full h-auto" /></div>
//                             <div><img src={img5} alt="Slide 5" className="w-full h-auto" /></div>
//                             <div><img src={img6} alt="Slide 6" className="w-full h-auto" /></div>
//                             <div><img src={img7} alt="Slide 7" className="w-full h-auto" /></div>
//                         </Slider>
//                     </div>
//                     <div className="w-1/2 overflow-y-scroll" style={{ maxHeight: '500px' }}>
//                         {announcement.map((announce, index) => (
//                             <div key={index} className="p-4 border-b border-red-500">
//                                 <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{announce.headline}</p>
//                                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">{announce.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* <button onClick={toggleForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Add Announcement</button> */}
//             {showForm && <RegistrationForm addAnnouncement={addAnnouncement} closeForm={toggleForm} />}
//         </div>
//     );
// };

// export default Announcement;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import RegistrationForm from '../Admin/ChangeItems/AddAnnouncement';
// import img1 from '../../Assets/edusity_assets/announcment-img-1.jpg';
// import img2 from '../../Assets/edusity_assets/announcment-img-2.jpg';
// import img3 from '../../Assets/edusity_assets/announcment-img-3.jpg';
// import img4 from '../../Assets/edusity_assets/announcment-img-4.jpg';
// import img5 from '../../Assets/edusity_assets/announcment-img-5.jpg';
// import img6 from '../../Assets/edusity_assets/announcment-img-6.jpg';
// import img7 from '../../Assets/edusity_assets/announcment-img-7.jpg';
// import Title from '../Title/Title';
// const Announcement = () => {
//     const [announcement, setAnnouncements] = useState([]);
//     const [showForm, setShowForm] = useState(false);

//     useEffect(() => {
//         // const value = localStorage.getItem('adminData');
//         axios.get(https://placement-internship-tracker-backend.vercel.app/api/)
//             .then(response => {
//                 const data = response.data;
//                 setAnnouncements(data.announcements);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const addAnnouncement = (newAnnouncement) => {
//         setAnnouncements([...announcement, newAnnouncement]);
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     return (
//         <div id="announcement-section">
//             {/* {console.log(announcement)} */}
//             <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
//             <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
//                 <div className="flex items-center justify-between mb-4">
//                     <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
//                 </div>
//                 <div className="flex">
//                     {/* <div className="w-1/2 pr-4">
//                         <Slider {...sliderSettings}>
//                             {announcements.map((announcement, index) => (
//                                 <div key={index}><img src={announcement.image} alt={Slide ${index + 1}} className="w-full h-auto" /></div>
//                             ))}
//                         </Slider>
//                     </div> */}
//                     <div className="w-1/2 pr-4">
//                         <Slider {...sliderSettings}>
//                             <div><img src={img1} alt="Slide 1" className="w-full h-auto" /></div>
//                             <div><img src={img2} alt="Slide 2" className="w-full h-auto" /></div>
//                             <div><img src={img3} alt="Slide 3" className="w-full h-auto" /></div>
//                             <div><img src={img4} alt="Slide 4" className="w-full h-auto" /></div>
//                             <div><img src={img5} alt="Slide 5" className="w-full h-auto" /></div>
//                             <div><img src={img6} alt="Slide 6" className="w-full h-auto" /></div>
//                             <div><img src={img7} alt="Slide 7" className="w-full h-auto" /></div>
//                         </Slider>
//                     </div>
//                     <div className="w-1/2 overflow-y-scroll" style={{ maxHeight: '500px' }}>
//                         {announcement.map((announce, index) => (
//                             <div key={index} className="p-4 border-b border-red-500">
//                                 <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{announce.headline}</p>
//                                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">{announce.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* <button onClick={toggleForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Add Announcement</button> */}
//             {showForm && <RegistrationForm addAnnouncement={addAnnouncement} closeForm={toggleForm} />}
//         </div>
//     );
// };

// export default Announcement;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import RegistrationForm from '../Admin/ChangeItems/AddAnnouncement';
// import img1 from '../../Assets/edusity_assets/announcment-img-1.jpg';
// import img2 from '../../Assets/edusity_assets/announcment-img-2.jpg';
// import img3 from '../../Assets/edusity_assets/announcment-img-3.jpg';
// import img4 from '../../Assets/edusity_assets/announcment-img-4.jpg';
// import img5 from '../../Assets/edusity_assets/announcment-img-5.jpg';
// import img6 from '../../Assets/edusity_assets/announcment-img-6.jpg';
// import img7 from '../../Assets/edusity_assets/announcment-img-7.jpg';
// import Title from '../Title/Title';

// const Announcement = () => {
//     const [announcements, setAnnouncements] = useState([]);
//     const [showForm, setShowForm] = useState(false);

//     useEffect(() => {
//         axios.get(https://placement-internship-tracker-backend.vercel.app/api/)
//             .then(response => {
//                 const data = response.data;
//                 setAnnouncements(data.announcements);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const addAnnouncement = (newAnnouncement) => {
//         setAnnouncements([...announcements, newAnnouncement]);
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     return (
//         <div id="announcement-section">
//             <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
//             <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
//                 <div className="flex items-center justify-between mb-4">
//                     <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
//                 </div>
//                 <div className="flex">
//                     <div className="w-1/2 pr-4">
//                         <div className="slideshow-container">
//                             <div className="mySlides fade"><img src={img1} alt="Slide 1" className="w-full h-auto" /></div>
//                             <div className="mySlides fade"><img src={img2} alt="Slide 2" className="w-full h-auto" /></div>
//                             <div className="mySlides fade"><img src={img3} alt="Slide 3" className="w-full h-auto" /></div>
//                             <div className="mySlides fade"><img src={img4} alt="Slide 4" className="w-full h-auto" /></div>
//                             <div className="mySlides fade"><img src={img5} alt="Slide 5" className="w-full h-auto" /></div>
//                             <div className="mySlides fade"><img src={img6} alt="Slide 6" className="w-full h-auto" /></div>
//                             <div className="mySlides fade"><img src={img7} alt="Slide 7" className="w-full h-auto" /></div>
//                         </div>
//                     </div>
//                     <div className="w-1/2 overflow-y-scroll" style={{ maxHeight: '500px' }}>
//                         {announcements.map((announce, index) => (
//                             <div key={index} className="p-4 border-b border-red-500">
//                                 <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{announce.headline}</p>
//                                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">{announce.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* <button onClick={toggleForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Add Announcement</button> */}
//             {showForm && <RegistrationForm addAnnouncement={addAnnouncement} closeForm={toggleForm} />}
//         </div>
//     );
// };

// export default Announcement;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegistrationForm from '../Admin/ChangeItems/AddAnnouncement';
import img1 from '../../Assets/edusity_assets/announcment-img-1.jpg';
import img2 from '../../Assets/edusity_assets/announcment-img-2.jpg';
import img3 from '../../Assets/edusity_assets/announcment-img-3.jpg';
import img4 from '../../Assets/edusity_assets/announcment-img-4.jpg';
import img5 from '../../Assets/edusity_assets/announcment-img-5.jpg';
import img6 from '../../Assets/edusity_assets/announcment-img-6.jpg';
import img7 from '../../Assets/edusity_assets/announcment-img-7.jpg';
import Title from '../Title/Title';

const Announcement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        axios.get(`https://placement-internship-tracker-backend.vercel.app/api/`)
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

    // Function to handle automatic slide transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 7); // 7 is the total number of images
        }, 3000); // Change slide every 3 seconds (3000 milliseconds)

        return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
    }, []);

    return (
        <div id="announcement-section">
            <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
            <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
                </div>
                <div className="flex">
                    <div className="w-1/2 pr-4">
                        <div className="slideshow-container">
                            {[img1, img2, img3, img4, img5, img6, img7].map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className={`mySlides ${index === currentSlide ? 'fade' : ''}`}
                                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                                >
                                    <img src={imgSrc} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 overflow-y-scroll" style={{ maxHeight: '500px' }}>
                        {announcements.map((announce, index) => (
                            <div key={index} className="p-4 border-b border-red-500">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{announce.headline}</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{announce.description}</p>
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