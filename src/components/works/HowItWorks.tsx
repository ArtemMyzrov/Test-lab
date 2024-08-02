import './style.css'
export function HowItWorks() {
    return (
        <section id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>Как это работает</h2>
                </div>
                <div className="steps">
                    <div className="step">
                        <img src="/waiting.svg" alt="waiting" className="step-image" />
                        <div>
                            <h3>Прочитай задание внимательно</h3>
                            <span>Думаю у тебя не займет это больше <br />двух-трех минут</span>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/delivery-truck.svg" alt="delivery-truck" className="step-image" />
                        <div>
                            <h3>Изучи весь макет заранее</h3>
                            <span>Подумай как это будет работать на <br />разных разрешениях и при скролле</span>
                        </div>
                    </div>
                    <div className="step">
                        <img src="/secure.svg" alt="secure" className="step-image" />
                        <div>
                            <h3>Сделай хорошо</h3>
                            <span>Чтобы мы могли тебе доверить<br /> подобные задачи в будущем.</span>
                        </div>
                    </div>
                    <div className="step">
                        <img style={{ width: '72px' }} src="/money-bags.svg" alt="money-bags" className="step-image" />
                        <div>
                            <h3>Получай предложение</h3>
                            <span>Ну тут все просто, не я придумал <br />правила, но думаю так и будет )))</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
