import './Map.css';

const Map = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7289.541221814272!2d19.8582055205571!3d45.21740501477938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b05501a0ee057%3A0xfeb9daade5fe2aae!2sOncology%20Institute%20of%20Vojvodina!5e0!3m2!1sen!2srs!4v1745102567503!5m2!1sen!2srs"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
