import React from 'react';
import d1 from '../assets/travel/day1/2.jpg';
import d2 from '../assets/travel/day2//4.jpg';
import d3 from '../assets/travel/day3/6.jpg';

const Blog = () => {
  const blogs = [
    {
      title: "Manila's Rich Heritage",
      description: "The tour began at Luneta Park with the Rizal Monument, followed by visits to Intramuros, Manila Cathedral, and Fort Santiago—highlighting Manila’s heritage and the role of digital preservation in honoring history.",
      coverPhoto: [d1],
      link: "https://medium.com/@example/road-less-traveled"
    },
    {
      title: "Innovation in Subic",
      description: "The Subic tour showcased its transformation from a U.S. naval base to a self-governing economic zone through smart urban planning and technological innovation.",
      coverPhoto: [d2],
      link: "https://medium.com/@example/stunning-wedding-dresses"
    },
    {
      title: "Heritage Innovation",
      description: "Focused on the Philippines' heritage, featuring Lolong’s story and Quezon's legacy through tech-enhanced exhibits.",
      coverPhoto: [d3],
      link: "https://medium.com/@example/giant-redwood"
    }
  ];

  return (
    <section id="blog">
      <div className="container">
        <h2><span className="underline-first-two">INDUST</span><span>RY</span> VISIT & EDUCATIONAL TOUR BLOG</h2>
        <div className="blog-grid-top">
          {blogs.slice(0, 3).map((blog, index) => (
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              key={index}
            >
              <div className="blog-cover">
                <img
                  src={blog.coverPhoto}
                  alt={`${blog.title} cover`}
                  className="blog-img"
                />
              </div>
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p className="description">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="blog-grid-bottom">
          {blogs.slice(3, 5).map((blog, index) => (
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              key={index + 3}
            >
              <div className="blog-cover">
                <img
                  src={blog.coverPhoto}
                  alt={`${blog.title} cover`}
                  className="blog-img"
                />
              </div>
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p className="description">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
        <a
            href="https://ivetblog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="more-stories-link"
          >
            VISIT BLOG SITE <i className="fa-solid fa-up-right-from-square" style={{ marginLeft: '8px' }}></i>
          </a>

      </div>
    </section>
  );
};

export default Blog;