import { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import '../App.css';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const scrollToForm = () => {
        const element = document.getElementById('form');
        if (element) {
            element.scrollIntoView();
        }
    };
    return (
        <header className="header">
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
            <div className="header-content">
                <nav>
                    <div className="logo"><p>testLab</p></div>
                    <div
                        className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a href="#how-it-works">Как это работает</a></li>
                        <li><a href="#testimonials">3-й блок</a></li>
                        <li><a href="#faq">Вопросы и ответы</a></li>
                        <li><a href="#form">Форма</a></li>
                    </ul>
                </nav>
                <div className="hero">
                    <div>
                        <h1 className="hero-title">Говорят, никогда не поздно<br />сменить профессию</h1>
                        <p>Сделай крутое тестовое задание и у тебя получится</p>
                    </div>
                    <button className='hero-btn' onClick={scrollToForm}>Проще простого!</button>
                </div>
            </div>
        </header>
    );
}
