// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
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
//     const announcementRef = useRef(null);

//     useEffect(() => {
//         axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/')
//             .then(response => {
//                 const data = response.data;
//                 setAnnouncements(data.announcements);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

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
//         <div ref={announcementRef} id="announcement-section">
//             <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
//             <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
//                 <div className="flex items-center justify-between mb-4">
//                     <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
//                 </div>
//                 <div className="flex">
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
//                         {announcements.map((announcement, index) => (
//                             <div key={index} className="p-4 border-b border-red-500">
//                                 <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{announcement.headline}</p>
//                                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">{announcement.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Announcement;
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    const announcementRef = useRef(null);

    useEffect(() => {
        axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/')
            .then(response => {
                const data = response.data;
                setAnnouncements(data.announcements);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
        <div ref={announcementRef} id="announcement-section">
            <Title subTitle='Internship and Placement Achievements' title='Celebrating Student Excellence' />
            <div className="w-full min-w-7rem mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 min-h-300">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest News</h5>
                </div>
                <div className="flex">
                    <div className="w-1/2 pr-4">
                        <Slider {...sliderSettings}>
                            <div><img src={img1} alt="Slide 1" className="w-full h-auto" /></div>
                            <div><img src={img2} alt="Slide 2" className="w-full h-auto" /></div>
                            <div><img src={img3} alt="Slide 3" className="w-full h-auto" /></div>
                            <div><img src={img4} alt="Slide 4" className="w-full h-auto" /></div>
                            <div><img src={img5} alt="Slide 5" className="w-full h-auto" /></div>
                            <div><img src={img6} alt="Slide 6" className="w-full h-auto" /></div>
                            <div><img src={img7} alt="Slide 7" className="w-full h-auto" /></div>
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
        </div>
    );
};

export default Announcement;