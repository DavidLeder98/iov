import './MessageForm.css';
import send from '../../assets/svgs/message/send.svg';

const MessageFormComment = () => {
    return (
        <form className="message-form">

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
                <label htmlFor="question">Komentar</label>
                <textarea
                    className="mf-textarea"
                    id="question"
                    name="question"
                    placeholder="Vaše mišljenje, predlog ili komentar ..."
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

export default MessageFormComment;