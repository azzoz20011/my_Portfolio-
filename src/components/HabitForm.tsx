import { Button } from "./Button";

export function HabitForm() {
    return(
        <form className="flex gap-4">
            <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 
            outline-none focus-visible:ring-2
           focus-visible:ring-violet-500" placeholder="Habit name.." />
            <Button>Add Habit</Button>
        </form>
    )
}