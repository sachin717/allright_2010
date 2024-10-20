import * as React from 'react'
function Blogs() {
    const Blogs=[
        {
            image: '/blog_2.png',  // Replace with correct image paths
            title: 'How much Protein should you have everyday?',
            readTime: '3 MIN READ',
          },
          {
            image: '/blog_3.png',
            title: 'Fuel your Day Right: Importance of a Nutrient Rich Breakfast',
            readTime: '3 MIN READ',
          },
          {
            image: '/blog_1.jpg',
            title: 'Is the food we eating really nutritious?',
            readTime: '3 MIN READ',
          },
    ]
    return (
        <>
  <div className="nutriread-container">
      <h1 className="nutriread-title">Nutri Read</h1>
      <div className="nutriread-cards">
        {Blogs.map((article, index) => (
          <div key={index} className="card">
            <img src={article.image} alt={article.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{article.title}</h2>
              {article.readTime && <p className="card-read-time">{article.readTime}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}
export default Blogs