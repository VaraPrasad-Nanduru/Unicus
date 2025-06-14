import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <PageTemplate title="About - Unicus">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Creative team working on digital solutions and interior designs"

            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT US"
            title="Art, Tech & Strategy - All Under One Roof"
            description={`At Unicus Core, diverse creative minds unite
under one roof - bringing together software engineers, ERP specialists, interior
designers, fine artists, and digital strategists. We collaborate to deliver
exceptional results across both digital solutions and artistic transformations.
From smart ERP systems that streamline business operations to bespoke interior
designs that transform spaces into works of art, our multidisciplinary team
ensures every project reflects innovation, quality, and client satisfaction`}
          />
        </aside>
      </section>

      <LineDivider />
      {/* <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section> */}
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="Meet the team! All creative people are here"
            title="Visionaries driving smart systems and stunning spaces"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/Dheekshetha2.webp"
              job="Founder"
              name="K Dheekshetha"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/Aditya.webp"
              job="Co-founder"
              name="Aditya Shekhar"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/Roshan.webp"
              job="Marketing Head"
              name="Roshan Kautilya"
              linkedinUrl='https://www.linkedin.com/in/kautilyaroshan/'
            />
          </div>
          {/* <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-4.webp"
              job="Software Engineer"
              name="Marvin McKinney"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="System Analyst"
              name="Floyd Miles"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/KamalNanduru.webp"
              job="FullStack Developer"
              name="Kamal Nanduru"
            />
          </div> */}
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
