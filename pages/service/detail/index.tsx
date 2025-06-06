import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

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
    const iconStyle = "w-6 h-6"
    
    switch (type) {
      case 'home':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>🏠</div>
      case 'users':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>👥</div>
      case 'monitor':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>💻</div>
      case 'book':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>📚</div>
      case 'shopping':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>🛍️</div>
      case 'map':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>📍</div>
      case 'smartphone':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>📱</div>
      case 'globe':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>🌐</div>
      case 'check':
        return <div className={`${iconStyle} bg-green-500 rounded`}>✅</div>
      case 'trending':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>📈</div>
      case 'zap':
        return <div className={`${iconStyle} bg-yellow-500 rounded`}>⚡</div>
      case 'code':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>💻</div>
      case 'palette':
        return <div className={`${iconStyle} bg-purple-500 rounded`}>🎨</div>
      case 'award':
        return <div className={`${iconStyle} bg-yellow-500 rounded`}>🏆</div>
      case 'target':
        return <div className={`${iconStyle} bg-red-500 rounded`}>🎯</div>
      case 'heart':
        return <div className={`${iconStyle} bg-red-500 rounded`}>❤️</div>
      case 'database':
        return <div className={`${iconStyle} bg-blue-500 rounded`}>🗄️</div>
      case 'shield':
        return <div className={`${iconStyle} bg-green-500 rounded`}>🛡️</div>
      default:
        return <div className={`${iconStyle} bg-gray-500 rounded`}>⭐</div>
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
        icon: 'palette',
      },
      {
        title: 'Turnkey Execution',
        description: 'Complete interior design from concept to final styling',
        icon: 'home',
      },
      {
        title: 'Fine Art Integration',
        description: 'Seamless blend of art with lighting, furniture, and materials',
        icon: 'award',
      },
      {
        title: 'Eco-Friendly Solutions',
        description: 'Up to 40% cost savings with sustainable alternatives',
        icon: 'check',
      },
      {
        title: 'Artist Collaboration',
        description: 'Work with emerging artists on real-time projects',
        icon: 'users',
      },
      {
        title: 'Creative Consulting',
        description: 'Story-led design with color psychology and symbolism',
        icon: 'target',
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
        icon: 'heart',
      },
      {
        title: 'Educational ERP',
        description: 'Enhance institutional efficiency and student engagement',
        icon: 'book',
      },
      {
        title: 'Retail ERP',
        description: 'Optimize inventory, sales, and customer satisfaction',
        icon: 'shopping',
      },
      {
        title: 'Government ERP',
        description: 'Streamline administrative processes and service delivery',
        icon: 'map',
      },
      {
        title: 'Utility ERP',
        description: 'Manage utility operations with industry compliance',
        icon: 'zap',
      },
      {
        title: 'Custom Software',
        description: 'Tailored solutions for unique business requirements',
        icon: 'code',
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
        icon: 'trending',
      },
      {
        title: 'Web Development',
        description: 'Modern, responsive, and user-friendly websites',
        icon: 'globe',
      },
      {
        title: 'Mobile Apps',
        description: 'High-performance iOS, Android, and cross-platform apps',
        icon: 'smartphone',
      },
      {
        title: 'Custom Applications',
        description: 'Tailored web applications for specific business needs',
        icon: 'code',
      },
      {
        title: 'SEO Optimization',
        description: 'First-page search engine rankings and visibility',
        icon: 'target',
      },
      {
        title: 'Performance Focus',
        description: 'Blazing fast websites with optimal user experience',
        icon: 'zap',
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
    <>
      <Head>
        <title>Service Detail - Unicus</title>
      </Head>
      
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <section className="grid place-items-center mb-16">
            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center">
              <div className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                {currentData.badge}
              </div>
              <h1 className="text-white text-3xl lg:text-5xl font-bold max-w-4xl mx-auto">
                {currentData.title}
              </h1>
            </div>
          </section>
          
          {/* Line Divider */}
          <div className="w-full h-px bg-gray-700 my-16"></div>
          
          {/* Main Content Section */}
          <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 mb-16">
            <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
              <figure className="w-full h-[450px] relative">
                <Image
                  src={getServiceImage()}
                  layout="fill"
                  objectFit="fill"
                  alt={getServiceImageAlt()}
                />
              </figure>
            </aside>
            
            <aside className="grid gap-12 place-items-center">
              <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
                <div className="grid gap-8">
                  <p className="text-white text-base lg:text-lg opacity-80">
                    {currentData.description}
                  </p>
                </div>
                
                {/* Service-specific benefits */}
                <ul className="text-white text-base font-medium pl-5 grid gap-2.5">
                  {serviceType === 'interior' && (
                    <>
                      <li>• Custom artworks tailored to your space and story</li>
                      <li>• Complete turnkey execution from concept to styling</li>
                      <li>• Eco-friendly alternatives with up to 40% cost savings</li>
                      <li>• Collaboration with emerging artists and designers</li>
                      <li>• Fine art integration with lighting and furniture</li>
                    </>
                  )}
                  
                  {serviceType === 'erp' && (
                    <>
                      <li>• 100% customizable modules for any industry</li>
                      <li>• Cloud-based and on-premise deployment options</li>
                      <li>• Real-time analytics and comprehensive reporting</li>
                      <li>• Secure data management with role-based access</li>
                      <li>• Seamless integration with existing systems</li>
                    </>
                  )}
                  
                  {serviceType === 'digital' && (
                    <>
                      <li>• Data-driven strategies for measurable results</li>
                      <li>• Modern, responsive design for all devices</li>
                      <li>• SEO optimization for first-page rankings</li>
                      <li>• High-performance applications with fast load times</li>
                      <li>• Comprehensive digital marketing campaigns</li>
                    </>
                  )}
                </ul>
              </div>
            </aside>
          </section>

          {/* Features Section */}
          <section className="grid place-items-center gap-16 mb-16">
            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center">
              <div className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                FEATURES
              </div>
              <h2 className="text-white text-3xl lg:text-4xl font-bold">
                Here's what you will get when choosing our services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentData.features.map((feature, index) => {
                return (
                  <div key={`feature-${index}`} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300">
                    <div className="mb-4">
                      <IconComponent type={feature.icon} />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Additional Service-Specific Section */}
          {serviceType === 'interior' && (
            <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 mb-16">
              <aside className="grid gap-12 place-items-center">
                <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
                  <div className="grid gap-5">
                    <div className="text-blue-500 text-sm font-medium">ARTISTIC SERVICES</div>
                    <h2 className="text-white text-2xl lg:text-4xl font-semibold">
                      Complete Range of Interior Art Services
                    </h2>
                    <p className="text-white text-base lg:text-lg opacity-80">
                      From wall murals to sculptural installations, we offer comprehensive artistic solutions for residential, commercial, and public spaces.
                    </p>
                  </div>
                </div>
              </aside>
              <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
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
            <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 mb-16">
              <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
                <figure className="w-full h-[350px] relative">
                  <Image
                    src={'/images/maintenance-illustration.svg'}
                    layout="fill"
                    objectFit="fill"
                    alt='ERP System Dashboard'
                  />
                </figure>
              </aside>
              <aside className="grid gap-12 place-items-center">
                <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
                  <div className="grid gap-5">
                    <div className="text-blue-500 text-sm font-medium">INDUSTRY EXPERTISE</div>
                    <h2 className="text-white text-2xl lg:text-4xl font-semibold">
                      Specialized ERP Solutions for Every Sector
                    </h2>
                    <p className="text-white text-base lg:text-lg opacity-80">
                      Our ERP systems are designed with deep industry knowledge, ensuring compliance, efficiency, and scalability for your specific business needs.
                    </p>
                  </div>
                </div>
              </aside>
            </section>
          )}

          {serviceType === 'digital' && (
            <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 mb-16">
              <aside className="grid gap-12 place-items-center">
                <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
                  <div className="grid gap-5">
                    <div className="text-blue-500 text-sm font-medium">DIGITAL EXCELLENCE</div>
                    <h2 className="text-white text-2xl lg:text-4xl font-semibold">
                      Complete Digital Transformation Solutions
                    </h2>
                    <p className="text-white text-base lg:text-lg opacity-80">
                      From marketing strategies to custom applications, we provide end-to-end digital solutions that drive growth and enhance user experience.
                    </p>
                  </div>
                </div>
              </aside>
              <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
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
          
          {/* FAQ Section */}
          <section className="grid place-items-center gap-16">
            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center">
              <div className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                FAQ
              </div>
              <h2 className="text-white text-3xl lg:text-4xl font-bold">
                Frequently asked questions about our services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
              {currentData.faqs.map((faq, index) => {
                return (
                  <div className="grid gap-2.5" key={`faq-${index}`}>
                    <h3 className="text-white text-lg font-semibold">{faq.title}</h3>
                    <p className="text-gray-300 text-base">{faq.description}</p>
                  </div>
                )
              })}
            </div>
            <div className="text-white text-base font-medium text-center">
              <span>{`Didn't find an answer? `}</span>
              <Link href={'/quote'}>
                <a className="text-blue-500 hover:underline">Do not hesitate to ask!</a>
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="grid place-items-center gap-8 mt-16 py-16 bg-gray-800 rounded-lg">
            <div className="text-center">
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-base lg:text-lg mb-8 max-w-2xl">
                Let's discuss your project and create something amazing together. 
                Get a free consultation and quote for your {serviceType} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <a className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                    Get Free Quote
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ServiceDetail
