import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
// day1
import t1p1 from '../assets/travel/day1/1.jpg';
import t1p2 from '../assets/travel/day1/2.jpg';
import t1p3 from '../assets/travel/day1/3.jpg';
import t1p4 from '../assets/travel/day1/4.jpg';
import t1p5 from '../assets/travel/day1/5.jpg';
import t1p6 from '../assets/travel/day1/6.jpeg';
// day2
import t2p1 from '../assets/travel/day2/2.jpeg';
import t2p2 from '../assets/travel/day2/3.jpg';
import t2p3 from '../assets/travel/day2/4.jpg';
import t2p4 from '../assets/travel/day2/5.jpg';
import t2p5 from '../assets/travel/day2/6.jpg';
import t2p6 from '../assets/travel/day2/7.jpg';
import t2p7 from '../assets/travel/day2/8.jpg';
import t2p8 from '../assets/travel/day2/9.jpg';
import t2p9 from '../assets/travel/day2/10.jpeg';


const Blog = () => {
  const [modalData, setModalData] = useState(null);
  const [currentImages, setCurrentImages] = useState({
    bali: 0,
    tokyo: 0,
    santorini: 0
  });

  const blogPosts = [
    {
      id: 'bali',
      title: 'Exploring Bali',
      description: 'Experience Bali’s vibrant culture, beaches, and hidden gems, from Ubud to Nusa Penida, with breathtaking views and unforgettable adventures.',
      date: 'August 15, 2024',
      images: [
        { src: [t1p1]},
        { src: [t1p2]},
        { src: [t1p3]},
        { src: [t1p4]},
        { src: [t1p5]},
        { src: [t1p6]}
      ]
    },
    {
      id: 'tokyo',
      title: 'Tokyo Adventures',
      description: 'Discover Tokyo’s blend of tradition and modernity, from ancient temples to the bustling Shibuya Crossing, offering a unique cultural experience.',
      date: 'June 10, 2024',
      images: [
        { src: [t2p1]},
        { src: [t2p2]},
        { src: [t2p3]},
        { src: [t2p4]},
        { src: [t2p5]},
        { src: [t2p6]},
        { src: [t2p7]},
        { src: [t2p8]},
        { src: [t2p9]}
      ]
    },
    {
      id: 'santorini',
      title: 'Santorini Sunsets',
      description: 'Explore Santorini’s whitewashed villages, Oia, and stunning volcanic beaches, known for their breathtaking sunsets and serene beauty.',
      date: 'April 20, 2024',
      images: [
        { src: '/assets/santorini_1.jpg', alt: 'Santorini Sunset' },
        { src: '/assets/santorini_2.jpg', alt: 'Santorini Village' },
        { src: '/assets/santorini_3.jpg', alt: 'Santorini Beach' }
      ]
    }
  ];

  const handleCardClick = (post, e) => {
    if (e.target.classList.contains('see-more')) {
      e.preventDefault();
      return;
    }
    setModalData(post);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    const intervals = blogPosts.map(post => {
      let isHovering = false;

      const cardElement = document.getElementById(`blog-card-${post.id}`);
      if (!cardElement) return null;

      const startInterval = () => {
        return setInterval(() => {
          if (isHovering) {
            setCurrentImages(prev => ({
              ...prev,
              [post.id]: (prev[post.id] + 1) % post.images.length
            }));
          }
        }, 1000);
      };

      let intervalId = null;

      cardElement.addEventListener('mouseenter', () => {
        isHovering = true;
        intervalId = startInterval();
      });

      cardElement.addEventListener('mouseleave', () => {
        isHovering = false;
        clearInterval(intervalId);
        setCurrentImages(prev => ({ ...prev, [post.id]: 0 }));
      });

      return intervalId;
    });

    return () => {
      intervals.forEach(intervalId => {
        if (intervalId) clearInterval(intervalId);
      });
    };
  }, [blogPosts]);

  return (
    <section id="blog">
      <div className="container">
        <h2><span className="underline-first-two">Travel</span> & Tours Blog</h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              className="blog-card"
              onClick={e => handleCardClick(post, e)}
            >
              <div className="blog-info">
                <h3>{post.title}</h3>
                <p className="description">{post.description}</p>
                <a href="#" className="see-more">See More</a>
                <p className="date">{post.date}</p>
              </div>
              <div className="blog-images">
                {post.images.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`blog-img ${index === currentImages[post.id] ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!modalData}
        onClose={closeModal}
        title={modalData?.title || ''}
        description={modalData?.description || ''}
        date={modalData?.date || ''}
        images={modalData?.images || []}
      />
    </section>
  );
};

export default Blog;