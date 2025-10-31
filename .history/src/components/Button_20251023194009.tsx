function ClearButton({setCheckTask}: {setCheckTask: React.Dispatch<React.SetStateAction<string | null>>}) {
    return (
    <button
        className="border-2 rounded-xl h-10 w-24"
        onClick={() => setCheckTask(null)}
      >
        Reset Task
      </button>)
}

export default ClearButton