import { Button } from "./Button";
import { useState, type SubmitEvent} from "react";


type HabitFormProps ={
    addHabit:  (name:string) => void
}


export function HabitForm({ addHabit }: HabitFormProps) {
    const [name, SetName] = useState("")

    function handleSubmit(e: SubmitEvent){
        e.preventDefault()

        if (name.trim() === "")return
        SetName("")
        addHabit(name)
    }
    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <input 
             value={name}
             onChange={e =>SetName(e.target.value)}
             className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 
            outline-none focus-visible:ring-2
           focus-visible:ring-violet-500" placeholder="Habit name.." />
            <Button disabled={name.trim() === ""} >Add Habit</Button>
        </form>
    )
}