'use client'

import { useState, useEffect } from 'react'
import { Check, Facebook, Instagram, Send } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    const [question, setQuestion] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (question.trim()) {
            setIsSubmitted(true)
            setTimeout(() => {
                setIsSubmitted(false)
                setQuestion('')
            }, 2000)
        }
    }

    return (
        <div className="font-sans bg-gray-100 p-6">
            {/* Payment Mode Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h2 className="text-lg font-semibold mb-4">Payment Mode</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                        <Check className="text-green-500 mr-2" size={20} />
                        <span>Deposit to Account</span>
                    </div>
                    <div className="flex items-center">
                        <Check className="text-green-500 mr-2" size={20} />
                        <span>Net Banking</span>
                    </div>
                    <div className="flex items-center">
                        <Check className="text-green-500 mr-2" size={20} />
                        <span>Credit Card/Debit Card</span>
                    </div>
                    <div className="flex items-center">
                        <Check className="text-green-500 mr-2" size={20} />
                        <span>UPI</span>
                    </div>
                    <div className="flex items-center">
                        <Check className="text-green-500 mr-2" size={20} />
                        <span>Wallets (PayTM/PhonePe/Amazon etc.)</span>
                    </div>
                </div>
            </div>

            {/* Question Box */}
            <div className="bg-yellow-100 rounded-lg p-6 relative">
                <h2 className="text-lg font-semibold mb-2">Have a question about Tyres?</h2>
                <p className="text-sm text-gray-600 mb-4">Get an answer in 24 hours from our experts.</p>
                <div className="relative">
                    {isSubmitted ? (
                        <div className="w-full py-2 px-4 rounded-full bg-green-100 text-green-800">
                            Thank you for asking a question, we will review and provide you an expert answer.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Ask or search your question"
                                    className="w-full py-2 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                />
                                {question.trim() && (
                                    <button
                                        type='submit'
                                        className="bg-yellow-400 text-yellow-900 rounded-r-full px-4 py-2 flex items-center"
                                    >
                                        Ask <Send className="ml-2 w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </form>

                    )}
                </div>
                <div className="absolute right-6 bottom-20">
                    <Image
                        width={1000}
                        height={1000}
                        src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
                        alt="Question mark icon"
                        className="w-14 h-14"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="text-sm text-gray-600 space-y-4 bg-white p-2">
                <Image width={1000} height={1000} src={"https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png"} alt='TyrePlex' className='h-8 w-auto' />

                <div className="md:flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <Facebook className="w-6 h-6 mx-1" />
                        <Instagram className="w-6 h-6 mx-1" />
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Who We Are</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                    </div>
                </div>
                <div className="md:flex justify-between items-center">
                    <div>
                        <a href="#" className="hover:underline">Are you a Tyre Dealer?</a>
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Terms of use</a>
                        <a href="#" className="hover:underline">Career</a>
                        <a href="#" className="hover:underline">Shipping & Return Policy</a>
                    </div>
                </div>
                <div className="text-center mt-4 text-xs">
                    ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}