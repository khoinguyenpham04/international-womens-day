export default function Snowfall() {
  // Create an array of 50 snowballs with random properties
  const snowballs = Array.from({ length: 50 }).map((_, index) => {
    const size = Math.random() * 10 + 5 // Random size between 5px and 15px
    const initialLeft = Math.random() * 100 // Random horizontal position
    const animationDuration = Math.random() * 10 + 10 // Random duration between 10s and 20s
    const animationDelay = Math.random() * 10 // Random delay up to 10s

    return (
      <div
        key={index}
        className="snowball absolute rounded-full bg-white opacity-70"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${initialLeft}%`,
          top: "-20px",
          animation: `snowfall ${animationDuration}s linear ${animationDelay}s infinite`,
          filter: "blur(1px)",
        }}
      />
    )
  })

  return <div className="snowfall-container fixed inset-0 overflow-hidden pointer-events-none z-0">{snowballs}</div>
}

