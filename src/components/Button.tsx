export function Button({ children }: { children }) {
    return(
         <button className="bg-violet-600 hover:bg-violet-400
         transition-colors rounded px-2 py-1
          disabled:cursor-not-allowed">{children}</button> 
    )
}