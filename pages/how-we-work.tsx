import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="HOW WE WORK"
            title="Work flow at Unicus"
            description="We follow a structured, transparent workflow to deliver high-quality outcomes. whether you're building digital products or transforming physical spaces."
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Some people discuss'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 01"
            title={`Discover & Discuss`}
            paragraph={"Let’s start with a conversation. <br> Once you submit the quote form, our team will review your requirements and get in touch. This step is all about understanding your goals and the problems you're trying to solve - whether it's a new application, a process improvement, or a design vision for your space. <br> <sub> - For tech projects: We’ll align on what needs to be built. <br> - For design projects: We’ll dive into your space, purpose, and vision."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="STEP 02"
            title={`Plan, Design & Build`}
            paragraph="Turning ideas into execution. <br> After we’ve aligned on the scope, we move into planning, design, and development. Our team creates a detailed roadmap, executes design concepts, and builds your solution be it a robust app or a creatively styled interior. <br> <sub> - For tech: Wireframes, prototypes, development sprints. <br> - For design: Mood boards, material planning, turnkey execution."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Development'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Project Asset'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 03"
            title={`Deliver & Deploy`}
            paragraph="Your project. Fully delivered. <br> Once complete, we hand over all final assets - clean, organized, and ready to use. This includes: <br> <sub> ✅ For tech: Source code, design files, server access, documentation <br> ✅ For design: High-res renders, layout blueprints, final execution reports </sub> <br> We ensure you walk away with everything you need - backed by a process that's seamless from start to finish."
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
