import './habit.css';
import { useDispatch } from 'react-redux';
import { deleteTheHabit, habitStatusDone, habitStatusPending, habitStatusUndone } from '../../redux/habitReducer';

export const Habit = ({ habit, habitKey }) => {
  const dispatch = useDispatch();//useDispatch from redux
  const newDate = new Date();
  const today = newDate.getDate();

  // -------------------handle status done----------------
  const handleStatusDone = (habitDate, dayId) => {
    localStorage.setItem(`id`, habit.habitId);
    if (habitDate > today) {
      alert("you can not change your future habit status");
      return;
    }
    dispatch(habitStatusDone(dayId))
  }

  // ------------------handle status undone------------------
  const handleStatusUnDone = (habitDate, dayId) => {
    localStorage.setItem(`id`, habit.habitId);
    if (habitDate > today) {
      alert("you can not change your future habit status");
      return;
    }
    dispatch(habitStatusUndone(dayId))
  }

  // ------------------handle status pending----------------
  const handleStatusPending = (habitDate, dayId) => {
    localStorage.setItem(`id`, habit.habitId);
    if (habitDate > today) {
      alert("you can not change your future habit status");
      return;
    }
    dispatch(habitStatusPending(dayId))
  }

  // ------------------handle habit delete----------------
  const handleHabitDelete = (id) => {
    console.log(id);
    dispatch(deleteTheHabit(id))
  }
  return (
    <div className='habit'>
      <div className="habitContainer">
        {/* -----------habit Name----------- */}
        <h1 className='habitname'>{habit.habitName}</h1>
        <ul className='habitul'>
          {habit.habitWeek.map((ele, index) => {
            return (<li className='habitlist' key={ele.id}>
              <h4 className='habitDay'>{(ele.day)}</h4>
              <h4 className='habitDate'>{ele.date + "/" + ele.month + "/" + ele.year}</h4>
              <div className="buttons">
                <i className={ele.status === true ? "fa-solid fa-circle-check circle-icon activedone" : "fa-solid fa-circle-check circle-icon"}
                  onClick={() =>
                    handleStatusDone(ele.date, index)
                  }></i>
                <i className={ele.status === false ? "fa-solid fa-circle-xmark circle-icon activeundone" : "fa-solid fa-circle-xmark circle-icon"}
                  onClick={() => handleStatusUnDone(ele.date, index)}></i>
                <i className={ele.status === "" ? "fa-solid fa-circle-minus circle-icon active" : "fa-solid fa-circle-minus circle-icon"}
                  onClick={() => handleStatusPending(ele.date, index)}></i>
              </div>
            </li>)
          })}
          {/* -----------------delete button--------------- */}
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="" className="deletebutton"
            onClick={() => handleHabitDelete(habit.habitId)}
          />
        </ul>
      </div>
    </div>
  )
}
