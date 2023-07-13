import './navbar.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <h2 className="logo">HabitTracker</h2>
       <h2 className='date'>{(new Date()).toDateString()}</h2>
       <Link to="/addHabit">
        <button className='addhabit'>AddNewHabit</button>
       </Link>
      </div>
    </>
  )
}
