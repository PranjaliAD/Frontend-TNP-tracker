import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import Modal from './Components/Modal/Modal'
import Programs from './Components/programs/programs'
// import ImageGallery from './Components/ImageGallery/ImageGallery'
const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = 'OUR ACHIEVEMENTS' title='DREAM OFFERS' />
        <Programs />
      </div>
      <Modal />
      {/* <ImageGallery /> */}
    </div>
  )
}

export default App