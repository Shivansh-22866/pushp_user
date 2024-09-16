import React from 'react'

const Story1 = () => {
  return (
    <div>
        <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Kalpana Devi: Madhubani Artist from Bihar</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <img src="https://yesno.in/cdn/shop/products/radha-krishna-madhubani-painting-13574306824257_1024x1024.jpg?v=1584718493" alt="Kalpana Devi working on a Madhubani painting" className="w-full h-[28rem] object-cover rounded-md mb-4" />
          <p className="text-gray-700 mb-4">
            Kalpana Devi, a renowned Madhubani artist from Madhubani district in Bihar, has been practicing this ancient art form for over three decades. Her journey began as a young girl, learning the intricate patterns and techniques from her grandmother.
          </p>
          <p className="text-gray-700 mb-4">
            Madhubani painting, also known as Mithila painting, is characterized by complex geometrical patterns and depictions of nature and Hindu religious motifs. Kalpana&quot;s work stands out for its vibrant use of natural dyes and unique storytelling elements.
          </p>
          <p className="text-gray-700">
            Today, Kalpana not only creates stunning artwork but also teaches the next generation, ensuring that this rich tradition continues to thrive in the modern world.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Kalpana&quot;s Artistic Journey</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Learned Madhubani painting from her grandmother at the age of 10</li>
            <li>Won her first national award for excellence in Madhubani art in 1995</li>
            <li>Conducted workshops across India and abroad, promoting Madhubani art</li>
            <li>Established a school in Madhubani to teach the art form to local youth</li>
            <li>Her works have been exhibited in prestigious galleries in Delhi, Mumbai, and New York</li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; 2024 Indian Artisan Showcase. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Story1