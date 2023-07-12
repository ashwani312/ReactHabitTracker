import './App.css';
import { HabitForm } from './componants/habitForm/HabitForm';
import { Habits } from './componants/habits/Habits';
import { Navbar } from './componants/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HabitForm />
      <Habits/>
    </div>
  );
}

export default App;
