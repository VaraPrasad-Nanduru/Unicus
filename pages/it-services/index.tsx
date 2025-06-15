import React, { useState } from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import Text from 'components/atoms/Text'
import FeatureCard from 'components/molecules/Card/FeatureCard'
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
// import TextArrowLink from 'components/molecules/TextArrowLink' // Commented out for future use
import IconListItem from 'components/molecules/IconListItem'
import randomString from 'utils/randomString'
import Link from 'next/link'

type ServiceCategory = 'digital' | 'development' | 'erp'

const ITServices = () => {
  const [activeService, setActiveService] = useState<ServiceCategory>('erp')

  const serviceButtons = [
    {
      id: 'erp' as ServiceCategory,
      title: 'ERP Services',
      icon: <FiMonitor />,
      description: 'Smart, scalable & sector-specific systems'
    },
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
  ]

  // Simple icon component to avoid import issues
  const IconComponent = ({ type }: { type: string }) => {
    const iconStyle = "w-6 h-6 flex items-center justify-center text-lg"

    switch (type) {
      case 'home':
        return <div className={iconStyle}>🏠</div>
      case 'users':
        return <div className={iconStyle}>👥</div>
      case 'monitor':
        return <div className={iconStyle}>💻</div>
      case 'book':
        return <div className={iconStyle}>📚</div>
      case 'shopping':
        return <div className={iconStyle}>🛍️</div>
      case 'map':
        return <div className={iconStyle}>📍</div>
      case 'smartphone':
        return <div className={iconStyle}>📱</div>
      case 'globe':
        return <div className={iconStyle}>🌐</div>
      case 'check':
        return <div className={iconStyle}>✅</div>
      case 'trending':
        return <div className={iconStyle}>📈</div>
      case 'zap':
        return <div className={iconStyle}>⚡</div>
      case 'code':
        return <div className={iconStyle}>💻</div>
      case 'palette':
        return <div className={iconStyle}>🎨</div>
      case 'award':
        return <div className={iconStyle}>🏆</div>
      case 'target':
        return <div className={iconStyle}>🎯</div>
      case 'heart':
        return <div className={iconStyle}>❤️</div>
      case 'database':
        return <div className={iconStyle}>🗄️</div>
      case 'shield':
        return <div className={iconStyle}>🛡️</div>
      case 'figma':
        return <div className={iconStyle}>🎨</div>
      case 'clock':
        return <div className={iconStyle}>⏰</div>
      case 'layout':
        return <div className={iconStyle}>📱</div>
      case 'settings':
        return <div className={iconStyle}>⚙️</div>
      case 'activity':
        return <div className={iconStyle}>📊</div>
      case 'bar-chart':
        return <div className={iconStyle}>📊</div>
      default:
        return <div className={iconStyle}>⭐</div>
    }
  }

  // Digital Marketing Services Data
  const digitalData = {
    badge: "DIGITAL MARKETING",
    title: "Boost Your Online Presence with Data-Driven Strategies",
    description: `From SEO and social media to paid campaigns and content marketing, we help you grow your brand and drive measurable results in the digital landscape.`,
    features: [
      {
        title: 'Campaign Management',
        description: 'Targeted strategies that elevate your brand and deliver engagement',
        icon: <IconComponent type="target" />,
      },
      {
        title: 'Lead Management',
        description: 'Streamlined workflows from awareness to conversion',
        icon: <IconComponent type="bar-chart" />,
      },
      {
        title: 'SEO & Content',
        description: 'First-page search engine rankings and visibility',
        icon: <IconComponent type="trending" />,
      },
      {
        title: 'Social Media',
        description: 'Engage your target audience across all platforms',
        icon: <IconComponent type="users" />,
      },
      {
        title: 'Paid Advertising',
        description: 'PPC campaigns with measurable ROI and performance tracking',
        icon: <IconComponent type="zap" />,
      },
      {
        title: 'Analytics & Reporting',
        description: 'Data-driven insights for continuous optimization',
        icon: <IconComponent type="activity" />,
      },
    ],
    faqs: [
      {
        title: `What digital marketing services do you provide?`,
        description: `We offer comprehensive digital marketing including SEO, social media management, content marketing, paid advertising campaigns, and analytics-driven strategy development.`,
      },
      {
        title: `How do you measure campaign success?`,
        description: `We use advanced analytics tools to track key metrics like website traffic, conversion rates, engagement levels, and ROI, providing detailed reports and insights.`,
      },
      {
        title: `Can you help improve our search engine rankings?`,
        description: `Absolutely! Our SEO strategies are designed to get your website on the first page of search results through keyword optimization, content strategy, and technical SEO improvements.`,
      },
      {
        title: `How do you manage leads effectively?`,
        description: `We implement streamlined lead workflows that capture, track, and nurture prospects efficiently, ensuring every lead is guided smoothly from awareness to conversion.`,
      },
      {
        title: `What makes your campaigns different?`,
        description: `Our campaigns are data-driven and targeted, focusing on reaching the right audience at the right time with the right message for maximum engagement and conversion.`,
      },
      {
        title: `Do you provide ongoing campaign optimization?`,
        description: `Yes, we continuously monitor and optimize campaigns based on performance data, ensuring maximum ROI and adapting strategies to market changes.`,
      },
    ]
  }

  // Development Services Data
  const developmentData = {
    badge: "DEVELOPMENT SERVICES",
    title: "Custom Web, Mobile & Software Solutions",
    description: `We build modern, scalable, and secure digital solutions tailored to your business needs. From responsive websites to enterprise software, we deliver high-performance applications that drive growth.`,
    features: [
      {
        title: 'Web Development',
        description: 'Modern, responsive websites with performance and security focus',
        icon: <IconComponent type="globe" />,
      },
      {
        title: 'Mobile Apps',
        description: 'High-performance iOS, Android, and cross-platform applications',
        icon: <IconComponent type="smartphone" />,
      },
      {
        title: 'Hybrid Application',
        description: 'Tailored solutions for automation and enterprise systems',
        icon: <IconComponent type="code" />,
      },
      {
        title: 'Responsive Design',
        description: 'Mobile-first approach with cross-platform compatibility',
        icon: <IconComponent type="layout" />,
      },
      {
        title: 'Performance Focus',
        description: 'Fast loading, secure, and scalable applications',
        icon: <IconComponent type="zap" />,
      },
      {
        title: 'User Experience',
        description: 'Intuitive interfaces that drive engagement and loyalty',
        icon: <IconComponent type="users" />,
      },
    ],
    faqs: [
      {
        title: `What types of websites do you develop?`,
        description: `We develop all types of websites from simple landing pages to complex web applications, ensuring performance, security, and aesthetic appeal for every project.`,
      },
      {
        title: `Do you develop mobile apps for both iOS and Android?`,
        description: `Yes, we develop native iOS and Android apps as well as cross-platform solutions, all built to provide seamless user experiences that drive engagement.`,
      },
      {
        title: `Can you build custom software for our business?`,
        description: `Absolutely! We create custom software solutions that solve real business problems, from automation tools to enterprise systems tailored to your operations.`,
      },
      {
        title: `How do you ensure website performance?`,
        description: `We optimize for speed through efficient coding practices, image optimization, CDN implementation, and performance monitoring to ensure fast load times.`,
      },
      {
        title: `What technologies do you use?`,
        description: `We use modern, proven technologies and frameworks to build scalable, secure, and maintainable applications that grow with your business needs.`,
      },
      {
        title: `Do you provide ongoing support and maintenance?`,
        description: `Yes, we offer comprehensive support packages including regular updates, security monitoring, performance optimization, and feature enhancements.`,
      },
    ]
  }

  // ERP & Software Services Data
  const erpData = {
    badge: "ERP & SOFTWARE SOLUTIONS",
    title: "Smart, Scalable & Sector-Specific ERP Systems",
    description: `Comprehensive ERP services designed for hospitals, educational institutes, retail, government, and utility sectors. 100% customizable with cloud-based`,
    features: [
      {
        title: 'ERP for Hospitals',
        description: 'Our Hospital ERP system is designed to simplify these complexities, enabling healthcare providers to focus on delivering exceptional patient care while optimizing operational efficiency',
        icon: <IconComponent type="heart" />,
      },
      {
        title: 'ERP for Education Institutions',
        description: 'Our Educational ERP system provides a unified platform to streamline operations, enhance student engagement, and improve institutional efficiency.',
        icon: <IconComponent type="book" />,
      },
      {
        title: 'ERP for Retail',
        description: 'Our Retail ERP system helps retailers streamline operations, improve customer satisfaction, and boost profitability.',
        icon: <IconComponent type="shopping" />,
      },
      {
        title: 'ERP for Government Sector',
        description: 'Our Government ERP system is designed to streamline administrative processes, improve service delivery, and ensure compliance with regulatory standards.',
        icon: <IconComponent type="map" />,
      },
      {
        title: 'ERP for Utility',
        description: 'Our Utility ERP system is designed to streamline operations, improve service delivery, and ensure compliance with industry standards.',
        icon: <IconComponent type="zap" />,
      },
      {
        title: 'ERP for Custom Modules',
        description: '100% customizable ERP modules tailored to your unique business processes, industry requirements, and operational workflows with flexible configuration options',
        icon: <IconComponent type="settings" />,
      },
    ],
    faqs: [
      {
        title: `What sectors do your ERP systems cover?`,
        description: `We provide specialized ERP services for hospitals, educational institutions, retail businesses, government sectors, and utility companies. Each system is tailored to industry-specific requirements.`,
      },
      {
        title: `Are your ERP systems customizable?`,
        description: `Yes, our ERP systems are 100% customizable. We adapt modules, workflows, and interfaces to match your specific business processes and requirements.`,
      },
      {
        title: `Do you offer both cloud and on-premise solutions?`,
        description: `We provide only cloud-based. You can choose based on your security requirements, budget, and infrastructure preferences.`,
      },
      {
        title: `How secure is the data management?`,
        description: `We implement enterprise-grade security measures including encryption, role-based access control, regular backups, and compliance with industry standards.`,
      },
      {
        title: `Can your ERP integrate with existing tools?`,
        description: `Yes, our ERP systems are designed for seamless integration with third-party tools and existing software infrastructure through APIs and custom connectors.`,
      },
      {
        title: `Do you provide real-time analytics and reporting?`,
        description: `All our ERP systems include comprehensive real-time analytics, customizable dashboards, and detailed reporting capabilities for data-driven decision making.`,
      },
    ]
  }

  const getCurrentServiceData = () => {
    switch (activeService) {
      case 'digital':
        return digitalData
      case 'development':
        return developmentData
      case 'erp':
        return erpData
      default:
        return digitalData
    }
  }

  const getServiceImage = () => {
    switch (activeService) {
      case 'digital':
        return '/images/ui-design-illustration.svg'
      case 'development':
        return '/images/maintenance-illustration.svg'
      case 'erp':
        return '/images/development-illustration.svg'
      default:
        return '/images/ui-design-illustration.svg'
    }
  }

  const getServiceImageAlt = () => {
    switch (activeService) {
      case 'digital':
        return 'Digital Marketing and Campaign Management Services'
      case 'development':
        return 'Web Development and Mobile App Services'
      case 'erp':
        return 'ERP Systems and Software Solutions Dashboard'
      default:
        return 'Service illustration'
    }
  }

  const currentData = getCurrentServiceData()

  /* 
  FUTURE IMPLEMENTATION: Original Simple Design
  This is the original simpler design that was used before implementing the detailed service-detail style design.
  Uncomment this section if you want to revert to the original design.
  */

  /*
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=digital" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=digital" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=digital" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=development" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=development" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=development" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=erp" />
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=erp" />
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
              alt='Why Choose Unicus Core ERP'
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
            <TextArrowLink label="Service Detail" href="/services-detail?type=erp" />
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
  */

  return (
    <>
      <PageTemplate title='IT Services - Unicus Core'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="ERP & IT SERVICES"
              title="Comprehensive Technology Solutions for Modern Businesses"
            // description="From digital marketing and custom development to enterprise ERP systems, we deliver technology solutions that drive growth and efficiency."
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

        {/* Service Detail Content - Same as service-detail page */}
        {/* <section className="grid place-items-center">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge={currentData.badge}
              title={currentData.title}
            />
          </div>
        </section>

        <LineDivider /> */}

        <section className="grid place-items-center gap-16">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge="SERVICES"
              title="Here's what you will get when choosing our services"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentData.features.map((feature) => {
              return (
                <div key={randomString(64)} data-aos="fade-up">
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    isNaked={true}
                  />
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[450px] relative">
              <Image
                src={getServiceImage()}
                layout="fill"
                objectFit="fill"
                alt={getServiceImageAlt()}
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
              <div className="grid gap-8">
                <Text
                  value={currentData.description}
                  textStyle={'SectionParagraph'}
                />
              </div>
              <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
                {activeService === 'digital' && (
                  <>
                    <li>Data-driven strategies for measurable results</li>
                    <li>Targeted campaigns that reach the right audience</li>
                    <li>Streamlined lead management workflows</li>
                    <li>SEO optimization for first-page rankings</li>
                    <li>Comprehensive analytics and performance tracking</li>
                  </>
                )}

                {activeService === 'development' && (
                  <>
                    <li>Modern, responsive design for all devices</li>
                    <li>High-performance mobile apps for iOS and Android</li>
                    <li>Custom software solutions for business automation</li>
                    <li>Scalable architecture with security focus</li>
                    <li>User experience optimization for engagement</li>
                  </>
                )}

                {activeService === 'erp' && (
                  <>
                    <li>100% customizable modules for any industry</li>
                    <li>Cloud-based and on-premise deployment options</li>
                    <li>Real-time analytics and comprehensive reporting</li>
                    <li>Secure data management with role-based access</li>
                    <li>Seamless integration with existing systems</li>
                  </>
                )}
              </ul>
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
          </aside>
        </section>

        {/* Additional Service-Specific Section */}
        {activeService === 'digital' && (
          <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
            <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
              <figure className="w-full h-[350px] relative">
                <Image
                  src={'/images/maintenance-illustration.svg'}
                  layout="fill"
                  objectFit="fill"
                  alt='Digital Marketing Campaign Dashboard'
                />
              </figure>
            </aside>
            <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
              <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
                <PageSentence
                  badge="DIGITAL EXCELLENCE"
                  title="Complete Digital Marketing Solutions"
                  description="From campaign management to lead nurturing, we provide end-to-end digital marketing solutions that drive growth and enhance brand visibility."
                />
              </div>
            </aside>
          </section>
        )}

        {activeService === 'development' && (
          <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
            <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
              <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
                <PageSentence
                  badge="DEVELOPMENT EXPERTISE"
                  title="Full-Stack Development Solutions"
                  description="From web applications to mobile apps and custom software, we provide comprehensive development services that solve real business problems."
                />
              </div>
            </aside>
            <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
              <figure className="w-full h-[350px] relative">
                <Image
                  src={'/images/development-illustration.svg'}
                  layout="fill"
                  objectFit="fill"
                  alt='Development Solutions Portfolio'
                />
              </figure>
            </aside>
          </section>
        )}

        
        {/* Why Choose Unicus Core ERP Section - Add this after the service-specific sections */}
        {activeService === 'erp' && (
          <section className="grid place-items-center gap-16">
            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
              <PageSentence
                badge="WHY CHOOSE UNICUS CORE ERP"
                title="Advanced ERP Solutions Built for Modern Business Excellence"
                description="Our ERP systems combine cutting-edge technology with industry expertise to deliver scalable, secure, and fully customizable solutions that grow with your business."
              />
            </div>

            {/* Enhanced Grid Layout for ERP Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* 100% Customizable Modules */}
              <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiSettings className="w-6 h-6 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="100% Customizable" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Fully adaptable modules that can be tailored to match your exact business processes, workflows, and industry-specific requirements without any limitations."
                />
              </div>

              {/* Cloud-Based & On-Premise Options */}
              <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiGlobe className="w-6 h-6 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="Cloud-Based" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Choose between cloud-based solutions for scalability and accessibility, or on-premise deployment for maximum control and security based on your business needs."
                />
              </div>

              {/* Multi-User Access with Role-Based Permissions */}
              <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiUsers className="w-6 h-6 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="Multi-User Access" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Multi-User Access with Role-Based Permissions, Advanced multi-user system with granular role-based permissions ensuring the right people have access to the right information at the right time."
                />
              </div>

              {/* Real-Time Analytics & Reporting */}
              <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiBarChart className="w-6 h-6 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="Real-Time Analytics" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Real-Time Analytics & Reporting, Comprehensive analytics dashboard with real-time reporting, customizable KPIs, and actionable insights to drive data-driven decision making."
                />
              </div>

              {/* Secure Data Management */}
              <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiShield className="w-6 h-6 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="Enterprise Security" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Secure Data Management, Bank-grade security with encrypted data storage, regular backups, audit trails, and compliance with industry standards to protect your critical business information."
                />
              </div>

              {/* Seamless Integration */}
              <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiCode className="w-6 h-6 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="Seamless Integration" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Seamless Integration with Third-Party Tools, Easy integration with existing third-party tools, APIs, and software systems ensuring smooth data flow and eliminating operational silos."
                />
              </div>
            </div>

            {/* Additional ERP Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
              <div className="grid gap-4 p-6 bg-gray-800/30 rounded-lg" data-aos="fade-up" data-aos-delay="600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiTrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="Scalable Architecture" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Built to grow with your business - from small teams to enterprise-level operations with unlimited user capacity and modular expansion capabilities."
                />
              </div>

              <div className="grid gap-4 p-6 bg-gray-800/30 rounded-lg" data-aos="fade-up" data-aos-delay="700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FiZap className="w-5 h-5 text-primary" />
                  </div>
                  <Text textStyle="FAQTitle" value="24/7 Support & Training" />
                </div>
                <Text
                  textStyle="FAQDescription"
                  value="Comprehensive support with dedicated account managers, extensive training programs, and round-the-clock technical assistance to ensure smooth operations."
                />
              </div>
            </div>
          </section>
        )}

        {/* {activeService === 'erp' && (
          <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
            <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
              <figure className="w-full h-[350px] relative">
                <Image
                  src={'/images/development-illustration-2.svg'}
                  layout="fill"
                  objectFit="fill"
                  alt='ERP System Dashboard'
                />
              </figure>
            </aside>
            <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
              <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
                <PageSentence
                  badge="INDUSTRY EXPERTISE"
                  title="Specialized ERP Services for Every Sector"
                  description="Our ERP systems are designed with deep industry knowledge, ensuring compliance, efficiency, and scalability for your specific business needs."
                />
              </div>
            </aside>
          </section>
        )} */}

        <section className="grid place-items-center gap-16">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge="FAQ's"
              title="Frequently asked questions about our services"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
            {currentData.faqs.map((faq) => {
              return (
                <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                  <Text textStyle="FAQTitle" value={faq.title} />
                  <Text textStyle="FAQDescription" value={faq.description} />
                </div>
              )
            })}
          </div>
          <div className="text-white text-base font-medium">
            {`Didn't find an answer? `}
            <div className="sm:hidden"></div>
            <div className="text-primary inline">
              <Link href={'/contact'}>Do not hesitate to ask!</Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="grid place-items-center gap-16">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge="GET STARTED"
              title="Ready to Transform Your Vision into Reality?"
              description={`Let's discuss your ${activeService} project and create something amazing together. Get a free consultation and personalized quote.`}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
            {/* <Link href="/contact">
              <a className="bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
                Get Free Quote
              </a>
            </Link> */}
            <Link href="/contact">
              <a className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
                Contact Us
              </a>
            </Link>
          </div>
        </section>

        {/* Future Implementation: Original Simple Design */}
        {/* Uncomment the renderServiceContent() call below and comment out the detailed sections above to revert to original design */}
        {/* <div className="space-y-16">
          {renderServiceContent()}
        </div> */}

      </PageTemplate>
    </>
  )
}

export default ITServices

