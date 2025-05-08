import { useState } from 'react';
import './Questions.css';
import check from '../../assets/svgs/message/check.svg';
import edit from '../../assets/svgs/message/edit.svg';
import questionmark from '../../assets/svgs/message/questionmark.svg';
import check2 from '../../assets/svgs/message/check_white.svg';
import edit2 from '../../assets/svgs/message/edit_white.svg';
import questionmark2 from '../../assets/svgs/message/questionmark_white.svg';
import MessageFormQuestion from './MessageFormQuestion';
import MessageFormComment from './MessageFormComment';

const Questions = () => {
    const [active, setActive] = useState('question');

    return (
        <div className="questions">
            <div className="q-top">
                <h4
                    className={`qh4-2 ${active === 'question' ? 'active' : ''}`}
                    onClick={() => setActive('question')}
                >
                    <div className="q-img-cont">
                        <img src={questionmark} alt="" className="q-img q-img-24" />
                        <img src={questionmark2} alt="" className="q-img-white q-img-24" />
                    </div>
                    Pitanje
                </h4>
                <h4
                    className={`qh4-1 ${active === 'comment' ? 'active' : ''}`}
                    onClick={() => setActive('comment')}
                >
                    <div className="q-img-cont">
                        <img src={edit} alt="" className="q-img q-img-20" />
                        <img src={edit2} alt="" className="q-img-white q-img-20" />
                    </div>
                    Komentar
                </h4>
                <h4
                    className={`qh4-3 ${active === 'anketa' ? 'active' : ''}`}
                    onClick={() => setActive('anketa')}
                >
                    <div className="q-img-cont">
                        <img src={check} alt="" className="q-img q-img-20" />
                        <img src={check2} alt="" className="q-img-white q-img-20" />
                    </div>
                    Anketa
                </h4>
            </div>
            <div className="q-bot">
                {active === 'question' && (
                    <div className="q-form-container">
                        <MessageFormQuestion />
                    </div>
                )}
                {active === 'comment' && (
                    <div className="q-form-container">
                        <MessageFormComment />
                    </div>
                )}
                {active === 'anketa' && (
                    <div className="q-form-container">
                        U izradi
                    </div>
                )}
            </div>
        </div>
    )
}

export default Questions;
