import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiCheckCircle,
  FiLayout,
  FiHome,
  FiTrendingUp,
  FiRefreshCcw,
  FiSettings,
  FiUsers
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'

const InteriorServices = () => {
  return (
    <>
      <PageTemplate title='Interior Services - Unicus'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="INTERIOR SERVICES"
              title="Transform Your Space with Custom Art & Complete Interior Solutions"
            />
          </div>
        </section>

        <LineDivider />

        {/* Custom Artworks Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Custom Artworks'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="CUSTOM ARTWORKS"
                title="Custom-Made Artworks for Interiors & Large Spaces"
                paragraph="Every artwork we create is tailored specifically for the space and its purpose—from cozy homes to massive commercial halls."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Wall Murals"
                  description="Customized to size, style, and story"
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Sculptural Art"
                  description="Relief, 3D, suspended installations"
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail?type=interior" />
            </div>
          </aside>
        </section>

        {/* Interior Design Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="INTERIOR DESIGN"
                title="Interior Design & Turnkey Execution"
                paragraph="End-to-end interior design for residential, retail, hospitality, malls and workspaces with complete execution."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiHome />}
                  title="Residential & Commercial Design"
                />
                <CardListIcon
                  icon={<FiLayout />}
                  title="3D Visualization & Material Sourcing"
                />
                <CardListIcon 
                  icon={<FiSettings />} 
                  title="Raw Structure to Final Styling" 
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail?type=interior" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Interior Design'
              />
            </figure>
          </aside>
        </section>

        {/* Eco-friendly Design Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Eco-friendly design'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="ECO-FRIENDLY"
                title="Eco-Friendly & Cost-Smart Design Alternatives"
                paragraph="Innovative alternatives to costly materials with up to 40% savings without sacrificing beauty."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiTrendingUp />} value='40% Cost Savings' />
                <IconListItem icon={<FiCheckCircle />} value='Sustainable Materials' />
                <IconListItem icon={<FiRefreshCcw />} value='Waste-to-Art Integration' />
                <IconListItem icon={<FiUsers />} value='Artist Collaboration' />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail?type=interior" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default InteriorServices
