import React from "react"
import gridStyles from "../styles/components/grid.module.scss"

const gridTest = () => (
  <section className={gridStyles.gridTest}>
    <div className={gridStyles.row}>
      <div className={gridStyles.col_1_of_2}>Col 1 of 2</div>
      <div className={gridStyles.col_1_of_2}>Col 1 of 2</div>
    </div>

    <div className={gridStyles.row}>
      <div className={gridStyles.col_1_of_3}>Col 1 of 3</div>
      <div className={gridStyles.col_1_of_3}>Col 1 of 3</div>
      <div className={gridStyles.col_1_of_3}>Col 1 of 3</div>
    </div>

    <div className={gridStyles.row}>
      <div className={gridStyles.col_1_of_3}>Col 1 of 3</div>
      <div className={gridStyles.col_2_of_3}>Col 2 of 3</div>
    </div>

    <div className={gridStyles.row}>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
    </div>

    <div className={gridStyles.row}>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
      <div className={gridStyles.col_2_of_4}>Col 2 of 4</div>
    </div>

    <div className={gridStyles.row}>
      <div className={gridStyles.col_1_of_4}>Col 1 of 4</div>
      <div className={gridStyles.col_3_of_4}>Col 3 of 4</div>
    </div>
  </section>
)

export default gridTest
