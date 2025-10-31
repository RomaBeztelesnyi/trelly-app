function ClearButton({ onClick }: { onClick: () => void }) {
    return (
    <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => {onClick}}
      >
        Reset Task
      </button>
    )
}

export default ClearButton