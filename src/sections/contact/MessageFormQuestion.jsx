import './MessageForm.css';

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
            <div className="mf-btn-cont">
                <button className="mf-btn" type="submit">Pošalji</button>
            </div>
        </form>
    );
}

export default MessageFormQuestion;