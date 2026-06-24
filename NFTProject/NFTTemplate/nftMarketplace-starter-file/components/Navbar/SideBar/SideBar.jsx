import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GrClose} from 'react-icons/gr'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti'

// INTERNAL UPDATE
import Style from './SideBar.module.css'
import images from '../../../img'
import Button from '../../Button/Button'
import HelpCenter from '../HelpCenter/HelpCenter'

const SideBar = ({setOpenSideMenu}) => {
  const [openDiscover,setOpenDiscover]=useState(false)
  const [openHelp,setOpenHelp] = useState(false)

  // DISCOVER NAVIGATION MENU
  const discover = [
    {
      name:"Collection",
      link:'collection'
    },
    {
      name:"Search",
      link:'search'
    },
    {
      name:"Author Profile",
      link:'author'
    },
    {
      name:"NFT Details",
      link:'NFT-details'
    },
    {
      name:"Account Setting",
      link:'account'
    },
    {
      name:"Connect Wallet",
      link:'connectWallet'
    },
    {
      name:"Blog",
      link:'blog'
    }
  ]

  // HELP CENTER MENU
   const helpCenter = [
    {
      name:'About',
      link:'about'
    },
    {
      name:'Contact Us',
      link:'contactus'
    },
    {
      name:'Sign Up',
      link:'signUp'
    },
    {
      name:'Sign In',
      link:'login'
    },
    {
      name:'Subscription',
      link:'subscription'
    },
  ]

  const openDiscoverMenu=()=>{
    if(!openDiscover){
      setOpenDiscover(true)
    }
    else{
      setOpenDiscover(false)
    }
  }

  const openHelpMenu=()=>{
    if(!openHelp){
      setOpenHelp(true)
    }
    else{
      setOpenHelp(false)
    }
  }

  const closeSideBar = ()=>{
    setOpenSideMenu(false)
  }
  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={()=>closeSideBar()}/>
      <div className={Style.sideBar_box}>
        <div className={Style.sideBar_logo}>
          <Image src={images.newlogo} alt='Niftendo' height={37} width={37} />
          <span className={Style.sideBar_brandname}>Niftendo</span>
        </div>
        <p>Discover, collect, and sell NFTs on Niftendo.</p>
        <div className={Style.sideBar_social}>
          <a href='#'><TiSocialFacebook/></a>
          <a href='#'><TiSocialLinkedin/></a>
          <a href='#'><TiSocialTwitter/></a>
          <a href='#'><TiSocialYoutube/></a>
          <a href='#'><TiSocialInstagram/></a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openDiscoverMenu()}>
            <p>Discover</p>
            {openDiscover ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el,i)=>(
                  <p key={i+1}>
                    <Link href = {{pathname:`${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>

        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openHelpMenu()}>
            <p>Help Center</p>
            {openHelp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el,i)=>(
                  <p key={i+1}>
                    <Link href = {{pathname:`${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName='Create' handleClick={()=>{}}/>
        <Button btnName='Connect Wallet' handleClick={()=>{}}/>
      </div>
    </div>
  )
}

export default SideBar