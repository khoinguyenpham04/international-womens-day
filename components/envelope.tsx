"use client"

import { useState, useEffect } from "react"
import Letter from "./letter"
import Modal from "./modal"

interface EnvelopeProps {
  recipient: string
  message: string
}

export default function Envelope({ recipient, message }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Handle the animation sequence and modal timing
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isOpen) {
      // Wait for the envelope animation to complete before showing the modal
      timer = setTimeout(() => {
        setShowModal(true)
      }, 2000) // 2 second delay after envelope opens
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen])

  const toggleEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setShowModal(false)
      setIsOpen(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div
        className={`envelope-wrapper bg-bg-envelope-color shadow-lg ${isOpen ? "flap" : ""}`}
        onClick={toggleEnvelope}
      >
        <div className="envelope relative w-[300px] h-[230px]">
          <div className="letter absolute right-[20%] bottom-0 w-[54%] h-[80%] bg-primary text-center shadow-md p-[20px_10px] transition-all duration-1000 ease-in-out rounded-lg">
            <Letter recipient={recipient} message={message} />
          </div>
        </div>
        <div className="heart"></div>
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal} recipient={recipient} />
    </>
  )
}

