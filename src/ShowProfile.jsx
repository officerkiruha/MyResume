import React from 'react';
import { translations } from './translations';

function ShowProfile({ lang }) {
    const t = translations[lang].aboutMe;
    if (!t) return null;

    return (
        <div className="profile-wrapper">
            <p>{t.p1}</p>
            <br />
            <p>{t.p2}</p>
            <br />
            <p>{t.p3}</p>
        </div>
    );
}

export default ShowProfile;