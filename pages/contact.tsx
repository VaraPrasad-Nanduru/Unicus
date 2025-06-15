import React, { useState, ChangeEvent, FormEvent } from 'react'
import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { FiMail, FiPhoneCall, FiCheckCircle, FiX } from 'react-icons/fi'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import LineDivider from 'components/atoms/LineDivider'

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSco57ETmn7ytxFZE2dJxOyPBPlRpyAWgndIK7lmJRehQctDMQ/formResponse'
// Replace the entry IDs below with your actual Google Form field entry IDs
const FIELD = {
  firstName: 'entry.149826871',
  lastName: 'entry.158221212',
  email: 'entry.1807883673',
  phone: 'entry.1071732371',
  organisation: 'entry.951485724',
  message: 'entry.1292028439',
}

interface ContactFormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  organisation: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

interface SnackbarState {
  show: boolean
  message: string
  type: 'success' | 'error'
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    show: false,
    message: '',
    type: 'success'
  })

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Phone validation (minimum 10 digits)
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // First Name validation
    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    } else if (form.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters'
    }

    // Last Name validation
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    } else if (form.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters'
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = 'Please tell us how we can help you'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handlePhoneChange = (value: string) => {
    setForm({ ...form, phone: value })
    
    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined })
    }
  }

  const showSnackbar = (message: string, type: 'success' | 'error') => {
    setSnackbar({ show: true, message, type })
    setTimeout(() => {
      setSnackbar({ show: false, message: '', type: 'success' })
    }, 5000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showSnackbar('Please fix the errors below', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append(FIELD.firstName, form.firstName)
      formData.append(FIELD.lastName, form.lastName)
      formData.append(FIELD.email, form.email)
      formData.append(FIELD.phone, form.phone)
      formData.append(FIELD.organisation, form.organisation)
      formData.append(FIELD.message, form.message)

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })

      // Reset form
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organisation: '',
        message: '',
      })

      showSnackbar('Thank you for contacting us! We will get back to you in 1-2 business days.', 'success')
    } catch (error) {
      showSnackbar('Something went wrong. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSnackbar = () => {
    setSnackbar({ show: false, message: '', type: 'success' })
  }

  return (
    <PageTemplate title="Contact - Unicus Core">
      {/* Snackbar */}
      {snackbar.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg max-w-md ${
            snackbar.type === 'success' 
              ? 'bg-green-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
            {snackbar.type === 'success' ? (
              <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <FiX className="w-5 h-5 flex-shrink-0" />
            )}
            <p className="text-sm font-medium">{snackbar.message}</p>
            <button 
              onClick={closeSnackbar}
              className="ml-2 hover:opacity-70 transition-opacity"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="Talk Innovation to Us"
            title="We're here to help. Reach out today - let's make something incredible together"
            description="Got a question, want to collaborate, or just exploring? We're here and happy to help!"
          />
        </div>
      </section>

      <LineDivider />

      <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-16 lg:grid-cols-2">
        {/* Contact Information */}
        <aside
          className="w-full sm:w-10/12 md:w-8/12 lg:w-full grid grid-cols-1 gap-8 place-items-center lg:place-items-start"
          data-aos="fade-up-right"
        >
          <div className="text-center lg:text-left">
            <PageSentence
              title="We'd love to hear from you - drop us a message now!"
              badge="CONTACT"
            />
          </div>
          <div className="space-y-6">
            <IconListItem
              label="Phone"
              value="+91 9036387160"
              icon={<FiPhoneCall />}
            />
            <IconListItem
              label="Email"
              value="support@unicuscore.com"
              icon={<FiMail />}
            />
          </div>
        </aside>

        {/* Contact Form */}
        <aside
          className="w-full sm:w-10/12 md:w-8/12 lg:w-full flex justify-center lg:justify-end"
          data-aos="fade-up-left"
        >
          <form
            className="w-full max-w-md bg-light rounded-lg p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <InputGroup
                  label="First Name *"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <InputGroup
                  label="Last Name *"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email & Organisation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <InputGroup
                  label="Business Email *"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <InputGroup
                  label="Organisation"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-2 text-white font-medium text-sm">
                Phone Number *
              </label>
              <PhoneInput
                country={'in'}
                value={form.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false,
                }}
                containerStyle={{ width: '100%' }}
                inputStyle={{
                  width: '100%',
                  height: '42px',
                  borderRadius: '6px',
                  border: errors.phone ? '1px solid #ef4444' : '1px solid #ddd',
                  paddingLeft: '48px',
                  fontSize: '14px',
                }}
                buttonStyle={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderRadius: '6px 0 0 6px',
                }}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <TextAreaGroup
                label="How can we help you? *"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, idea, or inquiry..."
                required
                rows={4}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              value={isSubmitting ? 'Sending...' : 'Send Message'}
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            />

            <p className="text-xs text-gray-400 text-center mt-3">
              * Required fields
            </p>
          </form>
        </aside>
      </section>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        
        @media (max-width: 640px) {
          .max-w-md {
            max-width: 100%;
          }
        }
      `}</style>
    </PageTemplate>
  )
}

export default Contact
