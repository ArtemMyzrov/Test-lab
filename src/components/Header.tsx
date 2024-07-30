import React from 'react';
import '../App.css'; // Импортируйте CSS файл

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <nav>
                    <div className="logo">  <span>testLab</span></div>
                    <ul>
                        <li><a href="#how-it-works">Как это работает</a></li>
                        <li><a href="#testimonials">3-й блок</a></li>
                        <li><a href="#faq">Вопросы и ответы</a></li>
                        <li><a href="#form">Форма</a></li>
                    </ul>
                </nav>
                <div className="hero">
                    <h1>Говорят, никогда не поздно<br></br>сменить профессию</h1>
                    <p>Сделай крутое тестовое задание и у тебя получится</p>
                    <button>Проще простого!</button>
                </div>
            </div>
        </header>
    );
}