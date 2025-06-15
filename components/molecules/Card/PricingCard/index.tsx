import React, { MouseEventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import randomString from 'utils/randomString'

interface Props {
  title: string
  price: string
  features: string[]
  buttonOnclick?: MouseEventHandler<HTMLButtonElement>
}

const PricingCard = ({
  title,
  price,
  features,
  buttonOnclick,
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>()
  const router = useRouter()

  const handleBookNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonOnclick) {
      buttonOnclick(e)
    } else {
      router.push('/contact')
    }
  }

  return (
    <div
      className="w-full h-fit bg-light rounded-[10px] px-10 py-7 flex flex-col place-content-between border-2 border-transparent hover:border-borderLight transition-all duration-300"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center py-8 border-b border-borderLight">
        <Text value={title} textStyle="PricingTitle" />
        {/* <Text value="Starting From" textStyle="PricingSubtitle" /> */}
        {/* <Text value={price} textStyle="PricingPrice" /> */}
      </div>
      <div className="text-center py-9">
        {features.map((feature) => (
          <Text key={randomString(64)} value={feature} textStyle="PricingDetail" />
        ))}
      </div>
      <Button 
        value="Book now" 
        onClick={handleBookNow} 
        color={isHovered ? 'primary' : 'white'} 
      />
    </div>
  )
}

export default PricingCard
