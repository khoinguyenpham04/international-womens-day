import Envelope from "@/components/envelope"
import Snowfall from "@/components/snowfall"
import { MESSAGES, RECIPIENTS } from "@/lib/constants"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg-color relative overflow-hidden px-4">
      <Snowfall />
      <div className="container flex flex-col items-center justify-center h-screen relative z-10">
        <div className="mb-4">
          <Envelope recipient={RECIPIENTS.mom} message={MESSAGES.mom} />
        </div>
        <p className="text-center text-pink-800 font-medium animate-pulse px-4 max-w-xs mx-auto">
          Mẹ ấn vào trái tim để mở lá thư nhé !
        </p>
      </div>
    </main>
  )
}

