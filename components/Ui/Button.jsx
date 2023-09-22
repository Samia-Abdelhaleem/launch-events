import Link from "next/link";
import React from "react";
import styles from "../../styles/Button.module.css";
const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link} className={styles.btn}>
        {" "}
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {" "}
        {props.children}
      </button>
    );
  }
};

export default Button;
