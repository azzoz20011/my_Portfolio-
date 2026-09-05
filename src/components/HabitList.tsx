import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns"
import { Button } from "./Button"


 export type Habit = {
        id: string;
        name: string
    }
type habitlistProps = {
    habits: Habit[]
}



export function HabitList({habits}: habitlistProps) {



    if (habits.length === 0) {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-zinc-400">No habits yet</span>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => {
                return <Habititem key={habit.id} habits={[habit]} />
            })}
        </div>
    )
}
 
type HabitItemProps ={ 
  habits:Habit[]
}

function Habititem ({habits}: HabitItemProps) {
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), { weekStartsOn: 3 }),
        end: endOfWeek(new Date(),  { weekStartsOn: 3 }),
    })
    return (
  <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <span className="font-medium">{habits[0].name}</span>
        <span className="text-sm text-zinc-400">🔥 3</span>
      </div>

      <Button className="text-xs" variant="ghost">
        Delete
      </Button>
    </div>

    <div className="flex gap-1.5">
      {visibleDates.map(date => (
        <Button
          className="flex flex-1 flex-col text-s gap-0.5 rounded-lg"
          key={date.toISOString()}
          disabled={isFuture(date)}
        >
          <span className="font-medium">
            {format(date, "EEE")}
          </span>
          <span>
            {format(date, "d")}
          </span>
        </Button>
      ))}
    </div>
  </div>
)
}  