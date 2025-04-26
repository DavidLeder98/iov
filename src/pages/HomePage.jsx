import Footer from '../sections/footer/Footer';
import Hero from '../sections/hero/Hero';
import Map from '../sections/map/Map';
import BackTopBtn from '../buttons/back_top/BackTopBtn';
import Heraldry from '../sections/heraldry/Heraldry';
import Ender from '../sections/ender/Ender';

const HomePage = () => {
    return(
        <main>
            <Hero />
            <Map />
            <BackTopBtn />
            <Footer />
            <Heraldry />
            <Ender />
        </main>
    )
}

export default HomePage;