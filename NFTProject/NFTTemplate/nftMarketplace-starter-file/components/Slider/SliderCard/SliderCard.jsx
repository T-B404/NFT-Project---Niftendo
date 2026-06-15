import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

// INTERNAL IMPORT
import Style from './SliderCard.module.css'
import images from '../../../img'
import LikeProfile from '../../LikeProfile/LikeProfile'

const SliderCard = ({el,i}) => {
  return (
    <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
            <motion.div className={Style.sliderCard_box_img}>
                <Image
                    src={images.creatorbackground10}
                    className={Style.sliderCard_box_img_img}
                    alt='Slider Profile'
                    width={500}
                    height={300}
                    objectFit={'cover'}
                />
            </motion.div>

            <div className={Style.sliderCard_box_title}>
                
                <div className={Style.sliderCard_box_title_like}>
                    <p>NFT card video #1245</p>
                    {<LikeProfile/>}
                    <small>1 out of 100</small>
                </div>
            
                <div className={Style.sliderCard_box_price}>
                    <div className={Style.sliderCard_box_price_box}>
                        <small>Current Bid</small>
                        <p>1 ETH</p>
                    </div>
                </div>

                <div className={Style.sliderCard_box_price_time}>
                    <small>Remaining Time</small>
                    <p>3h : 15m : 20s</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default SliderCard