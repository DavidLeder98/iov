import './BackTopBtn.css';
import up2 from '../../assets/svgs/up-arrow-3.svg';

const BackTopBtn = () => {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return(
        <div className="back-top-btn-positioner">
            <div className="bt-btn" onClick={() => scrollToTop()}>
                <img src={up2} alt="up arrow" className="bt-btn-arrow" />
                <span className="bt-btn-text">Nazad na početak</span>
            </div>
        </div>
    )
}

export default BackTopBtn;