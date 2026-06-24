import React,{useState,useEffect,useCallback} from 'react';
import Image from 'next/image';
import {AiFillFire,AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
import {MdVerified,MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLines,TbArrowBigRightLine} from 'react-icons/tb';

// INTERNAL IMPORT
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from '../Button/Button'


const BigNFTSlider = () => {
    const [idNumber,setIdNumber] = useState(0);
    const sliderData = [
        {
            title:"Hello NFT",
            id: 1,
            name: 'Tasneem Bharmal',
            collection: 'Astra',
            price: '00667 ETH',
            like: 243,
            image: images.user3,
            nftImage: images.nft_image_1,
            time:{
                day:21,
                hour:40,
                minute:45,
                second:17
            }
        },
        {
            title:"Buddy NFT",
            id: 2,
            name: 'Vidhi Akvaliya',
            collection: 'Dream',
            price: '00004 ETH',
            like: 123,
            image: images.user2,
            nftImage: images.nft_image_2,
            time:{
                day:77,
                hour:11,
                minute:21,
                second:45
            }
        },
        {
            title:"Cloud NFT",
            id: 3,
            name: 'Aadil Khan',
            collection: 'SkyIII',
            price: '0000065 ETH',
            like: 24,
            image: images.user1,
            nftImage: images.nft_image_3,
            time: {
                day: 37,
                hour: 20,
                minute: 11,
                second: 55,
            },
        },
        {
            title:"Gem NFT",
            id: 4,
            name: 'Ryan Black',
            collection: 'SkyIII',
            price: '465 ETH',
            like: 249,
            image: images.user7,
            nftImage: images.nft_image_1,
            time: {
                day: 87,
                hour: 29,
                minute: 10,
                second: 15,
            },
        }
    ]

    // ----- INC
    const inc = useCallback(()=>{
        if(idNumber+1 < sliderData.length){
            setIdNumber(idNumber+1)
        }
    },[idNumber,sliderData.length]);

    // ----- DEC
    const dec = useCallback(()=>{
        if(idNumber>0){
            setIdNumber(idNumber-1)
        }
    },[idNumber]);
  return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image
                            className={Style.bigNFTSlider_box_left_creator_profile_img}
                            src = {sliderData[idNumber].image}
                            alt='Profile image'
                            width={50}
                            height={50}
                        />
                        <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                            <p>Creator</p>
                            <h4>
                                {sliderData[idNumber].name}{' '}
                                <span>
                                    <MdVerified/>
                                </span>
                            </h4>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                        <p>Collection</p>
                        <h4>{sliderData[idNumber].collection}</h4>
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>
                            {sliderData[idNumber].price} <span>$221,21</span>
                        </p>
                    </div>

                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                        <span>Auction ending in</span>
                    </p>

                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.day}</p>
                            <span>Days</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hour}</p>
                            <span>Hours</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minute}</p>
                            <span>Minutes</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.second}</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                
                    <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName='Place' handleClick={()=>{}}/>
                        <Button btnName='View' handleClick={()=>{}}/>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines 
                        className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                        onClick={()=>dec()}
                        />
                        <TbArrowBigRightLine
                        className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                        onClick={()=>inc()}
                        />
                    </div>
                </div>
            </div>
            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image
                        src={sliderData[idNumber].nftImage}
                        alt='NFT IMAGE'
                        width={500}
                        height={500}
                        className={Style.bigNFTSlider_box_right_box_img}
                    />
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                        <AiFillHeart/>
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider;