import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import SectionSentence from 'components/molecules/SectionSentence'
import React from 'react'

const CallOut = () => {
  return (
    <>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 place-items-center m-0 py-12 lg:grid-cols-2">
        <div className="text-center sm:w-8/12 md:w-10/12 lg:w-full lg:text-left">
          <SectionSentence badge="Our journey began with a mission: to unite developers and fine artists. Now, we're ready to be a part of your story. Let's create something unique together." />
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-fit sm:flex-row lg:w-full lg:justify-end">
          <ButtonLink value="Inquiry " href="/quote" />
          <ButtonLink value="View FAQ" color="white" style="light" href="/faq" />
        </div>
      </section>
      <LineDivider />
    </>
  )
}

export default CallOut
