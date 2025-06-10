import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Copyright © ${currentYear}`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Design By Unicus LLC`}
                textStyle="SectionParagraph"
              />
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/company/unicuscore/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                </a>
                <a href="https://x.com/unicuscore" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <FaTwitter className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                </a>
                <a href="https://www.facebook.com/people/Unicus-Core/61577070007965/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                </a>
                <a href="https://www.instagram.com/unicuscore/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="IT SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Web Development"
                  href="/service/detail"
                />
                <NavLink
                  value="App Development"
                  href="/service/detail"
                />
                <NavLink value="UI Design" href="/service/detail" />
                <NavLink value="Consultation" href="/service/detail" />
                <NavLink value="Maintenance" href="/service/detail" />
                <NavLink value="Pricing" href="/pricing" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="INTERIOR SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Custom-Made Artworks"
                  href="/service/detail"
                />
                <NavLink
                  value="Interior Design"
                  href="/service/detail"
                />
                <NavLink value="Fine Art Integration" href="/service/detail" />
                <NavLink value="Artistic Styling" href="/service/detail" />
                <NavLink value="Eco-Friendly" href="/service/detail" />
                <NavLink value="Empowering Artists" href="/pricing" />
                <NavLink value="Art Workshops" href="/pricing" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="About" href="/about" />
                <NavLink value="Contact" href="/contact" />
                <NavLink value="Enquiry " href="/quote" />
                <NavLink value="Privacy Policy" href="/privacy-policy" />
                <NavLink value="Term of Service" href="/term-of-service" />
                <NavLink value="Jobs" href="/jobs" />
                <NavLink value="Blogs" href="/blog" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="RESOURCES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Support" href="/support" />
                <NavLink value="Documentation" href="/documentation" />
                <NavLink value="License" href="/license" />
                <NavLink value="Sitemap" href="/sitemap" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
