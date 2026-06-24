import React from 'react'
import Image from 'next/image'

// INTERNAL IMPORT
import Style from './Notification.module.css'
import images from '../../../img'

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p className={Style.notification_title}>Notifications</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_avatar}>
          <Image
            src={images.user1}
            alt='profile image'
            width={48}
            height={48}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Tasneem Bharmal</h4>
          <p>Welcome to Niftendo! Your NFT collection is ready to explore.</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new} aria-label='Unread' />
      </div>
    </div>
  )
}

export default Notification
