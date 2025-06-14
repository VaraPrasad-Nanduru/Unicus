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
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="space-y-5 lg:w-1/3">
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
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/company/unicuscore/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" />
                </a>
                <a href="https://x.com/unicuscore" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <FaTwitter className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" />
                </a>
                <a href="https://www.facebook.com/people/Unicus-Core/61577070007965/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/unicuscore/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:w-2/3">
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-3">
                <NavLink value="About" href="/about" />
                <NavLink value="IT Services" href="/it-services" />
                <NavLink value="Interior Services" href="/interior-services" />
              </div>
            </div>

            <div className="space-y-5">
              <Text value="Other" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-3">
                <NavLink value="Contact Us" href="/contact" />
                <NavLink value="How We Work" href="/how-we-work" />
              </div>
            </div>

            <div className="space-y-5">
              <Text value="RESOURCES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-3">
                <NavLink value="Terms and Conditions" href="/term-of-service" />
                <NavLink value="Privacy Policy" href="/privacy-policy" />
                <NavLink value="Terms of use" href="/terms-of-use" />
              </div>
            </div>

            <div className="space-y-5">
              {/* <Text value="MORE" textStyle="FooterLinkGroupTitle" /> */}
              <div className="space-y-3">
                {/* <NavLink value="Jobs" href="/jobs" /> */}
                {/* <NavLink value="Blogs" href="/blog" /> */}
                {/* <NavLink value="Sitemap" href="/sitemap" /> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}


export default Footer
