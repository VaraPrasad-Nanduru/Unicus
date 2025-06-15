import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import Text from 'components/atoms/Text'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import randomString from 'utils/randomString'
import Link from 'next/link'
import SectionSentence from 'components/molecules/SectionSentence'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import { FiBookOpen, FiCheckCircle, FiEye, FiGlobe, FiHeart, FiHome, FiLayers, FiLayout, FiPenTool, FiRefreshCcw, FiSettings, FiShoppingBag, FiStar, FiTrendingUp, FiUsers } from 'react-icons/fi'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'

const InteriorServices = () => {
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

  // Interior Design Services Data (from services-detail)
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
        description: `We work with all types of spaces from cozy homes to massive commercial halls, hotels, malls, airports, cafes, and corporate offices. Each project is customized to the space's purpose and scale.`,
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

  return (
    <>
      <PageTemplate title='Interior Services - Unicus Core'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="Fine Art Interior Services"
              title="Where Custom Fine Art Transforms Living Spaces into Stories"
              description="At Unicus Core, we don’t just decorate spaces - we personalise them.
From hand-crafted murals to tailored spatial experiences, we infuse
fine art into interiors with soul, form, and feeling. Your space
becomes an extension of you."
            />
          </div>
        </section>

        <LineDivider />

        <section className="grid place-items-center gap-16">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge="SERVICES"
              title="Here's what you will get when choosing our services"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {interiorData.features.map((feature) => {
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
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="CUSTOM ARTWORKS"
                title="Custom-Made Artworks for Interiors & Large Spaces"
                paragraph="Our in-house team of artists creates bespoke artworks specifically designed to complement the purpose and scale of each space—whether it's a cozy home or a grand commercial hall."
              />
            </div>
            {/* <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
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
            </div> */}
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
                paragraph="We provide artistic consulting for interior brands, builders, and individuals helping clients uncover their unique design story through personalized art recommendations, thematic planning, and artist-led concept visualization."
              />
            </div>
            {/* <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
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
            </div> */}
          </aside>
        </section>

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
                paragraph="We design and produce impactful large-scale artworks and theme-based centerpiece installations for public and commercial spaces such as malls, hotels, airports, cafes, and more bringing cultural relevance and visual
storytelling into every environment"
              />
            </div>
            {/* <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
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
            </div> */}
          </aside>
        </section>

        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="ART WORKSHOPS"
                title="Art Workshops & Creative Learning"
                paragraph="Hands-on workshops, corporate events, and team-building sessions focused on mural-making, sculpture, and creative skills."
              />
            </div>
            {/* <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
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
            </div> */}
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
                paragraph="Curated interior décor and unique accessories crockery, rugs, linens, and functional art pieces professionally selected and styled to perfectly complement your design theme."
              />
            </div>
            {/* <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
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
            </div> */}
          </aside>
        </section>

        {/* <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
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
        </section> */}

        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Interior Design and Custom Artwork Services'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
              <div className="grid gap-8">
                <Text
                  value={interiorData.description}
                  textStyle={'SectionParagraph'}
                />
              </div>
              <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
                <li>Custom artworks tailored to your space and story</li>
                <li>Complete turnkey execution from concept to styling</li>
                <li>Eco-friendly alternatives with up to 40% cost savings</li>
                <li>Collaboration with emerging artists and designers</li>
                <li>Fine art integration with lighting and furniture</li>
              </ul>
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
          </aside>
        </section>

        {/* Additional Interior-Specific Section */}
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

                {/* Why Choose Us Section - Redesigned */}
        <section className="grid place-items-center gap-16">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge="WHY CHOOSE US"
              title="Comprehensive Interior Design Excellence"
              description="From custom art creation to eco-friendly solutions, we deliver personalized design stories with seamless execution and creative collaboration."
            />
          </div>

          {/* Grid Layout for Why Choose Us Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Custom Art for Every Space */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiLayout className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Custom Art" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Custom Art for Every Space, Wall murals, sculptures, and installations tailored to your size, style, and story."
              />
            </div>

            {/* Unique Materials & Techniques */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiSettings className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Unique Stuff" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Unique Materials & Techniques, Mixed media, 3D printing, fine finishes, and artistic flooring designed to stand out."
              />
            </div>

            {/* Seamless Art Integration */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiLayers className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Seamless Integration" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Seamless Art Integration, Art that blends naturally with lighting, furniture, and materials for a cohesive look."
              />
            </div>

            {/* Modern Meets Traditional */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiGlobe className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Modern & Traditional" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Modern Meets Traditional, Contemporary takes on textile, fiber art, and handcrafted traditions."
              />
            </div>

            {/* Eco-Friendly & Cost-Smart Solutions */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Eco-Friendly" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Eco-Friendly & Cost-Smart Solutions, Innovative, sustainable alternatives that save up to 40% without compromising beauty, including waste-to-art designs."
              />
            </div>

            {/* Empowering Artists & Creative Collaboration */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiUsers className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Empowering Artists" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Empowering Artists & Creative Collaboration, We hire and mentor emerging artists, forming artist-led teams for large installations and showcasing new talent through exclusive interior projects."
              />
            </div>

            {/* Personalized Design Stories & Concept Development */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300 md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiHeart className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="Personalized Design" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="Personalized Design Stories, We craft unique design themes and narratives that integrate art as a core element, reflecting your identity, purpose, and vision."
              />
            </div>

            {/* End-to-End Execution & Styling */}
            <div className="grid gap-4 p-6 border border-gray-700 rounded-lg hover:border-primary transition-colors duration-300 md:col-span-2 lg:col-span-2" data-aos="fade-up" data-aos-delay="700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FiCheckCircle className="w-6 h-6 text-primary" />
                </div>
                <Text textStyle="FAQTitle" value="End-to-End Execution & Styling" />
              </div>
              <Text
                textStyle="FAQDescription"
                value="From initial concept to final styling, we manage every detail to bring your personalized design story to life seamlessly."
              />
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center" data-aos="fade-up">
            <TextArrowLink label="Service Detail" href="/services-detail?type=interior" />
          </div> */}
        </section>

        <section className="grid place-items-center gap-16">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
            <PageSentence
              badge="FAQ's"
              title="Frequently asked questions about our services"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
            {interiorData.faqs.map((faq) => {
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
              description="Let's discuss your interior design project and create something amazing together. Get a free consultation and personalized quote."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
            <Link href="/contact">
              <a className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center">
                Contact Us
              </a>
            </Link>
          </div>
        </section>


        {/* FUTURE IMPLEMENTATION: Original Simple Design
        This is the original simpler design that was used before implementing the detailed service-detail style design.
        Uncomment this section if you want to revert to the original design. */}



        {/* <LineDivider /> */}


      </PageTemplate>
    </>
  )
}

export default InteriorServices

