import React, { useState } from 'react'
import './habiform.css';
import { useDispatch } from 'react-redux';
import { addTheHabits } from '../../redux/habitReducer';
export const HabitForm = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");

    // ------------If form submit than this function executes------------
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputText.length <= 1){
            return;
        }
        dispatch(addTheHabits(inputText));
        setInputText("");
    }
    return (
        <div className='habitForm'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" autoFocus className='habitFormInput' placeholder='Enter your Habit name...' value={inputText}
                            onChange={(e) => {
                                setInputText(e.target.value);
                            }} />
                    </div>
                    <button type="submit"
                    >Add</button>
                </form>
            </div>
        </div>
    )
}
