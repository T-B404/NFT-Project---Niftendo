import React from 'react';
import Image from 'next/image';
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti'
import {RiSendPlaneFill} from 'react-icons/ri'

// INTERNAL IMPORT 
import Style from './Footer.module.css'
import images from '../../img'
import {Discover,HelpCenter} from '../Navbar/index'

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <div className={Style.logo}>
            <Image src={images.newlogo} alt='footer logo' height={37} width={37}/>
            <div className={Style.brandname}>Niftendo</div>
          </div>
          
          <p>
            Niftendo is your marketplace to discover, collect, and sell
            extraordinary NFTs. Buy, sell, and explore exclusive digital items.
          </p>

          <div className={Style.footer_social}>
            <a href='#'><TiSocialFacebook/></a>
            <a href='#'><TiSocialLinkedin/></a>
            <a href='#'><TiSocialTwitter/></a>
            <a href='#'><TiSocialYoutube/></a>
            <a href='#'><TiSocialInstagram/></a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type='email' placeholder='Enter your email *'/>
            <RiSendPlaneFill className={Style.subscribe_box_send}/>
          </div>

          <div className={Style.subscribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs on Niftendo — your
              digital marketplace for unique collectibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer