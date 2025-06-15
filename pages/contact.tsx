import React, { useState, ChangeEvent, FormEvent } from 'react'
import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
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

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

    setSubmitted(true)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      organisation: '',
      message: '',
    })
  }

  return (
    <PageTemplate title="Contact - Unicus Core">
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="Talk Innovation to Us"
            title="We're here to help. Reach out today - let’s make something incredible together"
            description="Got a question, want to collaborate, or just exploring? We're here and happy to help!"
          />
        </div>
      </section>

      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2 mt-4 mb-2">
        <aside
          className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start"
          data-aos="fade-up-right"
        >
          <div className="sm:text-center lg:text-left">
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

        <aside
          className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
          data-aos="fade-down-left"
        >
          <form
            className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
              <InputGroup
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <InputGroup
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              <InputGroup
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <div className="flex flex-col">
                <label className="mb-1 text-white font-medium text-sm">Phone Number</label>
                <PhoneInput
                  country={'in'}
                  value={form.phone}
                  onChange={(value: string) => setForm({ ...form, phone: value })}
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
                    border: '1px solid #ddd',
                    paddingLeft: '48px',
                  }}
                  buttonStyle={{
                    border: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
            </div>

            <InputGroup
              label="Organisation Name"
              name="organisation"
              value={form.organisation}
              onChange={handleChange}
            />
            <TextAreaGroup
              label="How can we help you?"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project, idea, or inquiry"
              required
            />
            <Button
              value={submitted ? 'Message Sent!' : 'Send Message'}
              type="submit"
              disabled={submitted}
            />
            {submitted && (
              <p className="text-green-600 mt-2">Thank you for contacting us!</p>
            )}
          </form>
        </aside>
      </section>
    </PageTemplate>
  )
}

export default Contact
