import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import {TbPlayerPlay,TbPlayerPause} from 'react-icons/tb'

// INTERNAL IMPORT
import Style from './AudioCard.module.css'
import images from '../../../img'
import LikeProfile from '../../LikeProfile/LikeProfile'

const AudioCard = () => {
    const [like,setLike] = useState(false)
    const [play,setPlay] = useState(false)

    const likeNFT=()=>{
        if(!like){
            setLike(true)
        }
        else{
            setLike(false)
        }
    }

    const playMusic = ()=>{
        if(!play){
            setPlay(true)
        }
        else{
            setPlay(false)
        }
    }
  return (
    <div className={Style.audioCard}>
        <div className={Style.audioCard_box}>
            <div className={Style.audioCard_box_like_time}>
                <div className={Style.audioCard_box_like} onClick={()=>likeNFT()}>
                    {like?(<AiFillHeart className={Style.audioCard_box_like_icon}/>):
                    (<AiOutlineHeart className={Style.audioCard_box_like_icon_unlike}/>)}
                    <span>24</span>
                </div>

                <div className={Style.audioCard_box_time}>
                    <div className={Style.audioCard_box_like_time_remaining} style={{transform:'skewX(-30deg)'}}>
                        <small>Remaining Time</small>
                        <h5>3h : 15m : 20s</h5>
                    </div>
                </div>
            </div>

            <div className={Style.audioCard_box_player}>
                <Image src={images.musiceWave} alt='Music' width={200}/>
                <div className={Style.audioCard_boxmusicPlayer} onClick={()=>playMusic()}>
                    {play?
                        (
                            <div className={Style.audioCard_box_player_icon}>
                                <TbPlayerPause/>
                            </div>
                        ):(
                            <div className={Style.audioCard_box_player_icon}>
                                <TbPlayerPlay/>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={Style.audioCard_box_details}>
                <div className={Style.audioCard_box_details_info}>
                    <h4>NFT Music #1123</h4>
                    <div className={Style.audioCard_box_details_info_price}>
                        <small>Price</small>
                        <p>$3221.33</p>
                    </div>
                </div>

                <div className={Style.audioCard_box_details_stock}>
                    <LikeProfile/>
                    <small>24 in Stock</small>
                </div>
            </div>

            <div className={Style.audioCard_box_img}>
                <Image
                    src={images.creatorbackground10}
                    alt='background'
                    width={500}
                    height={500}
                />
            </div>
        </div>
    </div>
  )
}

export default AudioCard