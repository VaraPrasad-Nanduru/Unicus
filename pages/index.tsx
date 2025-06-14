import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiHome, FiMonitor, FiSmartphone } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - Unicus Core">
        {/* Banner Section */}
        {/* !mt-2 !mb-0 */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="We Design Solutions. We Develop Systems. We Reimagine Spaces."
              description="From smart, scalable ERP systems that drive efficiency across retail, utilities, education,
government and healthcare, to bespoke fine art interior designs that transform spaces into
visual masterpieces  we deliver end-to-end solutions shaped by your unique vision. Innovation,
quality, and efficiency  delivered seamlessly.
"
            // badge="DUAL-EXPERTISE-SOLUTIONS"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink
              value="Inquiry"
              // href="/quote"
              href="/contact"
            />
            {/* <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            /> */}
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="ERP Services"
              description="Smart ERP systems, custom software development, and digital solutions that streamline operations across various sectors."
              icon={<FiMonitor />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="IT Services"
              description="Comprehensive digital marketing, responsive web development, and mobile app solutions to boost your online presence."
              icon={<FiSmartphone />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Fine Art Interior Services"
              description="Custom artworks, complete interior solutions, and artistic transformations that blend creativity with functionality for unique spaces."
              icon={<FiHome />}
            />
          </div>
        </section>
        {/* Logo List */}
        {/* <LogoList /> */}
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="From concept to completion - every project is meticulously planned and executed"
              paragraph="Whether we're developing smart ERP systems or crafting bespoke interior designs, our approach remains consistent: thorough planning, creative innovation, and flawless execution. We blend technical expertise with artistic vision to deliver solutions that exceed expectations."
              badge="HOW WE WORK"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a diverse team of developers, designers, artists and creative strategists"
                paragraph="Our multidisciplinary team brings together software engineers, ERP specialists, interior designers, fine artists, and digital marketing experts. This unique blend of technical prowess and creative excellence enables us to deliver comprehensive solutions across both digital and physical spaces."
                badge="OUR TEAM"
              />
              {/* <ButtonLink
                value="See Our Teams"
                href="/teams"
                size="small"
                color="white"
                style="light"
              /> */}
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        {/* <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section> */}
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Select a Service Crafted for Your Needs"
              badge="GET STARTED"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 items-stretch">
            <div data-aos="fade-up" data-aos-delay="300" className="flex">
              <PricingCard
                price="5000$"
                title="Erp & software Services"
                features={[
                  'Consultation starts from ₹10,000'
                ]}
              />
            </div>
            <div data-aos="fade-up-left" className="flex">
              <PricingCard
                price="3000$"
                title="Digital & Web services"
                features={[
                  'Consultation starts from ₹3,000'
                ]}
              />
            </div>
            <div data-aos="fade-up-right" className="flex">
              <PricingCard
                price="1200$"
                title="Fine Art Interior Designing"
                features={[
                  'Consultation starts from ₹10,000'
                ]}
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              paragraph="Real results. Real impact. See how Unicus Core has helped clients transform their spaces and streamline their systems."
              badge="Success Stories"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
