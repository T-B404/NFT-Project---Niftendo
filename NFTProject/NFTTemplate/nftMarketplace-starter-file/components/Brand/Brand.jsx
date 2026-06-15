import React from 'react'
import Image from 'next/image'

// INTERNAL IMPORT
import Style from './Brand.module.css'
import images from '../../img'
import { Button } from '../componentindex'

const Brand = () => {
  return (
    <div className={Style.brand}>
        <div className={Style.brand_box}>
            <div className={Style.brand_box_left}>
                <div className={Style.logo}>
                    <Image 
                    src={images.newlogo}
                    alt="logo"
                    height={50}
                    width={50}
                />
                <div className={Style.brandname}>Niftendo</div>
                </div>
                
                <h1>Earn free crypto with Niftendo</h1>
                <p>A creative industry that leads and inspires.</p>

                <div className={Style.brand_box_left_btn}>
                    <Button btnName='Create' handleClick={()=>{}}/>
                    <Button btnName='Discover' handleClick={()=>{}}/>
                </div>
            </div> 

            <div className={Style.brand_box_right}>
                <Image src={images.earn} alt='Brand' width={800} height={600}/>
            </div>
        </div> 
    </div>
  )
}

export default Brand