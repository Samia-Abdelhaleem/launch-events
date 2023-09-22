import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Event.module.css";
import Button from "../Ui/Button";
import DateIcon from "../Icons/date-icon";
import AddressIcon from "../Icons/address-icon";
import ArrowRightIcon from "../Icons/arrow-right-icon";
const Event = ({ event }) => {
  const { id, title, image, date, address } = event;
  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedAddress = String(address).replace(", ", "\n");
  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} width={200} height={200} />
      <div className={styles.content}>
        <div className={styles.content}>
          <h2> {title}</h2>
          <div className={styles.date}>
            <DateIcon /> <time> {formattedDate} </time>
          </div>
          <div className={styles.address}>
            <AddressIcon /> <address> {formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>{" "}
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>{" "}
          </Button>{" "}
        </div>
      </div>
    </li>
  );
};

export default Event;
