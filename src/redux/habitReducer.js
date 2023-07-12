import { createSlice } from "@reduxjs/toolkit";
let habitid = 0;

 const habitSlice = createSlice({
    name: "habits",
    initialState: [],
    reducers: {
        // -----------Add the new habit in store---------------
        addTheHabits: (state, action) => {
            const newDate = new Date();
            let sunday = newDate.getDate() - newDate.getDay();
            const habitMonth = newDate.getMonth();
            const habitYear = newDate.getFullYear();
            const newHabit = {
                habitId: habitid++,
                habitName: (action.payload).toUpperCase(),
                habitWeek: [
                    {
                        id: 0,
                        status: "",
                        day: "Sunday",
                        date: sunday,
                        month: habitMonth + 1,
                        year: habitYear

                    },
                    {
                        id: 1,
                        status: "",
                        day: "Monday",
                        date: sunday + 1,
                        month: habitMonth + 1,
                        year: habitYear

                    },
                    {
                        id: 2,
                        status: "",
                        day: "Tuesday",
                        date: sunday + 2,
                        month: habitMonth + 1,
                        year: habitYear

                    },
                    {
                        id: 3,
                        status: "",
                        day: "Wednesday",
                        date: sunday + 3,
                        month: habitMonth + 1,
                        year: habitYear

                    },
                    {
                        id: 4,
                        status: "",
                        day: "Thursday",
                        date: sunday + 4,
                        month: habitMonth + 1,
                        year: habitYear

                    },
                    {
                        id: 5,
                        status: "",
                        day: "Friday",
                        date: sunday + 5,
                        month: habitMonth + 1,
                        year: habitYear

                    },
                    {
                        id: 6,
                        status: "",
                        day: "Saturday",
                        date: sunday + 6,
                        month: habitMonth + 1,
                        year: habitYear

                    }
                ]
            };
            const allHabits = [...state, newHabit];
            return allHabits;
        },
        // ---------------handle status done for done the habit status--------------------
        habitStatusDone: (state, action) => {
            const tempHabit = state;
            for(let i=0; i<tempHabit.length; i++){
                console.log(tempHabit[i].habitId);
                if(tempHabit[i].habitId === Number(localStorage.getItem(`id`))){
                    tempHabit[i].habitWeek[action.payload].status = true;
                }              
            }
            return tempHabit;
        },
         // ---------------handle status done for Undone the habit status--------------------
        habitStatusUndone: (state, action) => {
            const tempHabit = state;
            for(let i=0; i<tempHabit.length; i++){
             
                if(tempHabit[i].habitId === Number(localStorage.getItem(`id`))){
                    tempHabit[i].habitWeek[action.payload].status = false;
                }
            }
            return tempHabit;
        },
         // ---------------handle status done for pending the habit status--------------------
        habitStatusPending: (state, action) => {
            const tempHabit = state;
            for(let i=0; i<tempHabit.length; i++){
                if(tempHabit[i].habitId === Number(localStorage.getItem(`id`))){
                    tempHabit[i].habitWeek[action.payload].status = "";
                }
            }
            return tempHabit;
        },
        // ---------------This is for deleting the habit-------------------
        deleteTheHabit: (state, action) => {
            const tempHabit = state.filter((habit) => habit.habitId !== action.payload);
            return tempHabit;
        }
    }
});

export const {addTheHabits, deleteTheHabit, habitStatusDone, habitStatusPending, habitStatusUndone} = habitSlice.actions;

export const habitReducer = habitSlice.reducer;

