import React from 'react';
import './habits.css';
import { useSelector } from 'react-redux';
import { Habit } from '../habit/Habit';

export const Habits = () => {

  // -----------useSelector from react-redux-------------
  const habitsSelector = useSelector((state)=>state["habits"]);


  return (
    <div className='habits'>
           {habitsSelector.map((habit)=>{
            return (<Habit habit={habit} key={habit.habitId} habitKey= {habit.habitId}/>)
           })}
    </div>
  )
}
