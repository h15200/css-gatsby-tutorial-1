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
import v1 from "../images/coverr-grossglockner-mountain-1572020399016.mp4"

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
    <section className={mainStyles.tours} id="sectionTours">
      <div
        className={`${mainStyles.u_center_text} ${mainStyles.u_margin_bottom_big}`}
      >
        <h2 className={mainStyles.headingSecondary}>Most popular tours</h2>
      </div>
      <div className={mainStyles.row}>
        <div className={`${mainStyles.col_1_of_3} `}>
          <div className={mainStyles.card}>
            <div
              className={`${mainStyles.card_side} ${mainStyles.card_side___front}`}
            >
              <div
                className={`${mainStyles.card_picture} ${mainStyles.card_picture___1}`}
              >
                &nbsp;
              </div>
              <h4 className={`${mainStyles.card_heading}`}>
                <span
                  className={`${mainStyles.card_heading___span} ${mainStyles.card_heading___span___1}`}
                >
                  The Forest Explorer
                </span>
              </h4>
              <div className={mainStyles.card_details}>
                <ul>
                  <li>3 day tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>sleep in cozy hotels</li>
                  <li>Difficulty: very easy</li>
                </ul>
              </div>
            </div>
            <div
              className={`${mainStyles.card_side} ${mainStyles.card_side___back} ${mainStyles.card_side___back___1}`}
            >
              <div className={mainStyles.card_cta}>
                <div className={mainStyles.card_priceBox}>
                  <p className={mainStyles.card_priceOnly}>Only</p>
                  <p className={mainStyles.card_priceValue}>$297</p>
                </div>
                <a
                  href="#popup"
                  className={`${mainStyles.btn} ${mainStyles.btn___white}`}
                >
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={mainStyles.col_1_of_3}>
          <div className={mainStyles.card}>
            <div
              className={`${mainStyles.card_side} ${mainStyles.card_side___front}`}
            >
              <div
                className={`${mainStyles.card_picture} ${mainStyles.card_picture___2}`}
              >
                &nbsp;
              </div>
              <h4 className={mainStyles.card_heading}>
                <span
                  className={`${mainStyles.card_heading___span} ${mainStyles.card_heading___span___2}`}
                >
                  The Waterfall Hunter
                </span>
              </h4>
              <div className={mainStyles.card_details}>
                <ul>
                  <li>7 day tour</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tens</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div
              className={`${mainStyles.card_side} ${mainStyles.card_side___back} ${mainStyles.card_side___back___2}`}
            >
              <div className={mainStyles.card_cta}>
                <div className={mainStyles.card_priceBox}>
                  <p className={mainStyles.card_priceOnly}>Only</p>
                  <p className={mainStyles.card_priceValue}>$497</p>
                </div>
                <a
                  href="#popup"
                  className={`${mainStyles.btn} ${mainStyles.btn___white}`}
                >
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={mainStyles.col_1_of_3}>
          <div className={mainStyles.card}>
            <div
              className={`${mainStyles.card_side} ${mainStyles.card_side___front}`}
            >
              <div
                className={`${mainStyles.card_picture} ${mainStyles.card_picture___3}`}
              >
                &nbsp;
              </div>
              <h4 className={mainStyles.card_heading}>
                <span
                  className={`${mainStyles.card_heading___span} ${mainStyles.card_heading___span___3}`}
                >
                  The desert hiker
                </span>
              </h4>
              <div className={mainStyles.card_details}>
                <ul>
                  <li>5 day tour</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tens</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div
              className={`${mainStyles.card_side} ${mainStyles.card_side___back} ${mainStyles.card_side___back___3}`}
            >
              <div className={mainStyles.card_cta}>
                <div className={mainStyles.card_priceBox}>
                  <p className={mainStyles.card_priceOnly}>Only</p>
                  <p className={mainStyles.card_priceValue}>$897</p>
                </div>
                <a
                  href="#popup"
                  className={`${mainStyles.btn} ${mainStyles.btn___white}`}
                >
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${mainStyles.u_center_text} ${mainStyles.u_margin_bottom_big} ${mainStyles.u_margin_top_huge}`}
      >
        <a href="#" className={`${mainStyles.btn} ${mainStyles.btn___green}`}>
          Discover all tours
        </a>
      </div>
    </section>
    <section className={mainStyles.stories}>
      <div className={mainStyles.bgVideo}>
        <video className={mainStyles.bgVideo_content} autoPlay muted loop>
          <source src={v1} type="video/mp4" />
          Your browser is not supported to play this video!
        </video>
      </div>
      <div
        className={`${mainStyles.u_center_text} ${mainStyles.u_margin_bottom_big}`}
      >
        <h2 className={mainStyles.headingSecondary}>
          We make people geniunely happy
        </h2>
      </div>
      <div className={mainStyles.row}>
        <div className={mainStyles.story}>
          <figure className={mainStyles.story_shape}>
            <img
              src={p1}
              alt="Person on a tour"
              className={mainStyles.story_image}
            />
            <figcaption className={mainStyles.story_caption}>
              Jane Doe
            </figcaption>
          </figure>
          <div className={mainStyles.story_text}>
            <h3
              className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
            >
              I had the best week ever with my family!
            </h3>
            <p className={mainStyles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              accusamus autem reprehenderit minus magni ut officia dolore sit,
              sunt corporis.
            </p>
          </div>
        </div>
      </div>
      <div className={mainStyles.row}>
        <div className={mainStyles.story}>
          <figure className={mainStyles.story_shape}>
            <img
              src={p2}
              alt="Person on a tour"
              className={mainStyles.story_image}
            />
            <figcaption className={mainStyles.story_caption}>
              Jake Doe
            </figcaption>
          </figure>
          <div className={mainStyles.story_text}>
            <h3
              className={`${mainStyles.headingTertiary} ${mainStyles.u_margin_bottom_small}`}
            >
              What a life changing trip!
            </h3>
            <p className={mainStyles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              accusamus autem reprehenderit minus magni ut officia dolore sit,
              sunt corporis.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${mainStyles.u_center_text} ${mainStyles.u_margin_top_huge}`}
      >
        <a href="#" className={`${mainStyles.btnText}`}>
          Read all stories &rarr;
        </a>
      </div>
    </section>
    <section className={mainStyles.booking}>
      <div className={mainStyles.row}>
        <div className={mainStyles.book}>
          <div className={mainStyles.book_form}>
            <form action="#" className={mainStyles.form}>
              <div className={`${mainStyles.u_margin_bottom_medium}`}>
                <h2 className={mainStyles.headingSecondary}>
                  Start Booking Now
                </h2>
              </div>
              <div className={mainStyles.form_group}>
                <input
                  type="text"
                  className={mainStyles.form_input}
                  placeholder="Full Name"
                  autoComplete="off"
                  id="name"
                  required
                />
                <label htmlFor="name" className={mainStyles.form_label}>
                  Full Name
                </label>
              </div>
              <div className={mainStyles.form_group}>
                <input
                  type="email"
                  className={mainStyles.form_input}
                  autoComplete="off"
                  placeholder="email Address"
                  id="email"
                  required
                />
                <label htmlFor="email" className={mainStyles.form_label}>
                  email
                </label>
              </div>
              <div className={`${mainStyles.form_group}`}>
                <div className={mainStyles.form_group_radio}>
                  <input
                    type="radio"
                    className={mainStyles.form_radioInput}
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className={mainStyles.form_radioLabel}>
                    <span className={mainStyles.form_radioButton}></span>
                    Small tour group
                  </label>
                </div>
                <div className={mainStyles.form_group_radio}>
                  <input
                    type="radio"
                    className={mainStyles.form_radioInput}
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className={mainStyles.form_radioLabel}>
                    <span className={mainStyles.form_radioButton}></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className={`${mainStyles.form_group} ${mainStyles.u_margin_top_medium} `} >
                <button
                  className={`${mainStyles.btn} ${mainStyles.btn___green}`}
                >
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Main
