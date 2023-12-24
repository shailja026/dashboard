import React, { useState } from "react";
import styles from "../styles/textmedia.module.css";
import { useNavigate } from "react-router-dom";
import SubmitPage from "./SubmitPage";
function TextMediaForm() {
  const navigate = useNavigate();
  const [submitPage, setSubmitPage] = useState(false);
  const backToMedia = () => {
    navigate("/adds");
  };
  const submitThePage = () => {
    if (!submitPage) { 
        setSubmitPage(true); 
        setTimeout(() => {
          navigate("/adds"); 
        }, 6000);
      }
  };

  return (
    <>
      {submitPage ? (
        <SubmitPage />
      ) : (
        <>
          <div className={styles.textBox}>
            <p>Create text & media</p>

            <form action="" className={styles.formData}>
              <div>
                {" "}
                <label htmlFor="">Heading 01</label>
                <input
                  type="text"
                  placeholder="Add a heading that will make your user interest "
                />
              </div>
              <div>
                <label htmlFor="">Heading 02</label>
                <input
                  type="text"
                  placeholder="Add a heading that will make your user interest "
                />
              </div>
              <div>
                <label htmlFor="">Business Name</label>
                <input type="text" placeholder="Add your business name" />
              </div>
              <div>
                <label htmlFor="">Website URL</label>
                <input
                  type="text"
                  placeholder="Add a heading that will make your user interest "
                />
              </div>
              <div>
                <label htmlFor="">Description </label>
                <input
                  type="text"
                  placeholder="Add a heading that will make your user interest "
                />
              </div>

              <div>
                {" "}
                <label htmlFor="">Button Tabel</label>
                <input
                  type="text"
                  placeholder="Add a heading that will make your user interest "
                />
              </div>
            </form>
          </div>
          <div className={styles.submitbox}>
            <button onClick={backToMedia}>Back</button>
            <button onClick={submitThePage}>Submit</button>
          </div>
        </>
      )}
    </>
  );
}

export default TextMediaForm;
