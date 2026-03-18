import React from 'react'
import "./css/Header.css"

const Header = () => {
  return (
    <>
      <header>
        <section className='Headsection'>
            <div className='Netflixdiv'>
                <h1 className='Netflix'>Netflix</h1>
            </div>
            <div className='Signdiv'>
                <button className='Sign'>Sign In</button>
            </div>
        </section>
        <article>
            <h1 className='Unlimited'>Unlimited movies, TV</h1>
            <h2 className='Shows'>shows, and more</h2>
            <h3 className='Starts'>Starts at ₦2,500. Cancel anytime.</h3>
            <h4 className='Ready'>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='inputdiv'>
                <input type="Search" placeholder=" Email address"/>
                <button className='Get'>Get Started</button>
            </div>
        </article>
      </header>
      <main>
        
      </main>
    </>
  )
}

export default Header
