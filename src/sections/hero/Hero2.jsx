import './Hero2.css';
import hero from '../../assets/structural/hero1.jpg';
import hospital from '../../assets/svgs/hospital.svg';
import micro from '../../assets/svgs/micro.svg';
import calendar from '../../assets/svgs/calendar.svg';
import clock from '../../assets/svgs/clock.svg';
import document from '../../assets/svgs/document.svg';

const Hero2 = () => {
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
                        <p className="hes-p">Dijagnostičke usluge se mogu već zakazati i elektronskim putem!</p>
                        <div className="hes-bottom"></div>
                    </div>
                    <div className="he-section hes-2">
                        <div className="hes-img-cont">
                            <img src={clock} alt="O Institutu" className="hes-img" />
                        </div>
                        <h3 className="hes-h3">Radno vreme</h3>
                        <p className="hes-p">Saznajte više o radnom vremenu naših ambulanti i lekara.</p>
                        <div className="hes-bottom"></div>
                    </div>
                    <div className="he-section hes-3">
                        <div className="hes-img-cont">
                            <img src={micro} alt="Broba protiv raka" className="hes-img" />
                        </div>
                        <h3 className="hes-h3">Registar za rak</h3>
                        <p className="hes-p">Saznajte više o trendovima i epidemiologiji raka u Vojvodini.</p>
                        <div className="hes-bottom"></div>
                    </div>
                    <div className="he-section hes-4">
                        <div className="hes-img-cont">
                            <img src={hospital} alt="O Institutu" className="hes-img" />
                        </div>
                        <div className="hes-text">
                            <h3 className="hes-h3">O Institutu</h3>
                            <p className="hes-p">Saznajte više o našim delatnostima, projektima i istoriji.</p>
                        </div>
                        <div className="hes-bottom"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;