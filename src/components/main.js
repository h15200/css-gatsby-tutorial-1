import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGlobe,
  faCompass,
  faMap,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"

import mainStyles from "../styles/layout/main.module.scss"
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"

const Main = () => (
  <Fragment>
    <section className={mainStyles.about}>
      <div
        className={`${mainStyles.u_center_text} ${mainStyles.u_margin_bottom_big}`}
      >
        <h2 className={mainStyles.headingSecondary}>
          Exciting Tours for adventurous people
        </h2>
      </div>
      <div className={mainStyles.row}>
        <div className={mainStyles.col_1_of_2}>
          <h3
            className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
          >
            You&apos;re going to fall in love with nature
          </h3>
          <p className={mainStyles.p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur cumque doloremque neque blanditiis vero tempore animi.
            Ullam maxime quo illum similique nulla. Autem corrupti, ea a tempore
            quis nobis ipsa!
          </p>
          <h3
            className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
          >
            Live adventures like you never have before
          </h3>
          <p className={mainStyles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            cum earum neque rem quo id dolor dolorem ipsa, commodi eaque harum
            accusantium minima...
          </p>
          <a href="#" className={mainStyles.btnText}>
            Learn more &rarr;
          </a>
        </div>
        <div className={mainStyles.col_1_of_2}>
          <div className={mainStyles.composition}>
            <img
              src={p1}
              alt="a river"
              className={`${mainStyles.composition_photo} ${mainStyles.composition_photo___1}`}
            />
            <img
              src={p2}
              alt="a row boat on a lake"
              className={`${mainStyles.composition_photo} ${mainStyles.composition_photo___2}`}
            />
            <img
              src={p3}
              alt="a meadow"
              className={`${mainStyles.composition_photo} ${mainStyles.composition_photo___3}`}
            />
          </div>
        </div>
      </div>
    </section>
    <section className={mainStyles.features}>
      <div className={mainStyles.row}>
        <div className={`${mainStyles.col_1_of_4}`}>
          <div className={mainStyles.featureBox}>
            <FontAwesomeIcon
              icon={faGlobe}
              className={mainStyles.featureBox_icon}
            />
            <h3
              className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
            >
              Explore the world
            </h3>
            <p className={mainStyles.featureBox_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              dolorum optio expedita in veritatis eveniet!
            </p>
          </div>
        </div>
        <div className={mainStyles.col_1_of_4}>
          <div className={mainStyles.featureBox}>
            <FontAwesomeIcon
              icon={faCompass}
              className={mainStyles.featureBox_icon}
            />
            <h3
              className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
            >
              Meet nature
            </h3>
            <p className={mainStyles.featureBox_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              dolorum optio expedita in veritatis eveniet!
            </p>
          </div>
        </div>
        <div className={mainStyles.col_1_of_4}>
          <div className={mainStyles.featureBox}>
            <FontAwesomeIcon
              icon={faMap}
              className={mainStyles.featureBox_icon}
            />
            <h3
              className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
            >
              Find your way
            </h3>
            <p className={mainStyles.featureBox_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              dolorum optio expedita in veritatis eveniet!
            </p>
          </div>
        </div>
        <div className={mainStyles.col_1_of_4}>
          <div className={mainStyles.featureBox}>
            <FontAwesomeIcon
              icon={faHeart}
              className={mainStyles.featureBox_icon}
            />
            <h3
              className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
            >
              live a healthier life
            </h3>
            <p className={mainStyles.featureBox_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              dolorum optio expedita in veritatis eveniet!
            </p>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Main
