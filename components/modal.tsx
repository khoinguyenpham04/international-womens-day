"use client"

import Link from "next/link"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  recipient: string
}

export default function Modal({ isOpen, onClose, recipient }: ModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 w-[90%] max-w-md">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          ✕
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Happy Women's Day!</h2>

          <div className="text-left mb-6">
            <p className="mb-4">Gửi mẹ,</p>
            <p className="mb-4">
              Nhân dịp đặc biệt này, con mong mẹ yêu của con trẻ đẹp hơn, kiếm được hơn 2 tỷ VND trong năm nay và có sức
              khoẻ dồi dào hihi.{" "}
            </p>
            <p className="mb-4">
              Cảm ơn mẹ yêu vì đã cố gắng hết sức để giúp gia đình mình phát triển và vững chắc được như ngày hôm nay.
            </p>
          </div>

          <div className="text-right mb-8">
            <p>Con cả yêu của mẹ,</p>
            <p className="font-bold">Phạm Trần Khôi Nguyên</p>
          </div>

          <Link
            href="/flowers"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Mẹ hãy ấn vào đây để nhận hoa của con nhé hihi 💐
          </Link>
        </div>
      </div>
    </>
  )
}

