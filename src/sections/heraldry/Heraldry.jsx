import './Heraldry.css';
import grb1 from '../../assets/svgs/footer/grb1.svg'
import grb2 from '../../assets/svgs/footer/grb2.svg'
import grb3 from '../../assets/svgs/footer/grb3.svg'

const Heraldry = () => {
    return(
        <section className="heraldry">
            <div className="heraldry-essence">
                <div className="grb-container">
                    <img src={grb1} alt="Coat of arms of Serbia" className="grb-1" />
                </div>
                <div className="grb-container">
                    <img src={grb2} alt="Coat of arms of Vojvodina" className="grb-2" />
                </div>
                <div className="grb-container">
                    <img src={grb3} alt="Coat of arms of Vojvodina" className="grb-3" />
                </div>
            </div>
        </section>
    )
}

export default Heraldry;