interface ProgressBarProps {
    progress: number
  }
  
  export default function ProgressBar({ progress }: ProgressBarProps) {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    )
  }