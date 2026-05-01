import React from 'react';
import { translations } from './translations';

function MyContacts({ lang }) {
    const t = translations[lang].contactData;

    if (!t) return null;

    return (
        <div className="contact-wrapper">
            <p className="contact-text">{t.text}</p>

            <div className="contact-details">
                <p><strong>{t.phoneStr}</strong> 054-4507747</p>
                <p><strong>{t.emailStr}</strong> kirillkovalchukstudy@gmail.com</p>
            </div>

            <a href="mailto:kirillkovalchukstudy@gmail.com" className="contact-btn">
                {t.btnText}
            </a>
        </div>
    );
}

export default MyContacts;