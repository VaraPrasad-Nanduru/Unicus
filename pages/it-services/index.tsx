import React, { useState } from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiGlobe,
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiCode,
  FiDatabase,
  FiShield,
  FiSettings,
  FiBookOpen,
  FiShoppingBag,
  FiMapPin,
  FiZap,
  FiUsers,
  FiTarget,
  FiBarChart,
  FiActivity
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'

type ServiceCategory = 'digital' | 'development' | 'erp'

const ITServices = () => {
  const [activeService, setActiveService] = useState<ServiceCategory>('digital')

  const serviceButtons = [
    {
      id: 'digital' as ServiceCategory,
      title: 'Digital Marketing',
      icon: <FiTrendingUp />,
      description: 'Data-driven strategies & campaign management'
    },
    {
      id: 'development' as ServiceCategory,
      title: 'Development Services',
      icon: <FiCode />,
      description: 'Web, mobile & custom software solutions'
    },
    {
      id: 'erp' as ServiceCategory,
      title: 'ERP Solutions',
      icon: <FiMonitor />,
      description: 'Smart, scalable & sector-specific systems'
    }
  ]

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
                title="Campaigns"
                description="Targeted strategies for brand elevation"
                icon={<FiTarget />}
              />
              <SmallCardIcon
                title="Lead Management"
                description="Streamlined workflows from awareness to conversion"
                icon={<FiBarChart />}
              />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=digital" />
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="CAMPAIGNS"
              title="Reach the Right Audience at the Right Time"
              paragraph="From SEO and social media to paid ads and content-driven campaigns, we craft targeted strategies that elevate your brand and deliver measurable engagement."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 gap-5">
              <CardListIcon
                icon={<FiTrendingUp />}
                title="SEO & Content Marketing"
              />
              <CardListIcon
                icon={<FiUsers />}
                title="Social Media Campaigns"
              />
              <CardListIcon
                icon={<FiTarget />}
                title="Paid Advertising & PPC"
              />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=digital" />
          </div>
        </aside>
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='Digital Campaigns'
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
              alt='Lead Management'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="LEAD MANAGEMENT"
              title="Turn Interest into Impact with Streamlined Workflows"
              paragraph="We help you capture, track, and nurture leads efficiently - ensuring every prospect is guided smoothly from awareness to conversion with data-driven precision."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <IconListItem icon={<FiActivity />} value='Lead Capture & Tracking' />
              <IconListItem icon={<FiBarChart />} value='Data-Driven Nurturing' />
              <IconListItem icon={<FiTarget />} value='Conversion Optimization' />
              <IconListItem icon={<FiTrendingUp />} value='Performance Analytics' />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=digital" />
          </div>
        </aside>
      </section>
    </>
  )

  const renderDevelopmentServices = () => (
    <>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[315px] relative">
            <Image
              src={'/images/ui-design-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='Web Development'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="WEB DEVELOPMENT"
              title="Modern, Responsive & User-Friendly Websites"
              paragraph="We design and develop modern, responsive, and user-friendly websites tailored to your business needs. Whether it's a simple landing page or a complex web application, we ensure performance, security, and aesthetic appeal."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SmallCardIcon
                title="Responsive Design"
                description="Mobile-first, cross-platform compatibility"
                icon={<FiGlobe />}
              />
              <SmallCardIcon
                title="Performance Focus"
                description="Fast loading, secure & scalable"
                icon={<FiTrendingUp />}
              />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=development" />
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="APP DEVELOPMENT"
              title="High-Performance Mobile Apps for Every Platform"
              paragraph="Bring your ideas to life with high-performance mobile apps for Android, iOS, or cross-platform use. Our apps are intuitive, scalable, and built to provide seamless user experiences that drive engagement and loyalty."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 gap-5">
              <CardListIcon
                icon={<FiSmartphone />}
                title="iOS & Android Development"
              />
              <CardListIcon
                icon={<FiCode />}
                title="Cross-Platform Solutions"
              />
              <CardListIcon
                icon={<FiUsers />}
                title="User Experience Focus"
              />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=development" />
          </div>
        </aside>
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='App Development'
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
              alt='Software Development'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="SOFTWARE DEVELOPMENT"
              title="Custom Software Solutions That Solve Real Business Problems"
              paragraph="From automation tools to enterprise systems, we build reliable, scalable, and secure software tailored to your operations and goals."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <IconListItem icon={<FiSettings />} value='Automation Tools' />
              <IconListItem icon={<FiDatabase />} value='Enterprise Systems' />
              <IconListItem icon={<FiShield />} value='Secure & Scalable' />
              <IconListItem icon={<FiCode />} value='Custom Solutions' />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=development" />
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
              alt='ERP Solutions'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="ERP SOLUTIONS"
              title="Smart, Scalable & Sector-Specific Systems"
              paragraph="Our ERP solutions are tailored to address unique industry challenges - offering centralized control, automation, and real-time visibility across departments."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              <SmallCardIcon
                title="Hospital ERP"
                description="Streamline healthcare operations & patient care"
                icon={<FiActivity />}
              />
              <SmallCardIcon
                title="Educational ERP"
                description="Enhance student engagement & efficiency"
                icon={<FiBookOpen />}
              />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=erp" />
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="SECTOR-SPECIFIC ERP"
              title="Tailored Solutions for Every Industry"
              paragraph="Whether you're a hospital, educational institution, retail chain, government department, or utility provider, our ERP systems are designed to simplify operations and improve service delivery."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="w-full grid grid-cols-1 gap-5">
              <CardListIcon
                icon={<FiShoppingBag />}
                title="Retail ERP - Streamline Operations & Boost Profitability"
              />
              <CardListIcon
                icon={<FiMapPin />}
                title="Government ERP - Administrative Process Optimization"
              />
              <CardListIcon
                icon={<FiZap />}
                title="Utility ERP - Service Delivery & Compliance"
              />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=erp" />
          </div>
        </aside>
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt='Sector Specific ERP'
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
              alt='Why Choose Unicus ERP'
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
            <SectionSentence
              badge="WHY CHOOSE UNICUS ERP"
              title="Advanced Features for Modern Business Needs"
              paragraph="Our ERP systems provide comprehensive solutions with customizable modules, cloud-based options, and enterprise-grade security for optimal business performance."
            />
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
            <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <IconListItem icon={<FiSettings />} value='100% Customizable Modules' />
              <IconListItem icon={<FiDatabase />} value='Cloud-Based & On-Premise' />
              <IconListItem icon={<FiUsers />} value='Multi-User Role-Based Access' />
              <IconListItem icon={<FiTrendingUp />} value='Real-Time Analytics & Reporting' />
              <IconListItem icon={<FiShield />} value='Secure Data Management' />
              <IconListItem icon={<FiCode />} value='Third-Party Tool Integration' />
            </aside>
            <TextArrowLink label="Discover More" href="/services-detail?type=erp" />
          </div>
        </aside>
      </section>
    </>
  )

  const renderServiceContent = () => {
    switch (activeService) {
      case 'digital':
        return renderDigitalServices()
      case 'development':
        return renderDevelopmentServices()
      case 'erp':
        return renderERPServices()
      default:
        return renderDigitalServices()
    }
  }

  return (
    <>
      <PageTemplate title='IT Services - Unicus'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="IT SERVICES"
              title="Comprehensive Technology Solutions for Modern Businesses"
              description="From digital marketing and custom development to enterprise ERP systems, we deliver technology solutions that drive growth and efficiency."
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
                  className={`w-full p-6 rounded-lg border-2 transition-all duration-300 text-left ${activeService === service.id
                      ? 'border-primary bg-primaryLight text-white'
                      : 'border-borderLight bg-light text-muted hover:border-primary hover:bg-primaryLight hover:text-white'
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl ${activeService === service.id ? 'text-primary' : 'text-muted'
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

export default ITServices
