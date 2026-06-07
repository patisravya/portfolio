'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/pati-sravya-ba02562ab', icon: '🔗' },
    { name: 'GitHub', href: 'https://github.com/patisravya', icon: '🐙' },
    { name: 'Email', href: 'mailto:patisravya@gmail.com', icon: '✉️' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
        <div className="h-1 w-12 bg-accent rounded-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm">
                  ✓ Thanks for your message! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m always excited to discuss new projects, internship opportunities, or collaborate on innovative ideas. Whether you have a question or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border/30 hover:border-accent/60 hover:bg-card/50 transition-colors"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-sm font-medium text-foreground">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-3 border-t border-border/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Email:</strong> patisravya@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Phone:</strong> +91 7780251267
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Location:</strong> Hanamkonda, Telangana, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
