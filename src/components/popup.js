import React from "react"
import popupStyles from "../styles/layout/popup.module.scss"
import p1 from "../images/5.jpg"
import p2 from "../images/6.jpg"

const Popup = () => (
  <div className={popupStyles.popup} id="popup">
    <div className={popupStyles.popup_content}>
      <div className={popupStyles.popup_left}>
        <img src={p1} alt="tour photo" className={popupStyles.popup_img} />
        <img src={p2} alt="tour photo" className={popupStyles.popup_img} />
      </div>
      <div className={popupStyles.popup_right}>
        <a href="#sectionTours" className={popupStyles.popup_close}>&times;</a>
        <h2 className={`${popupStyles.headingSecondary} ${popupStyles.u_margin_bottom_small}`}>Start Booking now</h2>
        <h3 className={`${popupStyles.headingTertiary} ${popupStyles.u_margin_bottom_small}`}>
          Important &ndash; Please read this before booking
        </h3>
        <p className={popupStyles.popup_text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          explicabo asperiores doloremque porro modi consectetur!
        </p>
        <a href="#" className={`${popupStyles.btn} ${popupStyles.btn___green}`}>
          Book now
        </a>
      </div>
    </div>
  </div>
)

export default Popup
