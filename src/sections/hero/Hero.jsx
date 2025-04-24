import './Hero.css';
import hero from '../../assets/structural/hero1.avif';
import hospital from '../../assets/svgs/hospital.svg';
import micro from '../../assets/svgs/micro.svg';
import calendar from '../../assets/svgs/calendar.svg';

const Hero = () => {
    return(
        <section className="hero">
            <img src={hero} alt="Institut za onkologiju vojvodine" className="hero-img" />
            <div className="hero-essence-positioner">
                <h1 id="hero-heading" className="visually-hidden">Institut za onkologiju vojvodine</h1>
                <div className="hero-essence">
                    <div className="he-section hes-1">
                        <div className="hes-img-cont">
                            <img src={calendar} alt="Zakazivanje" className="hes-img" />
                        </div>
                        <h3 className="hes-h3">Zakazivanje</h3>
                        <p className="hes-p">
                            U proteklom periodu došlo je do izmene u načinu zakazivanja specijalističko-konsultativnih pregleda u zdravstvenom sistemu Republike Srbije.
                        </p>
                        <button className="hes-btn">Saznaj više</button>
                    </div>
                    <div className="he-section hes-2">
                        <div className="hes-img-cont">
                            <img src={hospital} alt="O Institutu" className="hes-img" />
                        </div>
                        <h3 className="hes-h3">O Institutu</h3>
                        <p className="hes-p">
                            Pročitajte najvažnije informacije o Institutu: organizaciji, misiji, viziji, izvodu iz kućnog reda, upravi, delatnosti i koje bolesti lečimo.
                        </p>
                        <button className="hes-btn">Saznaj više</button>
                    </div>
                    <div className="he-section hes-3">
                        <div className="hes-img-cont">
                            <img src={micro} alt="Broba protiv raka" className="hes-img" />
                        </div>
                        <h3 className="hes-h3">Borba protiv raka</h3>
                        <p className="hes-p">
                            Rak nije bolest koja ima jednog poznatog uzročnika, već kompleksno oboljenje čiji su uzročnici nepoznati. Poznati su samo faktori rizika koji doprinose njegovom nastanku.
                        </p>
                        <button className="hes-btn">Saznaj više</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;