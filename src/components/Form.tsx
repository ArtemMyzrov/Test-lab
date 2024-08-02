import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { setName, setPhone, setAgreed } from '../redux/formSlice';

export function Form() {
    const dispatch = useDispatch();
    const { name, phone, agreed } = useSelector((state: RootState) => state.form);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) {
            setError('Пожалуйста, согласитесь с условиями.');
            return;
        }
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone }),
            });
            if (!response.ok) {
                throw new Error('Ошибка сети или сервер не ответил');
            }
            const result = await response.json();
            setSuccessMessage('Форма успешно отправлена!');
        } catch (error: any) {
            setError('Что-то пошло не так.');
        }
    };

    useEffect(() => {

    }, [error, successMessage])

    return (
        <form id="form" onSubmit={handleSubmit}>
            <div className='container'></div>
            <h2>Отправь форму</h2>
            <div className='wrap-form'>
                <div className='wrap-input'>
                    <input
                        className='input'
                        type="text"
                        value={name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                        placeholder="Имя"
                    />
                    <input
                        className='input'
                        type="tel"
                        value={phone}
                        onChange={(e) => dispatch(setPhone(e.target.value))}
                        placeholder="Телефон"
                    />
                </div>
                <div className='wrap-check'>
                    <label>
                        <input
                            className='check'
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => dispatch(setAgreed(e.target.checked))}
                        />
                        <p>Согласен, отказываюсь</p>
                    </label>
                    <button className='form-btn' type="submit">Отправить</button>
                </div>
            </div>
            {error && <div className='error-message'>{error}</div>}
            {successMessage && <div className='success-message'>{successMessage}</div>}
        </form>
    );
}
