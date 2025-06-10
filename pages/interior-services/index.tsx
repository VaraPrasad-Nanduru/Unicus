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
  FiUsers,
  FiEye,
  FiPenTool,
  FiMapPin,
  FiBookOpen,
  FiShoppingBag,
  FiHeart,
  FiStar,
  FiLayers,
  FiGlobe
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
              title="Designing Spaces with Soul, Story & Substance"
              paragraph="From bespoke artworks to end-to-end interiors, Unicus Core blends design, materiality, and meaning to shape spaces that truly resonate."
            />
          </div>
        </section>

        <LineDivider />

        {/* Creative Consulting Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Creative Consulting'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="CREATIVE CONSULTING"
                title="Creative Consulting & Story-Led Art Direction"
                paragraph="We provide artistic consulting for interior brands, builders, and individuals—helping clients uncover their unique design story through personalized art recommendations, thematic planning, and artist-led concept visualization."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Art Direction"
                  description="Personalized art recommendations & thematic planning"
                  icon={<FiEye />}
                />
                <SmallCardIcon
                  title="Concept Visualization"
                  description="Artist-led design story development"
                  icon={<FiPenTool />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
        </section>

        {/* Custom Artworks Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="CUSTOM ARTWORKS"
                title="Custom-Made Artworks for Interiors & Large Spaces"
                paragraph="Our in-house team of artists creates bespoke artworks specifically designed to complement the purpose and scale of each space—whether it's a cozy home or a grand commercial hall."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiLayout />}
                  title="Wall Murals & Sculptures"
                />
                <CardListIcon
                  icon={<FiHome />}
                  title="Residential & Commercial Spaces"
                />
                <CardListIcon 
                  icon={<FiHeart />} 
                  title="Brand Identity Integration" 
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Custom Artworks'
              />
            </figure>
          </aside>
        </section>

        {/* Large-Scale Public Artworks Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Public Artworks'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="PUBLIC ARTWORKS"
                title="Large-Scale Public Artworks & Centerpiece Installations"
                paragraph="We design and produce impactful large-scale artworks and theme-based centerpiece installations for public and commercial spaces such as malls, hotels, airports, cafes, and more."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Mall Installations"
                  description="Grand centerpiece artworks for commercial spaces"
                  icon={<FiShoppingBag />}
                />
                <SmallCardIcon
                  title="Cultural Storytelling"
                  description="Visual narratives for public environments"
                  icon={<FiGlobe />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
        </section>

        {/* Art Workshops Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="ART WORKSHOPS"
                title="Art Workshops & Learning"
                paragraph="Hands-on workshops, corporate events, and team-building sessions focused on mural-making, sculpture, and creative skills."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiBookOpen />}
                  title="Corporate Team Building"
                />
                <CardListIcon
                  icon={<FiUsers />}
                  title="Mural-Making Workshops"
                />
                <CardListIcon 
                  icon={<FiPenTool />} 
                  title="Creative Skills Development" 
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Art Workshops'
              />
            </figure>
          </aside>
        </section>

        {/* Artistic Styling Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Artistic Styling'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="ARTISTIC STYLING"
                title="Artistic Styling & Accessory Curation"
                paragraph="Curated interior décor and unique accessories—crockery, rugs, linens, and functional art pieces—professionally selected and styled to perfectly complement your design theme."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Curated Décor"
                  description="Unique accessories & functional art pieces"
                  icon={<FiStar />}
                />
                <SmallCardIcon
                  title="Professional Styling"
                  description="Theme-complementary design curation"
                  icon={<FiLayers />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
        </section>

        {/* Why Choose Us Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="WHY CHOOSE US"
                title="Comprehensive Interior Design Excellence"
                paragraph="From custom art creation to eco-friendly solutions, we deliver personalized design stories with seamless execution and creative collaboration."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiLayout />}
                  title="Custom Art for Every Space"
                />
                <CardListIcon
                  icon={<FiSettings />}
                  title="Unique Materials & Techniques"
                />
                <CardListIcon 
                  icon={<FiHeart />} 
                  title="Seamless Art Integration" 
                />
                <CardListIcon 
                  icon={<FiGlobe />} 
                  title="Modern Meets Traditional" 
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Why Choose Us'
              />
            </figure>
          </aside>
        </section>

        {/* Key Features Section */}
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Key Features'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="KEY FEATURES"
                title="Eco-Friendly Solutions & Creative Excellence"
                paragraph="Innovative, sustainable alternatives that save up to 40% without compromising beauty, including waste-to-art designs and empowering artist collaboration."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiTrendingUp />} value='40% Cost Savings' />
                <IconListItem icon={<FiCheckCircle />} value='Eco-Friendly Solutions' />
                <IconListItem icon={<FiRefreshCcw />} value='Waste-to-Art Designs' />
                <IconListItem icon={<FiUsers />} value='Artist Collaboration' />
                <IconListItem icon={<FiHeart />} value='Personalized Design Stories' />
                 <IconListItem icon={<FiSettings />} value='End-to-End Execution' />
              </aside>
              <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default InteriorServices
