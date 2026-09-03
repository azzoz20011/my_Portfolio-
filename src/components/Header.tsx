import { Button } from "./Button"
export  function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <span className="text-sm text-zinc-400">1 /1 done</span>
      </div>
      <div className="flex items-center gap-3">
        <Button>prev</Button>
        <Button>next</Button>
      </div>
    </header>
  )
}