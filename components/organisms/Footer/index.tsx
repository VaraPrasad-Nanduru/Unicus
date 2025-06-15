import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const LinkedInIcon = () => (
  <svg className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5 text-white hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.222 5.238.42a5.893 5.893 0 0 0-2.126 1.384 5.893 5.893 0 0 0-1.384 2.126C1.53 4.41 1.396 4.965 1.356 5.794.318 6.621.308 7.088.308 10.709s.01 4.088.048 4.915c.04.829.174 1.384.372 1.864.204.776.478 1.433.923 1.878.445.445 1.102.719 1.878.923.48.198 1.035.332 1.864.372.827.04 1.294.05 4.915.05s4.088-.01 4.915-.05c.829-.04 1.384-.174 1.864-.372a5.893 5.893 0 0 0 2.126-1.384 5.893 5.893 0 0 0 1.384-2.126c.198-.48.332-1.035.372-1.864.04-.827.05-1.294.05-4.915s-.01-4.088-.05-4.915c-.04-.829-.174-1.384-.372-1.864a5.893 5.893 0 0 0-1.384-2.126A5.893 5.893 0 0 0 18.696.42C18.216.222 17.661.088 16.832.048 16.005.01 15.538 0 11.917 0h.1zm-.717 1.442h.718c3.136 0 3.503.006 4.312.042.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.037.808.043 1.175.043 3.41 0 2.234-.006 2.601-.043 3.41-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.281.11-.705.24-1.485.276-.809.035-1.176.043-3.41.043-2.235 0-2.602-.008-3.41-.043-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.035-.808-.042-1.176-.042-3.41 0-2.235.007-2.602.042-3.41.035-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.708-.031 1.123-.041 3.41-.041zm6.844 1.378a.722.722 0 1 0 0 1.443.722.722 0 0 0 0-1.443zm-5.606 1.389a3.915 3.915 0 1 0-.002 7.83 3.915 3.915 0 0 0 .002-7.83zm0 1.441a2.474 2.474 0 1 1 0 4.948 2.474 2.474 0 0 1 0-4.948z" clipRule="evenodd"/>
  </svg>
);

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
                value={`Design By Unicus Core LLC`}
                textStyle="SectionParagraph"
              />
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/company/unicuscore/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://x.com/unicuscore" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <XIcon />
                </a>
                <a href="https://www.facebook.com/people/Unicus-Core/61577070007965/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/unicuscore/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
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
