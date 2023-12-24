import React, { useState } from "react";
import styles from "../styles/createads.module.css";
import adMedia from "../assets/meadiAd.png";
import textMedia from "../assets/adText.png";
function CreateAds() {
  const [checkedText, setCheckedText] = useState(false);
  const [checkedMedia, setCheckedMedia] = useState(false);

  const handleChangeText = () => {
    setCheckedText(!checkedText);
  };
  const handleChangeMedia = () => {
    setCheckedMedia(!checkedMedia);
  };
  return (
    <div className={styles.adsSections}>
      <p>Create ads</p>
      <div className={styles.adBox}>
        <div className={styles.adversite}>
          <input
            type="checkbox"
            checked={checkedText}
            onChange={handleChangeText}
            className={styles.checkbox}
          />
          <img src={textMedia} alt="" />
          <p>create</p>
          <button>Text Ad</button>
        </div>
        <div className={styles.adversite}>
          <input
            type="checkbox"
            checked={checkedMedia}
            onChange={handleChangeMedia}
            className={styles.checkbox}
          />
          <img src={adMedia} alt="" />
          <p>create</p>
          <button>Media Ad</button>
        </div>
      </div>
      <button >Next</button>
    </div>
  );
}

export default CreateAds;
