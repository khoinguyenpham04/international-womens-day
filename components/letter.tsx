interface LetterProps {
  recipient: string
  message: string
}

export default function Letter({ recipient, message }: LetterProps) {
  return (
    <div className="text font-sans text-txt-color text-left text-sm">
      <strong>Dear {recipient},</strong>
      <p>{message}</p>
    </div>
  )
}

