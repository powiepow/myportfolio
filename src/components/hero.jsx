import React from 'react';
import Profile from"../assets/profile.png";
import AboutMe from"../assets/aboutme.png";
import Work from"../assets/work.jpg";
import Work1 from"../assets/work1.jpg";
import Contact from"../assets/contact-img.png";

const Hero = () => {
  return (
    // home
    <>
    <section id='home'>
      <div className='home-name'>
          <p>Hey there <span className="wave-hand">👋</span></p>
          <h1>I'm<span className='nickname'>Pawpatrol</span></h1>
          <p className='fd'>Frontend Developer</p>
        <div className='contact-btn'>
          <a href="#contact"><button>Contact Me</button></a>
        </div>
      </div>

      <div className='home-profile'>
          <img src={Profile} alt="" />
      </div>

      <div className='home-social'>
        <div className='vertical-line'></div>
        <div className='social-icon'>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
        </div>
      </div>
    </section>

    {/* about */}
    <section id='about'>
      <div className='about-container'>
          <div className="about-img">
              <img src={AboutMe} alt="" />
          </div>

          <div className="about-txt">
              <h1>ABOUT ME</h1>
              <h2>PADWA TINGKASAN - FRONTEND DEVELOPER</h2>
              <p> A frontend developer who enjoys building user-friendly and visually appealing web applications. I’m still learning and improving my skills, but I have experience working with HTML, CSS, JavaScript, and some frontend framework like React Js.
              <br /><br />I love exploring new technologies and figuring out how to create better user experiences. Right now, I’m focused on improving my understanding of responsive design, performance optimization, and accessibility.
              <br /> <br />I’m always open to learning new things and growing as a developer. Looking forward to working on exciting projects and gaining more experience along the way!
              </p>
          </div>
      </div>
    </section>

    {/* skill */}
    {/* <section id='skill'>
      <div className='txt-title'>
        <h1>MY <span>SKILLS</span></h1>
      </div>

      <div className='skill-list'>
        <div className='skill-1'>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-html5"></i>
            </div>
            <h2>HTML</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-css3-alt"></i>
            </div>
            <h2>CSS</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-bootstrap"></i>
            </div>
            <h2>Bootstrap</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fas fa-wind"></i> 
            </div>
            <h2>Tailwind</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-js"></i>
            </div>
            <h2>JavaScript</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fas fa-code"></i> 
            </div>
            <h2>JQuery</h2>
          </div>
        </div>

        <div className='skill-1'>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-react"></i>
            </div>
            <h2>ReactJs</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-php"></i>
            </div>
            <h2>PHP</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-python"></i>
            </div>
            <h2>Django</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fas fa-database"></i>
            </div>
            <h2>MySQL</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fas fa-database"></i>
            </div>
            <h2>SQL</h2>
          </div>
          <div className='skill-con'>
            <div className='skill-img'>
              <i className="fab fa-github"></i>
            </div>
            <h2>GitHub</h2>
          </div>
        </div>
      </div>
    </section> */}

    {/* work */}
    {/* <section id='work'>
      <div className='work-container'>

        <div className='work-header'>
          <div className='header-txt'>
            <h2>Latest <span>works.</span></h2>
          </div>
        </div>

        <div className='work-list'>

          <div className='work-1'>
            <div className='work-img'>
              <img src={Work1} alt="" />
            </div>
            <div className='work-txt'>
                <h2 className='title'>QUIZ</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, consequatur voluptas amet maiores dolore quam accusamus est quis ipsa unde assumenda tempore eos, asperiores id esse, minus commodi eum nam?
                  
                </p>
                <button>Preview</button>
            </div>
          </div>

          <div className='work-1'>
            <div className='work-img'>
              <img src={Work} alt="" />
            </div>
            <div className='work-txt'>
                <h2 className='title'>WEBCRAFT</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, consequatur voluptas amet maiores dolore quam accusamus est quis ipsa unde assumenda tempore eos, asperiores id esse, minus commodi eum nam?
                  
                </p>
                <button>Preview</button>
            </div>
          </div>

          <div className='work-1'>
            <div className='work-img'>
              <img src={Work} alt="" />
            </div>
            <div className='work-txt'>
                <h2 className='title'>WEBCRAFT</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, consequatur voluptas amet maiores dolore quam accusamus est quis ipsa unde assumenda tempore eos, asperiores id esse, minus commodi eum nam?
                  
                </p>
                <button>Preview</button>
            </div>
          </div>
        </div>

      </div>
    </section> */}

    {/* contact */}
    {/* <section id='contact'>
      <div className='contact-container'>

        <div className='con-left'>
          <h2>Hi, wanna have a quick chat? <i class="fas fa-comment-dots"></i></h2>
          <p>I reply within 2 days <i class="fas fa-grin-beam"></i></p>
          <div className='con-img'>
            <img src={Contact} alt="" />
          </div>
        </div>    

        <div className='con-right'>
          <div className='con-title'>
              <h1>Contact</h1>
              <div className='con-me'>
               <div className='horizontal-line'></div>
                <h1>Me</h1>
              </div>
          </div>

          <div className='con-field'>
            <input type="text" placeholder='Your name' />
            <input type="email" placeholder='Your email' />
            <textarea name="" placeholder='Your message here'></textarea>
            <button type='submit'>SUMBIT</button>
          </div>

          <div className='con-icon'>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
        </div>
        
        </div>  

      </div>
    </section> */}
    </>
  );
};

export default Hero;
