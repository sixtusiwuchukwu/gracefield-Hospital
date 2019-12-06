import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/Home/css/plugins-css.css'
import '../../styles/Home/css/medical.css'
import '../../styles/Home/css/style.css'
import '../../styles/Home/css/typography.css'
import '../../styles/Home/css/responsive.css'
import '../../styles/Home/css/skins/skin-blue.css'
import '../../styles/Home/css/style-customizer.css'
import '../../styles/Home/css/slide.css'
import Slider from './Slider';
import Appointment from './Appointment';
import About from './About';
import Feature from './Feature';
import Doctors from './doctors';
import Specials from './specials';

const App = () => {
    return (
        <>
            <Header/>
            <Slider/>
            <Appointment/>
            <About/>
            <Feature/>
           
            <Footer/>
        </>
    );
}

export default App;
