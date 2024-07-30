import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { setName, setPhone, setAgreed } from '../redux/slices/formSlice';

export function Form() {
    // const dispatch = useDispatch();
    // const { name, phone, agreed } = useSelector((state: any) => state.form);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log({ name, phone, agreed });
    };

    return (
        <form id="form" onSubmit={handleSubmit}>
            <h2>Отправь форму</h2>
            <input
                type="text"
                // value={name}
                // onChange={(e) => dispatch(setName(e.target.value))}
                placeholder="Имя"
            />
            <input
                type="tel"
                // value={phone}
                // onChange={(e) => dispatch(setPhone(e.target.value))}
                placeholder="Телефон"
            />
            <label>
                <input
                    type="checkbox"
                // checked={agreed}
                //   onChange={(e) => dispatch(setAgreed(e.target.checked))}
                />
                Согласен, отказуюсь
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
};
