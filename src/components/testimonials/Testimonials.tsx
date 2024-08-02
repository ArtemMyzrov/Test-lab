import { useState, useEffect } from 'react';
import './style.css';

interface Testimonial {
    name: string;
    location: string;
    text: string;
    img: string;
}

const testimonialsData: Testimonial[] = [
    {
        name: 'Михаил Павлович',
        location: 'Санкт-Петербург',
        text: `Каждый из нас понимает очевидную вещь: 
                перспективное планирование предоставляет 
                широкие возможности для анализа существующих 
                паттернов поведения. В своём стремлении 
                улучшить пользовательский опыт мы`,
        img: '/avatar-1.svg'
    },
    {
        name: 'Иван',
        location: 'Санкт-Петербург',
        text: `Каждый из нас понимает очевидную вещь: 
                перспективное планирование предоставляет 
                широкие возможности для анализа существующих 
                паттернов поведения. В своём стремлении 
                улучшить пользовательский опыт мы упускаем, 
                что активно развивающиеся страны третьего 
                мира призваны к ответу.`,
        img: '/avatar-2.svg'
    },
    {
        name: 'Артем Коренюков',
        location: 'Самара',
        text: `Каждый из нас понимает очевидную вещь: 
                перспективное планирование предоставляет 
                широкие возможности для анализа существующих 
                паттернов поведения.`,
        img: '/avatar-3.svg'
    },
    {
        name: 'Константин Михаил Павлович',
        location: 'Санкт-Петербург',
        text: `Каждый за меня понимает сомнению право 
                направлений.`,
        img: '/avatar-1.svg'
    },
    {
        name: 'Иванов',
        location: 'Санкт-Петербург',
        text: `Каждый за меня понимает сомнению право 
                направлений.`,
        img: '/avatar-2.svg'
    },
    {
        name: 'Коренюков',
        location: 'Самара',
        text: `Каждый за меня понимает сомнению право 
                направлений.`,
        img: '/avatar-3.svg'
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 375) {
                setItemsPerPage(1);
            } else if (window.innerWidth <= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        setCurrentIndex(0);
    }, [itemsPerPage]);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? Math.ceil(testimonialsData.length / itemsPerPage) - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === Math.ceil(testimonialsData.length / itemsPerPage) - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const startIndex = currentIndex * itemsPerPage;
    const currentTestimonials = testimonialsData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="testimonials">
            <div className='container'>
                <h2 className='h2'>Отзывы</h2>
                <div className="testimonials-container">
                    <div className="testimonials">
                        {currentTestimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className='avatar-wrap'>
                                    <img className='avatar' src={testimonial.img} alt={testimonial.name} />
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button className="arrow-button left" onClick={handlePrevClick}>
                            <img src="/arrow-slider.svg" alt="arrow" className="arrow-icon" />
                        </button>
                        {Array.from({ length: Math.ceil(testimonialsData.length / itemsPerPage) }).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                        <button className="arrow-button right" onClick={handleNextClick}>
                            <img src="/arrow-slider.svg" alt="arrow" className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
