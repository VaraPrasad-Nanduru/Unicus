import React, { useEffect, useState } from 'react'
import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import Container from 'components/templates/Container'
import { FiMenu, FiX } from 'react-icons/fi'
import UAParser from 'ua-parser-js'
import useMobileDeviceDetection from 'hooks/useMobileDetection'
import useGetBrowserName from 'hooks/useGetBrowserName'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const browserName = useGetBrowserName()
  const isMobile = useMobileDeviceDetection()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('h-screen', 'overflow-y-hidden')
    } else {
      document.body.classList.remove('h-screen', 'overflow-y-hidden')
    }
  }, [isOpen])
  return (
    <>
      <nav
        className={`pt-8 w-full top-0 left-0 z-30 ${isScrolled ? 'fixed' : 'absolute'
          }`}
      >
        <Container>
          <div
            className={`${browserName == 'Firefox' ? 'bg-gray-900' : 'bg-light'
              } px-4 sm:px-6 py-4 w-full rounded-md backdrop-blur-3xl ${isScrolled || isOpen ? '' : 'lg:bg-transparent lg:px-0'
              }`}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <NavBrand />
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div
                    className={`text-white text-2xl ${isMobile ? 'cursor-default' : 'cursor-pointer'
                      }`}
                  >
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>
              </div>
              <div
                className={`${isOpen ? 'flex' : 'hidden'
                  } flex-col space-y-4 mt-6 lg:mt-0 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 xl:space-x-8 lg:place-items-center`}
              >
                <NavLink href="/" value="Home" canActive={true} />
                <NavLink href="/about" value="About" canActive={true} />
                <NavLink
                  href="/erp-services"
                  value="ERP Services"
                  canActive={true}
                />
                <NavLink
                  href="/it-services"
                  value="IT Services"
                  canActive={true}
                />
                <NavLink
                  href="/interior-services"
                  value="Interior Services"
                  canActive={true}
                />
                <NavLink
                  href="/how-we-work"
                  value="How We Work"
                  canActive={true}
                />
                {/* <NavLink href="/project" value="Project" canActive={true} /> */}
              </div>
              <div
                className={`${isOpen ? 'block' : 'hidden'
                  } lg:block mt-6 lg:mt-0 lg:ml-4`}
              >
                <ButtonLink
                  value="Contact Us"
                  style="light"
                  color="white"
                  size="small"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBar
