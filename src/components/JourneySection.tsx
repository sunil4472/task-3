import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { journeyCardsData } from '../data/journeyData'

export const JourneySection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const renderCardContent = (card: any, index: number, isHovered: boolean) => {
    const isTopCard = index < 2
    const currentContent = isTopCard && isHovered ? {
      title: card.altTitle,
      subtitle: card.altSubtitle,
      description: card.altDescription,
      imageUrl: card.altImageUrl,
    } : {
      title: card.title,
      subtitle: card.subtitle,
      description: card.description,
      imageUrl: card.imageUrl,
    }

    return (
      <div className="flex flex-row w-full h-full">
        {(index === 0 || index === 2) ? (
          <>
            {/* Illustration */}
            <div className={`relative shadow-drop-shadow-xlarge transition-transform duration-300 ${
              !isTopCard ? 'animate-float' : ''
            } ${index === 0 ? 'w-[257px] h-[339px]' : 'w-[307px] h-[250px] ml-[-49px] mt-[106px]'}`}>
              <img
                src={currentContent.imageUrl}
                alt={`${currentContent.title} illustration`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col w-[351px] items-end justify-center gap-8 p-[58px]">
              <div className="flex flex-col items-end justify-center gap-2.5 w-full">
                <h3 className="font-bold text-neutral-50 text-2xl">
                  {currentContent.title}
                </h3>
                <p className=" w-full  text-white text-xl text-center ">
                  {currentContent.subtitle}
                </p>
              </div>
              <p className=" text-neutral-50 text-right ">
                {currentContent.description}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Content */}
            <div className={`flex flex-col items-start justify-center gap-8 p-[1px] ${
              index === 1 ? 'w-[351px]' : 'w-[337px]'
            }`}>
              <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                <h3 className="text-neutral-50 text-2xl text-center w-full">
                  {currentContent.title}
                </h3>
                <p className=" text-white">
                  {currentContent.subtitle}
                </p>
              </div>
              <p className=" text-neutral-50">
                {currentContent.description}
              </p>
            </div>

            {/* Illustration */}
            <div className={`relative shadow-drop-shadow-xlarge ml-auto transition-transform duration-300 ${
              !isTopCard ? 'animate-float' : ''
            } ${index === 1 ? 'w-[180px] h-[367px]' : 'w-[280px] h-[311px] rotate-[6.05deg] mt-[67px]'}`}>
              <img
                src={currentContent.imageUrl}
                alt={`${currentContent.title} illustration`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <main className="bg-white flex flex-row justify-center w-full">
      <section className="bg-white w-full max-w-[1440px]">
        <div className="flex flex-col w-full items-center pt-[120px] pb-[60px] px-4 relative bg-neutral-50">
          <div className="flex flex-col w-full max-w-[1213px] items-start relative">
            <div className="flex flex-col w-full items-start gap-12 relative">
              {/* Header Section */}
              <header className="flex flex-col w-full max-w-[453px] items-start gap-6 relative">
                <h2 className="relative self-stretch  text-[#414141]">
                  Your SkillShikshya Journey
                </h2>

                <h1 className="relative self-stretch">
                  <span className="text-[#1da077] text-2xl font-bold
                  ">
                    Step{" "}
                  </span>
                  <span className="text-[#2a2a2a] text-2xl font-bold">
                    In.
                  </span>
                  <span className="text-[#1da077] text-2xl font-bold">
                    {" "}Skill{" "}
                  </span>
                  <span className="text-[#2a2a2a] text-2xl font-bold">
                    Up.
                  </span>
                  <span className="text-[#1da077] text-2xl font-bold">
                    {" "}Stand{" "}
                  </span>
                  <span className="text-[#2a2a2a] text-2xl font-bold">
                    Out.
                  </span>
                  <span className="text-[#1da077] text-2xl font-bold">
                    {" "}🚀
                  </span>
                </h1>
              </header>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* First Column */}
                <div className="flex flex-col gap-8">
                  {/* Card 1 - Top Left with slide animation */}
                  <div className="relative overflow-hidden mt-2">
                    <Card 
                      className="w-full h-[341px] rounded-[30px] overflow-hidden shadow-none border-0 cursor-pointer transition-transform duration-500 ease-in-out"
                      onMouseEnter={() => setHoveredCard(0)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardContent className={`p-0 h-full flex ${journeyCardsData[0].bgColor} relative`}>
                        {/* Original content */}
                        <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                          hoveredCard === 0 ? '-translate-x-full' : 'translate-x-0'
                        }`}>
                          {renderCardContent(journeyCardsData[0], 0, false)}
                        </div>
                        
                        {/* Alternate content */}
                        <div className={`absolute ml-10 inset-0 transition-transform duration-500 ease-in-out ${
                          hoveredCard === 0 ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                          {renderCardContent(journeyCardsData[0], 0, true)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Card 3 - Bottom Left with floating animation */}
                  <Card className="w-full h-[341px] rounded-[30px] overflow-hidden shadow-none border-0">
                    <CardContent className={`p-0 h-full flex ${journeyCardsData[2].bgColor}`}>
                      {renderCardContent(journeyCardsData[2], 2, false)}
                    </CardContent>
                  </Card>
                </div>

                {/* Second Column */}
                <div className="flex flex-col gap-8">
                  {/* Card 2 - Top Right with slide animation */}
                  <div className="relative overflow-hidden">
                    <Card 
                      className="w-full h-[341px] rounded-[30px] overflow-hidden shadow-none border-0 cursor-pointer transition-transform duration-500 ease-in-out"
                      onMouseEnter={() => setHoveredCard(1)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardContent className={`p-2 h-full flex ${journeyCardsData[1].bgColor} relative`}>
                        {/* Original content */}
                        <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                          hoveredCard === 1 ? '-translate-x-full' : 'translate-x-0'
                        }`}>
                          {renderCardContent(journeyCardsData[1], 1, false)}
                        </div>
                        
                        {/* Alternate content */}
                        <div className={`absolute mr-10 inset-0 transition-transform duration-500 ease-in-out ${
                          hoveredCard === 1 ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                          {renderCardContent(journeyCardsData[1], 1, true)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Card 4 - Bottom Right with floating animation */}
                  <Card className="w-full h-[341px] rounded-[30px] overflow-hidden shadow-none border-0">
                    <CardContent className={` h-full flex p-4 ${journeyCardsData[3].bgColor}`}>
                      {renderCardContent(journeyCardsData[3], 3, false)}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}