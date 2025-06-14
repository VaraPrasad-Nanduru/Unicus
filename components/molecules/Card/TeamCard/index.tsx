import Text from 'components/atoms/Text'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'

interface TeamCardProps {
  imageSrc: string
  name: string
  job: string
  linkedinUrl?: string
}

const TeamCard = ({ imageSrc, job, name, linkedinUrl }: TeamCardProps) => {
  const container: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [imageSize, setImageSize] = useState({ width: 328, height: 356 })
  
  useEffect(() => {
    const handleResize = () => {
      if (container.current?.clientWidth !== undefined) {
        setImageSize({
          width: container.current?.clientWidth,
          height: container.current?.clientWidth * 1.085,
        })
      }
    }

    // Initial size calculation
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkedInClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="w-full rounded-md overflow-hidden" ref={container}>
      <div className="w-full relative">
        <Image
          width={imageSize.width}
          height={imageSize.height}
          src={imageSrc}
          quality={80}
          alt="Team Avatar"
        />
      </div>
      <div className="w-full bg-light px-8 py-7 grid gap-2">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Text textStyle="TeamName" value={name} />
            <Text textStyle="TeamJob" value={job} />
          </div>
          {linkedinUrl && (
            <button
              onClick={handleLinkedInClick}
              className="ml-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label={`View ${name}'s LinkedIn profile`}
            >
              <FaLinkedin size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamCard
