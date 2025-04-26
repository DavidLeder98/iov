import './Ender.css';

const Ender = () => {
    const currentYear = new Date().getFullYear();

    return(
        <section className="ender">
            <div className="ender">
                <p className="ender-p">
                    Copyright &copy; {currentYear} by the Insitute of Oncology of Vojvodina.
                </p>
                <p className="ender-p">
                    All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Ender;