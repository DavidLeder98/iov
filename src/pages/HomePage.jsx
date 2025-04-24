import Footer from '../sections/footer/Footer';
import Hero2 from '../sections/hero/Hero2';
import Map from '../sections/map/Map';
import BackTopBtn from '../buttons/back_top/BackTopBtn';

const HomePage = () => {
    return(
        <main>
            <Hero2 />
            <Map />
            <BackTopBtn />
            <Footer />
        </main>
    )
}

export default HomePage;