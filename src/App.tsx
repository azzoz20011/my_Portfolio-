import { Button } from "./components/Button";
import { Header } from "./components/Header";


export default function App() {
return(
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header></Header>
    <HabitForm />
  </div>
)
} 

function HabitForm() {  
  return (
    <Button >New Habit</Button>
    )
  }