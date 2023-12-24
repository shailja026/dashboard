import React from 'react'
import styles from "../styles/submitpage.module.css"
import {FaCircleCheck} from "react-icons/fa6"
function SubmitPage() {
  return (
    <div className={styles.submitPages}>
    <div>
        Submitted <FaCircleCheck/>
    </div>

</div> 
  )
}

export default SubmitPage