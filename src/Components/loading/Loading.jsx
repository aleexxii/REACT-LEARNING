import React from 'react'

const LoadingSpinner = (({ 
    size = 'md',
    text = 'Loading...',
    showText = true,
    color = 'blue'
  }) => {

    const sizeMap = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
      };
    
      // Color mappings
      const colorMap = {
        blue: 'border-blue-500',
        red: 'border-red-500',
        green: 'border-green-500',
        purple: 'border-purple-500',
        gray: 'border-gray-500'
      };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className={`${sizeMap[size]} animate-spin rounded-full border-2 border-t-transparent ${colorMap[color]}`} 
            role="status" 
            aria-label="loading">
          </div>
          {showText && (
            <span className="text-sm text-gray-600">
              {text}
            </span>
          )}
        </div>
      );
})

const Loading = () => {
  return (
    <div>
        <h3 className="text-lg font-medium mb-4">Large Green</h3>
        <LoadingSpinner 
          size="lg" 
          color="green" 
          text="Processing your request..." 
        />
      </div>
  )
}

export default Loading