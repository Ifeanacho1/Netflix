import React from 'react'
import "./css/Header.css"

const Header = () => {
  return (
    <>
      <header>
        <section className='Headsection'>
            <div className='Netflixdiv'>
                <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className='Logo'/>
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

      <section className='Trendingsection'>
            <h1 className='Trending'>Trending Now</h1>
      </section>

      <main>
        <div className='Imgdiv'>
            <img src="https://occ-0-5544-300.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT79Mi0iWWtYi-57TpyWlexVfLyGglHcQknKS_qF5RsRxldAflHZj1RiYT6895R-ssNAnKe-QpJV7de--OtapTkh6sGbuDOHCkq0XFA4_KVWvWDCn9_Ff9P-i2cGkBINRLBN.webp?r=09b" alt="" className='War'/>
            <img src="https://occ-0-5544-300.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcwMiAXNKvtzgN1Kx06ht1pT-yTXiVSQy0BKogrxRHkSiGZlRtWZbq2ROt1kkWqfM2PWVvgDNFMw73KTzVFP0dnMIY1MsQEVJIeBdS5U2PG52vbiBsX9ajBuOg6ZrWR1H_X-.webp?r=df5" alt="" className='One'/>
            <img src="https://occ-0-5544-300.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTwx-qzAEBk_Gz9d9z_-EmEmJyEDjsMvUFtPIFpvGm69jEecKo7ZBeEqGXUuEtHKpiVKeOOk5H5eOJlEqZwdsjqbAB27AeSbS6Q.webp?r=083" alt="" className='Anikulapo'/>
            <img src="https://occ-0-5544-300.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS8lvW_8XfYxgwQWyQZyy_B-NvtRCUUlhTuz-Sbypa6tQzYX1T1105FjdIjSuIW0bYR47h-5QYkxtw9ziu1Pcdt9XQ-Eymm9K2ucRo8C865uJLGRfkU9qEG6wa7cAxoKWr-n.webp?r=04e" alt="" className='Fatal'/>
            <img src="https://occ-0-5544-300.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd8ThhhZFczQuxhXg-s_mbY8I_nTg5ql8aqeKL3dGHDVWATazJ2WZw8joFUCT9fj6px3Uev34xyJFwrDo6J8L361vCM59aHJA6jGALni1U_pkGLwPamI59RMyriKxPkOcKEK.webp?r=d62" alt="" className='The'/>
        </div>
        <div>
            
        </div>
      </main>
    </>
  )
}

export default Header
