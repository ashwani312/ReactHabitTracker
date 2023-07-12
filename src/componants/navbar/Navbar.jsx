import './navbar.css';
export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <h2 className="logo">HabitTracker</h2>
       <h2 className='date'>{(new Date()).toDateString()}</h2>
      </div>
    </>
  )
}
