import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import emailjs from '@emailjs/browser'

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
}

const projectTypes = ['Business Website', 'Landing Page', 'eCommerce', 'Website Redesign', 'Other']
const budgets = ['Under ₹15,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹3,00,000', '₹3,00,000+']
const timelines = ['ASAP', 'Within 1 month', '1–3 months', 'Flexible']

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.projectType) errors.projectType = 'Please select a project type.'
  if (!form.description.trim()) errors.description = 'Tell me a little about the project.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')

    try { 
        await emailjs.send(
        'service_o8d12po',
        'template_now2zk5',
        form,
        {
        publicKey: 'ksARUAPPx71zym1Rh',
        }
        )
      
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-transparent border border-ink-line px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus-visible:border-brass transition-colors duration-300'
  const labelClasses = 'block text-xs font-mono uppercase tracking-wide text-bone-muted mb-2'
  const errorClasses = 'mt-1.5 text-xs text-red-400 flex items-center gap-1.5'

  return (
    <section id="contact" className="container-editorial py-24 md:py-32 scroll-mt-20">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell me about the project."
            description="Fill in a few details and I'll reply within one business day with next steps — or if it's a better fit for someone else, I'll say so."
          />

          <div className="mt-10 space-y-3">
            <a
              href="mailto:karthikcodes2@gmail.com"
              className="flex items-center gap-2 text-sm text-bone hover:text-brass transition-colors"
            >
              <Mail size={15} /> karthikcodes2@gmail.com
            </a>
            <p className="text-sm text-bone-muted">Based in Chennai,Tamilnadu · Working with clients across India</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className={errorClasses}>
                  <AlertCircle size={13} /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className={errorClasses}>
                  <AlertCircle size={13} /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>
              Company <span className="normal-case text-bone-muted/70">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="projectType" className={labelClasses}>
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
              >
                <option value="">Select</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p id="projectType-error" className={errorClasses}>
                  <AlertCircle size={13} /> {errors.projectType}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className={labelClasses}>
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className={labelClasses}>
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className={labelClasses}>
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={form.description}
              onChange={handleChange}
              className={inputClasses}
              aria-invalid={Boolean(errors.description)}
              aria-describedby={errors.description ? 'description-error' : undefined}
            />
            {errors.description && (
              <p id="description-error" className={errorClasses}>
                <AlertCircle size={13} /> {errors.description}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brass text-ink px-8 py-3.5 text-sm tracking-wide hover:bg-brass-bright transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
            {status === 'submitting' ? 'Sending…' : 'Send Project Inquiry'}
          </button>

          <div role="status" aria-live="polite">
            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-brass-bright">
                <CheckCircle2 size={16} /> Thanks — I'll reply within one business day.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} /> Something went wrong. Please email me directly instead.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
