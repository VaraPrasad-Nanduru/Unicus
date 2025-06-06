import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import randomString from 'utils/randomString'

type ServiceType = 'interior' | 'erp' | 'digital'

const ServiceDetail = () => {
  const router = useRouter()
  const [serviceType, setServiceType] = useState<ServiceType>('interior')

  useEffect(() => {
    const { type } = router.query
    if (type && ['interior', 'erp', 'digital'].includes(type as string)) {
      setServiceType(type as ServiceType)
    }
  }, [router.query])

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
      default:
        return <div className={iconStyle}>⭐</div>
    }
  }

  // Interior Design Services Data
  const interiorData = {
    badge: "INTERIOR DESIGN & ART",
    title: "Transform Spaces with Custom Art & Complete Interior Solutions",
    description: `We create bespoke interior experiences that blend artistic vision with functional design. From custom artworks to complete turnkey execution, every project tells a unique story tailored to your space and purpose.`,
    features: [
      {
        title: 'Custom Artworks',
        description: 'Wall murals, sculptures, and installations tailored to your space',
        icon: <IconComponent type="palette" />,
      },
      {
        title: 'Turnkey Execution',
        description: 'Complete interior design from concept to final styling',
        icon: <IconComponent type="home" />,
      },
      {
        title: 'Fine Art Integration',
        description: 'Seamless blend of art with lighting, furniture, and materials',
        icon: <IconComponent type="award" />,
      },
      {
        title: 'Eco-Friendly Solutions',
        description: 'Up to 40% cost savings with sustainable alternatives',
        icon: <IconComponent type="check" />,
      },
      {
        title: 'Artist Collaboration',
        description: 'Work with emerging artists on real-time projects',
        icon: <IconComponent type="users" />,
      },
      {
        title: 'Creative Consulting',
        description: 'Story-led design with color psychology and symbolism',
        icon: <IconComponent type="target" />,
      },
    ],
    faqs: [
      {
        title: `What types of spaces do you work with?`,
        description: `We work with all types of spaces - from cozy homes to massive commercial halls, hotels, malls, airports, cafes, and corporate offices. Each project is customized to the space's purpose and scale.`,
      },
      {
        title: `How do you ensure the artwork fits my space perfectly?`,
        description: `We start with detailed space analysis, 3D visualization, and concept development. Every artwork is created specifically for your dimensions, style preferences, and functional requirements.`,
      },
      {
        title: `What is included in your turnkey execution service?`,
        description: `Our turnkey service covers everything from initial concept and 3D visualization to material sourcing, execution from raw structure to final styling, and custom furniture integration.`,
      },
      {
        title: `How much can I save with eco-friendly alternatives?`,
        description: `Our innovative alternatives to costly materials like stone, marble, and wood can provide up to 40% savings without compromising on beauty or durability.`,
      },
      {
        title: `Do you provide art workshops and learning sessions?`,
        description: `Yes! We offer workshops in mural-making, sculpture, mixed media, team-building events, and educational outreach programs for all age groups.`,
      },
      {
        title: `Can I collaborate with artists on my project?`,
        description: `Absolutely! We facilitate collaborations with emerging artists, creating unique pieces that represent both your vision and the artist's creativity.`,
      },
    ]
  }

  // ERP & Software Services Data
  const erpData = {
    badge: "ERP & SOFTWARE SOLUTIONS",
    title: "Comprehensive ERP Systems & Custom Software for Every Sector",
    description: `Smart, scalable, and secure ERP solutions designed for hospitals, educational institutes, retail, government, and utility sectors. 100% customizable with cloud-based and on-premise options.`,
    features: [
      {
        title: 'Hospital ERP',
        description: 'Streamline healthcare operations and patient management',
        icon: <IconComponent type="heart" />,
      },
      {
        title: 'Educational ERP',
        description: 'Enhance institutional efficiency and student engagement',
        icon: <IconComponent type="book" />,
      },
      {
        title: 'Retail ERP',
        description: 'Optimize inventory, sales, and customer satisfaction',
        icon: <IconComponent type="shopping" />,
      },
      {
        title: 'Government ERP',
        description: 'Streamline administrative processes and service delivery',
        icon: <IconComponent type="map" />,
      },
      {
        title: 'Utility ERP',
        description: 'Manage utility operations with industry compliance',
        icon: <IconComponent type="zap" />,
      },
      {
        title: 'Custom Software',
        description: 'Tailored solutions for unique business requirements',
        icon: <IconComponent type="code" />,
      },
    ],
    faqs: [
      {
        title: `What sectors do your ERP systems cover?`,
        description: `We provide specialized ERP solutions for hospitals, educational institutions, retail businesses, government sectors, and utility companies. Each system is tailored to industry-specific requirements.`,
      },
      {
        title: `Are your ERP systems customizable?`,
        description: `Yes, our ERP systems are 100% customizable. We adapt modules, workflows, and interfaces to match your specific business processes and requirements.`,
      },
      {
        title: `Do you offer both cloud and on-premise solutions?`,
        description: `We provide both cloud-based and on-premise ERP options. You can choose based on your security requirements, budget, and infrastructure preferences.`,
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

  // Digital & Web Services Data
  const digitalData = {
    badge: "DIGITAL & WEB SERVICES",
    title: "Boost Your Digital Presence with Modern Web Solutions",
    description: `From data-driven digital marketing strategies to high-performance web and mobile applications, we help you grow your brand and drive measurable results in the digital landscape.`,
    features: [
      {
        title: 'Digital Marketing',
        description: 'SEO, social media, and data-driven campaign strategies',
        icon: <IconComponent type="trending" />,
      },
      {
        title: 'Web Development',
        description: 'Modern, responsive, and user-friendly websites',
        icon: <IconComponent type="globe" />,
      },
      {
        title: 'Mobile Apps',
        description: 'High-performance iOS, Android, and cross-platform apps',
        icon: <IconComponent type="smartphone" />,
      },
      {
        title: 'Custom Applications',
        description: 'Tailored web applications for specific business needs',
        icon: <IconComponent type="code" />,
      },
      {
        title: 'SEO Optimization',
        description: 'First-page search engine rankings and visibility',
        icon: <IconComponent type="target" />,
      },
      {
        title: 'Performance Focus',
        description: 'Blazing fast websites with optimal user experience',
        icon: <IconComponent type="zap" />,
      },
    ],
    faqs: [
      {
        title: `What digital marketing services do you provide?`,
        description: `We offer comprehensive digital marketing including SEO, social media management, content marketing, paid advertising campaigns, and analytics-driven strategy development.`,
      },
      {
        title: `Do you develop both websites and mobile apps?`,
        description: `Yes, we develop modern responsive websites, native iOS and Android apps, and cross-platform mobile applications tailored to your business needs.`,
      },
      {
        title: `How do you ensure website performance and speed?`,
        description: `We optimize for speed through efficient coding practices, image optimization, CDN implementation, and performance monitoring to ensure blazing-fast load times.`,
      },
      {
        title: `Can you help improve our search engine rankings?`,
        description: `Absolutely! Our SEO strategies are designed to get your website on the first page of search results through keyword optimization, content strategy, and technical SEO improvements.`,
      },
      {
        title: `Do you provide ongoing support and maintenance?`,
        description: `Yes, we offer comprehensive support packages including regular updates, security monitoring, performance optimization, and feature enhancements for all our digital solutions.`,
      },
      {
        title: `How do you measure digital marketing success?`,
        description: `We use advanced analytics tools to track key metrics like website traffic, conversion rates, engagement levels, and ROI, providing detailed reports and insights.`,
      },
    ]
  }

  // Default features for fallback (similar to old code structure)
  const defaultFeatures: FeatureCardProps[] = [
    {
      title: 'Design Files',
      description: 'Projects are well designed using Figma. You will get the design file.',
      icon: <IconComponent type="figma" />,
    },
    {
      title: 'Same Day',
      description: `We don't want you to wait long. Everything will be finished on the same day.`,
      icon: <IconComponent type="clock" />,
    },
    {
      title: 'Quality Code',
      description: `Code written according to good practice is highly maintainable.`,
      icon: <IconComponent type="code" />,
    },
    {
      title: 'SEO',
      description: 'The website will appear on the first page of the search engine.',
      icon: <IconComponent type="trending" />,
    },
    {
      title: 'Responsive Design',
      description: `Access the website on any device, don't limit your visitors.`,
      icon: <IconComponent type="layout" />,
    },
    {
      title: 'Blazing Fast',
      description: 'A high speed website will not disappoint prospective customers.',
      icon: <IconComponent type="zap" />,
    },
  ]

  const getCurrentServiceData = () => {
    switch (serviceType) {
      case 'interior':
        return interiorData
      case 'erp':
        return erpData
      case 'digital':
        return digitalData
      default:
        return interiorData
    }
  }

  const getServiceImage = () => {
    switch (serviceType) {
      case 'interior':
        return '/images/development-illustration.svg'
      case 'erp':
        return '/images/ui-design-illustration.svg'
      case 'digital':
        return '/images/maintenance-illustration.svg'
      default:
        return '/images/development-illustration.svg'
    }
  }

  const getServiceImageAlt = () => {
    switch (serviceType) {
      case 'interior':
        return 'Interior Design and Custom Artwork Services'
      case 'erp':
        return 'ERP Systems and Software Solutions Dashboard'
      case 'digital':
        return 'Digital Marketing and Web Development Services'
      default:
        return 'Service illustration'
    }
  }

  const currentData = getCurrentServiceData()

  return (
    <PageTemplate title="Service Detail - Unicus">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge={currentData.badge}
            title={currentData.title}
          />
        </div>
      </section>
      
      <LineDivider />
      
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
              {serviceType === 'interior' && (
                <>
                  <li>Custom artworks tailored to your space and story</li>
                  <li>Complete turnkey execution from concept to styling</li>
                  <li>Eco-friendly alternatives with up to 40% cost savings</li>
                  <li>Collaboration with emerging artists and designers</li>
                  <li>Fine art integration with lighting and furniture</li>
                </>
              )}
              
              {serviceType === 'erp' && (
                <>
                  <li>100% customizable modules for any industry</li>
                  <li>Cloud-based and on-premise deployment options</li>
                  <li>Real-time analytics and comprehensive reporting</li>
                  <li>Secure data management with role-based access</li>
                  <li>Seamless integration with existing systems</li>
                </>
              )}
              
              {serviceType === 'digital' && (
                <>
                  <li>Data-driven strategies for measurable results</li>
                  <li>Modern, responsive design for all devices</li>
                  <li>SEO optimization for first-page rankings</li>
                  <li>High-performance applications with fast load times</li>
                  <li>Comprehensive digital marketing campaigns</li>
                </>
              )}
            </ul>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>

      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FEATURES"
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

      {/* Additional Service-Specific Section */}
      {serviceType === 'interior' && (
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <PageSentence
                badge="ARTISTIC SERVICES"
                title="Complete Range of Interior Art Services"
                description="From wall murals to sculptural installations, we offer comprehensive artistic solutions for residential, commercial, and public spaces."
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[350px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Interior Art Services Showcase'
              />
            </figure>
          </aside>
        </section>
      )}

      {serviceType === 'erp' && (
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[350px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
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
                title="Specialized ERP Solutions for Every Sector"
                description="Our ERP systems are designed with deep industry knowledge, ensuring compliance, efficiency, and scalability for your specific business needs."
              />
            </div>
          </aside>
        </section>
      )}

      {serviceType === 'digital' && (
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <PageSentence
                badge="DIGITAL EXCELLENCE"
                title="Complete Digital Transformation Solutions"
                description="From marketing strategies to custom applications, we provide end-to-end digital solutions that drive growth and enhance user experience."
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[350px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Digital Solutions Portfolio'
              />
            </figure>
          </aside>
        </section>
      )}

      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
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
            <Link href={'/quote'}>Do not hesitate to ask!</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="GET STARTED"
            title="Ready to Transform Your Vision into Reality?"
            description={`Let's discuss your ${serviceType} project and create something amazing together. Get a free consultation and personalized quote.`}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
          <Link href="/quote">
            <a className="bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
              Get Free Quote
            </a>
          </Link>
          <Link href="/contact">
            <a className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </PageTemplate>
  )
}

export default ServiceDetail
