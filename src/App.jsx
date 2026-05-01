import React, { useState, useEffect } from 'react';
import ShowProfile from './ShowProfile';
import MyProjects from './MyProjects';
import MyContacts from './MyContacts';
import { translations } from './translations';
import './index.css';

function App() {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    const t = translations[lang];

    if (!t) return null;

    return (
        <div className="app-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">{t.nav.home}</a></li>
                    <li><a href="#about">{t.nav.about}</a></li>
                    <li><a href="#work">{t.nav.work}</a></li>
                    <li><a href="#contact">{t.nav.contact}</a></li>
                </ul>

                <div className="lang-switcher">
                    <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
                    <button className={lang === 'he' ? 'active' : ''} onClick={() => setLang('he')}>HE</button>
                    <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>RU</button>
                </div>
            </nav>

            <main>
                <section id="home" className="hero-section">
                    <div className="hero-content">
                        <h1 className="main-title">
                            {t.hero.title1} <span>{t.hero.title2}</span>
                        </h1>

                        <p className="welcome-text">{t.hero.welcome}</p>

                        <div className="hero-description">
                            <p dangerouslySetInnerHTML={{ __html: t.hero.description }}></p>
                        </div>

                        <div className="hero-buttons">
                            <a href="#work" className="primary-btn">{t.hero.btnWork}</a>
                            <a href="#contact" className="secondary-btn">{t.hero.btnContact}</a>
                        </div>
                    </div>
                </section>

                <section id="about" className="section-container">
                    <h2 className="section-heading">{t.sections.about}</h2>
                    <ShowProfile lang={lang} />
                </section>

                <section id="work" className="section-container">
                    <h2 className="section-heading">{t.sections.work}</h2>
                    <MyProjects lang={lang} />
                </section>

                <section id="contact" className="section-container">
                    <h2 className="section-heading">{t.sections.contact}</h2>
                    <MyContacts lang={lang} />
                </section>
            </main>
        </div>
    );
}

export default App;