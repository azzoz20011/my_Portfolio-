export function HabitList() {
    const habits = [
        { id: 1, name: "Exercise" },
        { id: 2, name: "Read" },
        { id: 3, name: "Meditate" }
    ]

    if (habits.length === 0) {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-zinc-400">No habits yet</span>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-2">
            {habits.map(habit => {
                return (
                    <div  className="flex items-center gap-2">
                        <Habititem key={habit.id} habit={habit} />
                    </div>
                )
            })}
        </div>
    )
}

type HabitItemProps = {
    habit: {
        id: number
        name: string
    }
}

function Habititem ({habit}: HabitItemProps) {
    return (
        <div className="rounded-x1 bg-zinc-800 p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">{habit.name}</h2>
            </div>
        </div>  
    )
}