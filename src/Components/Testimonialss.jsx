// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import RegistrationForm from '../Components/Admin/ChangeItems/Addtestimonials';
// const TestimonialsSection = () => {
//     const [alumni, setAlumni] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     useEffect(() => {
//         axios.get('https://placement-internship-tracker-backend.vercel.app/api/')
//             .then(response => {
//                 const data = response.data;
//                 setAlumni(data.alumni);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);
//     const addTestimonial = (newAlumni) => {
//         setAlumni([...alumni, newAlumni]);
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     return (
//         <section className="bg-white dark:bg-gray-900">
//             <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
//                 <div className="mx-auto max-w-screen-sm">
//                     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
//                     <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
//                 </div>
//                 {/* <div className="grid mb-8 lg:mb-12 lg:grid-cols-2"> */}
//                 <div >
//                     {alumni.map((alumnus, index) => (
//                         <figure key={index} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b-4 border-opacity-50 border-gray-800 md:p-12  lg:border-opacity-50 lg:border-gray-800 dark:bg-gray-800 dark:border-gray-700">
//                             <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
//                                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Passout Batch Of {alumnus.yearOfPassout}</h3>
//                                 <p className="my-4">{alumnus.testimonial}</p>
//                             </blockquote>
//                             <figcaption className="flex justify-center items-center space-x-3">
//                                 {/* <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile" />
//                                  */}
//                                  <img className="w-9 h-9 rounded-full" src={alumnus.image} alt="profile" />
//                                 <div className="space-y-0.5 font-medium dark:text-white text-left">
//                                     <div>{alumnus.name}</div>
//                                     <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at {alumnus.company}</div>
//                                 </div>
//                             </figcaption>
//                         </figure>
//                     ))}
//                 </div>
//                 <div className="text-center">
//                     <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
//                 </div>
//                 {showForm && <RegistrationForm addTestimonial={addTestimonial} closeForm={toggleForm} />}
//             </div>
//         </section>
//     );
// }

// export default TestimonialsSection;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from '../Components/Admin/ChangeItems/Addtestimonials';

const TestimonialsSection = () => {
    const [alumni, setAlumni] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        axios.get('https://placement-internship-tracker-backend.vercel.app/api/')
            .then(response => {
                const data = response.data;
                setAlumni(data.alumni);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const addTestimonial = (newAlumni) => {
        setAlumni([...alumni, newAlumni]);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6" id='testimonials-section'>
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div>
                    {alumni.map((alumnus, index) => (
                        <figure key={index} className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b-4 border-opacity-50 border-gray-800 md:p-12  lg:border-opacity-50 lg:border-gray-800 dark:bg-gray-800 dark:border-gray-700 ${!expanded && index > 2 ? 'hidden' : ''}`}>
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Passout Batch Of {alumnus.yearOfPassout}</h3>
                                <p className="my-4">{alumnus.testimonial}</p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src={alumnus.image} alt="profile" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>{alumnus.name}</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at {alumnus.company}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <div className="text-center">
                    <button onClick={toggleExpand} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        {expanded ? "Show less" : "Show more..."}
                    </button>
                </div>
                {showForm && <RegistrationForm addTestimonial={addTestimonial} closeForm={toggleForm} />}
            </div>
        </section>
    );
}

export default TestimonialsSection;
