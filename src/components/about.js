import React from "react"
import aboutStyles from "../styles/layout/about.module.scss"
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'


const About = () => (
  <section className={aboutStyles.about}>
    <div className={`${aboutStyles.u_center_text} ${aboutStyles.u_margin_bottom_big}`}>
      <h2 className={aboutStyles.headingSecondary}>
        Exciting Tours for adventurous people
      </h2>
    </div>
    <div className={aboutStyles.row}>
      <div className={aboutStyles.col_1_of_2}>
        <h3 className={`${aboutStyles.headingTertiary} ${aboutStyles.u_margin_bottom_small}`}>
          You&apos;re going to fall in love with nature
        </h3>
        <p className={aboutStyles.p}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          cumque doloremque neque blanditiis vero tempore animi. Ullam maxime
          quo illum similique nulla. Autem corrupti, ea a tempore quis nobis
          ipsa!
        </p>
        <h3 className={`${aboutStyles.headingTertiary} ${aboutStyles.u_margin_bottom_small}`}>
          Live adventures like you never have before
        </h3>
        <p className={aboutStyles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum
          earum neque rem quo id dolor dolorem ipsa, commodi eaque harum
          accusantium minima...
        </p>
        <a href="#" className={aboutStyles.btnText}>Learn more &rarr;</a>
      </div>
      <div className={aboutStyles.col_1_of_2}>
        <div className={aboutStyles.composition}>
          <img src={p1} alt="a river" className={`${aboutStyles.composition_photo} ${aboutStyles.composition_photo___1}`}/>
          <img src={p2} alt="a row boat on a lake" className={`${aboutStyles.composition_photo} ${aboutStyles.composition_photo___2}`}/>
          <img src={p3} alt="a meadow" className={`${aboutStyles.composition_photo} ${aboutStyles.composition_photo___3}`}/>
        </div>
      </div>
    </div>
  </section>
)

export default About
