import './App.css';
import { HabitForm } from './componants/habitForm/HabitForm';
import { Habits } from './componants/habits/Habits';
import { Navbar } from './componants/navbar/Navbar';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/addhabit' element={<HabitForm />} />
        <Route path='/' element={<Habits/>}/>
      </Routes>
    </div>
  );
}

export default App;
