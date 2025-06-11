import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <PageTemplate title='Contact Us - Unicus Core'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title="Talk Innovation to Us."
                badge="CONTACT US"
                description="Curious about how Unicus Core can bring your tech or design vision to life? Whether it's a sleek digital solution or a space-transforming artwork, we're here to help. Reach out today - let's make something incredible together."
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <IconListItem
                label="Phone"
                value="9945860099 / 9916080160"
                icon={<FiPhoneCall />}
              />
              <IconListItem
                label="Email"
                value="test@unicuscore.com"
                icon={<FiMail />}
              />
            </div>
          </aside>
          
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <div className="grid grid-cols-1 gap-7 p-3 md:p-9 bg-light rounded-md lg:w-10/12">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First Name" />
                <InputGroup label="Last Name" />
              </div>
              
              {/* Email and Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputGroup label="Email" />
                <InputGroup label="Phone Number" placeholder="+91" />
              </div>
              
              {/* Company Name */}
              <InputGroup label="Company Name (if applicable)" />
              
              {/* Message */}
              <TextAreaGroup 
                label="How can we help you?" 
                placeholder="Tell us about your project, idea, or inquiry"
              />
              
              <Button value="Send Message" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
