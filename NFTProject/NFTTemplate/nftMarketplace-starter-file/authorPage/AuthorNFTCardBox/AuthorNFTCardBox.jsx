import React,{useState} from 'react'

// INTERNAL IMPORT
import Style from './AuthorNFTCardBox.module.css'
import images from '../../img'
import {NFTCardTwo} from '../../collectionPage/collectionIndex'
import FollowerTabCard from '../../components/FollowerTab/FollowerTabCard/FollowerTabCard'

const AuthorNFTCardBox = ({
    collectiables,
    created,
    like,
    follower,
    following
}) => {
    const collectiablesArray=[
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]
    const createdArray=[
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]
    const likeArray=[
        images.nft_image_1,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]
    const followerArray=[
        {
            background: images.creatorbackground1,
            user: images.user10
        },
        {
            background: images.creatorbackground10,
            user: images.user4
        },
        {
            background: images.creatorbackground7,
            user: images.user2
        },
        {
            background: images.creatorbackground5,
            user: images.user7
        },
        {
            background: images.creatorbackground9,
            user: images.user9
        },
        {
            background: images.creatorbackground6,
            user: images.user3
        },
    ]
    const followingArray=[
        {
            background: images.creatorbackground10,
            user: images.user5
        },
        {
            background: images.creatorbackground8,
            user: images.user4
        },
        {
            background: images.creatorbackground5,
            user: images.user3
        },
        {
            background: images.creatorbackground4,
            user: images.user2
        },
        {
            background: images.creatorbackground6,
            user: images.user1
        },
    ]
  return (
    <div className={Style.AuthorNFTCardBox}>
        {collectiables && <NFTCardTwo NFTData={collectiablesArray}/>}
        {created && <NFTCardTwo NFTData={createdArray}/>}
        {like && <NFTCardTwo NFTData={likeArray}/>}
        {follower && (
            <div className={Style.AuthorNFTCardBox_box}>
                {followerArray.map((el,i)=>{
                    <FollowerTabCard el={el} i={i}/>
                })}
            </div>
        )}
        {following && (
            <div className={Style.AuthorNFTCardBox_box}>
                {followerArray.map((el,i)=>{
                    <FollowerTabCard el={el} i={i}/>
                })}
            </div>
        )}
    </div>
  )
}

export default AuthorNFTCardBox