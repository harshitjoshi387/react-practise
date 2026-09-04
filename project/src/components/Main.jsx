import React from 'react'
import Card from './Card'

const Main = () => {
  const cardsData = [
    {
      id: 1,
      number: 1,
      bgColor: '#d97706',
      bgImage: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', // Add your Image 1 URL here
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.',
      tagText: 'Satisfied',
      tagBg: '#3b82f6'
    },
    {
      id: 2,
      number: 2,
      bgColor: '#78716c',
      bgImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww', // Add your Image 2 URL here
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.',
      tagText: 'Underserved',
      tagBg: '#10b981'
    },
    {
      id: 3,
      number: 3,
      bgColor: '#1e3a8a',
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', // Add your Image 3 URL here
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.',
      tagText: 'Underbanked',
      tagBg: '#3b82f6'
    }
  ]

  return (
    <main className="main-cards-container">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          number={card.number}
          bgColor={card.bgColor}
          bgImage={card.bgImage}
          text={card.text}
          tagText={card.tagText}
          tagBg={card.tagBg}
        />
      ))}
    </main>
  )
}

export default Main
