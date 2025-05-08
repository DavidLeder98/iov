import './MessageForm.css';
import send from '../../assets/svgs/message/send.svg';

const MessageFormQuestion = () => {
    return (
        <form className="message-form">
            <div className="mf-form-group">
                <label htmlFor="name">Ime i Prezime</label>
                <input
                    className="mf-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Vaše ime i prezime ..."
                    required
                />
            </div>

            <div className="mf-form-group">
                <label htmlFor="email">E-mail</label>
                <input
                    className="mf-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Vaša e-mail adresa ..."
                    required
                />
            </div>

            <div className="mf-form-group">
                <label htmlFor="question">Pitanje</label>
                <textarea
                    className="mf-textarea"
                    id="question"
                    name="question"
                    placeholder="Vaše pitanje ..."
                    rows="4"
                    required
                ></textarea>
            </div>
            <button className="mf-btn" type="submit">
                <img src={send} alt="send the message" className="message-send" />
                Pošalji
            </button>
        </form>
    );
}

export default MessageFormQuestion;