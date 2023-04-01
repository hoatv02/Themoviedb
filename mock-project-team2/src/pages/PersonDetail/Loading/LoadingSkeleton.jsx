/* eslint-disable react/prop-types */
import React from "react"
import styles from "./Loading.module.css"
export const LoadingMovie = ({ className = "" }) => {
  return (
    <div className={`${styles.skeleton} ${className}`}>
      <div className={`${styles.image} ${className}`}></div>
      <div className={`${styles.line} ${className}`}></div>
      <div className={`${styles.line} ${className}`}></div>
    </div>
  )
}

export const LoadingTitle = () => {
  return (
    <div className={`${styles.ui_layout}`}>
      <div className={`${styles.ui_layout__sections}`}>
        <div className={`${styles.ui_layout__section} ${styles.ui_layout__section__primary}`}>
          <div className={`${styles.ui_layout__item}`}>
            <section className={`${styles.ui_card} ${styles.reports_index_card}`}>
              <div className={`${styles.loading_wrapper}`}>
                <div className={`${styles.title_block}`}>
                  <div className={`${styles.loading} ${styles.title}`}></div>
                  <div className={`${styles.loading} ${styles.title}`}></div>
                  <div className={`${styles.loading} ${styles.content}`}></div>
                  <div className={`${styles.loading} ${styles.content}`}></div>
                  <div className={`${styles.loading} ${styles.content}`}></div>
                  <div className={`${styles.loading} ${styles.content}`}></div>
                  <div className={`${styles.loading} ${styles.content}`}></div>
                  <div className={`${styles.loading} ${styles.content}`}></div>
                  <div className={`${styles.loading} ${styles.content} ${styles.last_row}`}></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LoadingInformations = () => {
  return (
    <div className={styles.aa}>
      <div className={`${styles.coverInfor} ${styles.skeletonInfor}`}>
      </div>
      <div className={`${styles.contentInfor}`}>
        <div className={`${styles.listLink} flex`}>
          <span className={styles.icon}></span>
          <span className={styles.icon}></span>
          <span className={styles.icon}></span>
        </div>
        <div className={styles.titleInfor}></div>
        <div className={styles.knowfor}></div>
        <div className={styles.contentKnowFor}></div>
        <div className={styles.knowfor}></div>
        <div className={styles.contentKnowFor}></div>
        <div className={styles.knowfor}></div>
        <div className={styles.contentKnowFor}></div>
        <div className={styles.knowfor}></div>
        <div className={styles.contentKnowFor}></div>
        <div className={styles.knowfor}></div>
        <div className={styles.contentKnowFor}></div>
        <div className={styles.knowfor}></div>
        <div className={styles.contentKnowFor}></div>
        <div className={styles.titleInfors}></div>
        <div className={styles.titleInfors}></div>
        <div className={styles.titleInfors}></div>
      </div>
    </div>
  )
}



export const LoadingListYear = () => {
  return (
    <div className={`${styles.year}`}>
      <div className={`${styles.acting}`}>
        <div className={`${styles.s}`}></div>
        <div className={`${styles.listact}`}></div>
      </div>
      <div className={styles.lineY}></div>
      <div className={styles.lineY}></div>
      <div className={styles.lineY}></div>
      <div className={styles.lineY}></div>
      <div className={styles.lineY}></div>
      <div className={styles.lineY}></div>
      <div className={styles.lineY}></div>
    </div>
  )
}