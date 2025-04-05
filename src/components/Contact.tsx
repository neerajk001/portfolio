import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export function Contact() {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsSent(true);
      setLoading(false);
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email send error:', error);
      setLoading(false);
    });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 cyberpunk-text text-center">
          Initialize Connection
        </h2>
        <div className="terminal-box p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full bg-black/30 border border-purple-500/30 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full bg-black/30 border border-purple-500/30 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full bg-black/30 border border-purple-500/30 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition-colors duration-200"
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
            {isSent && <p className="text-green-400 mt-4">Message sent successfully! 🚀</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
