import React, { useState } from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
  FiHome,
  FiTrendingUp,
  FiCode,
  FiDatabase,
  FiShield,
  FiSettings,
  FiBookOpen,
  FiShoppingBag,
  FiMapPin,
  FiZap,
  FiUsers
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'

type ServiceCategory = 'interior' | 'erp' | 'digital'

const Services = () => {
  const [activeService, setActiveService] = useState<ServiceCategory>('interior')

  const serviceButtons = [
    {
      id: 'interior' as ServiceCategory,
      title: 'Interior Design & Art',
      icon: <FiHome />,
      description: 'Custom artworks & complete interior solutions'
    },
    {
      id: 'erp' as ServiceCategory,
      title: 'ERP & Software Solutions',
      icon: <FiMonitor />,
      description: 'Smart ERP systems & custom software'
    },
    {
      id: 'digital' as ServiceCategory,
      title: 'Digital & Web Services',
      icon: <FiSmartphone />,
      description: 'Digital marketing & web development'
    }
  ]

  const renderInteriorServices = () => (
    <>
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
    </>
  )

  const renderERPServices = () => (
    <>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[315px] relative">
            <Image
              src={'/images/ui-design-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='ERP Systems'
            />
          </figure>
        </aside>
                <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="ERP SOLUTIONS"
              title="Comprehensive ERP Systems for Every Sector"
              paragraph="Smart ERP solutions designed for hospitals, educational institutes, retail, government, and utility sectors."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SmallCardIcon
                title="Hospital ERP"
                description="Streamline healthcare operations"
                icon={<FiMonitor />}
              />
              <SmallCardIcon
                title="Educational ERP"
                description="Enhance institutional efficiency"
                icon={<FiBookOpen />}
              />
            </aside>
            <TextArrowLink label="Service Detail" href="/service/detail?type=erp" />
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="CUSTOM SOFTWARE"
              title="Custom Software Development Solutions"
              paragraph="Reliable, scalable, and secure software tailored to your operations and business goals."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 gap-5">
              <CardListIcon
                icon={<FiShoppingBag />}
                title="Retail ERP Systems"
              />
              <CardListIcon
                icon={<FiMapPin />}
                title="Government Sector ERP"
              />
              <CardListIcon 
                icon={<FiZap />} 
                title="Utility Management ERP" 
              />
            </aside>
            <TextArrowLink label="Service Detail" href="/service/detail?type=erp" />
          </div>
        </aside>
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='Software Development'
            />
          </figure>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[545px] relative">
            <Image
              src={'/images/maintenance-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='ERP Features'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="WHY CHOOSE UNICUS ERP"
              title="Advanced Features for Modern Business Needs"
              paragraph="100% customizable modules with cloud-based solutions, real-time analytics, and secure data management."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <IconListItem icon={<FiSettings />} value='100% Customizable' />
              <IconListItem icon={<FiDatabase />} value='Cloud & On-Premise' />
              <IconListItem icon={<FiShield />} value='Secure Data Management' />
              <IconListItem icon={<FiTrendingUp />} value='Real-Time Analytics' />
            </aside>
            <TextArrowLink label="Service Detail" href="/service/detail?type=erp" />
          </div>
        </aside>
      </section>
    </>
  )

  const renderDigitalServices = () => (
    <>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[315px] relative">
            <Image
              src={'/images/ui-design-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='Digital Marketing'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="DIGITAL MARKETING"
              title="Boost Your Online Presence with Data-Driven Strategies"
              paragraph="From SEO and social media to paid campaigns and content marketing, we help you grow your brand and drive measurable results."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SmallCardIcon
                title="SEO & Content"
                description="Optimize for search engines"
                icon={<FiTrendingUp />}
              />
              <SmallCardIcon
                title="Social Media"
                description="Engage your target audience"
                icon={<FiUsers />}
              />
            </aside>
            <TextArrowLink label="Service Detail" href="/service/detail?type=digital" />
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="WEB DEVELOPMENT"
              title="Modern, Responsive & User-Friendly Websites"
              paragraph="We design and develop websites tailored to your business needs. From simple landing pages to complex web applications with performance and security."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 gap-5">
              <CardListIcon
                icon={<FiGlobe />}
                title="Responsive Web Development"
              />
              <CardListIcon
                icon={<FiSmartphone />}
                title="Mobile App Development"
              />
              <CardListIcon 
                icon={<FiCode />} 
                title="Custom Web Applications" 
              />
            </aside>
            <TextArrowLink label="Service Detail" href="/service/detail?type=digital" />
          </div>
        </aside>
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='Web Development'
            />
          </figure>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[545px] relative">
            <Image
              src={'/images/maintenance-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='App Development'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="APP DEVELOPMENT"
              title="High-Performance Mobile Apps for Every Platform"
              paragraph="Bring your ideas to life with intuitive, scalable mobile apps for Android, iOS, or cross-platform use."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <IconListItem icon={<FiSmartphone />} value='iOS & Android Apps' />
              <IconListItem icon={<FiMonitor />} value='Cross-Platform Solutions' />
              <IconListItem icon={<FiUsers />} value='User Experience Focus' />
              <IconListItem icon={<FiTrendingUp />} value='Scalable Architecture' />
            </aside>
            <TextArrowLink label="Service Detail" href="/service/detail?type=digital" />
          </div>
        </aside>
      </section>
    </>
  )

  const renderServiceContent = () => {
    switch (activeService) {
      case 'interior':
        return renderInteriorServices()
      case 'erp':
        return renderERPServices()
      case 'digital':
        return renderDigitalServices()
      default:
        return renderInteriorServices()
    }
  }

  return (
    <>
      <PageTemplate title='Service - Unicus'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="SERVICES"
              title="We are here to help solve your Organisation's problems"
            />
          </div>
        </section>

        {/* Service Selection Buttons */}
        <section className="grid place-items-center mb-16" data-aos="fade-up">
          <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3">
            {serviceButtons.map((service) => (
              <div key={service.id} className="flex">
                <button
                  onClick={() => setActiveService(service.id)}
                  className={`w-full p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                    activeService === service.id
                      ? 'border-primary bg-primaryLight text-white'
                      : 'border-borderLight bg-light text-muted hover:border-primary hover:bg-primaryLight hover:text-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl ${
                      activeService === service.id ? 'text-primary' : 'text-muted'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>

        <LineDivider />

        {/* Dynamic Service Content */}
        <div className="space-y-16">
          {renderServiceContent()}
        </div>
      </PageTemplate>
    </>
  )
}

export default Services