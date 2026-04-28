'use client'
import { useState } from 'react'

export default function EnquireModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  if (!isOpen) return null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ×
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-1">Enquire Now</h2>
        <p className="text-sm text-gray-500 mb-5">Our team will get back to you within 24 hours.</p>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-lg font-semibold text-gray-800">Thank you!</p>
            <p className="text-gray-500 text-sm mt-1">We'll be in touch soon.</p>
            <button onClick={onClose} className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input
              name="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone *"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
            <input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 resize-none"
            />
            {status === 'error' && (
              <p className="text-red-500 text-xs">Please fill in all required fields.</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
