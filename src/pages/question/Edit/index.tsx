import React, { FC, useEffect, useState } from "react";
import styles from './index.module.scss';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';



const Edit: FC = () => {
  const {loading, data}=useLoadQuestionData()
  return (
    <div className={styles.editPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>编辑问卷</h1>
        <p className={styles.pageDesc}>设计您的问卷，添加各种类型的问题</p>
      </div>

      <div>
        {loading ? <p>loading</p> : <p>{(data as any).title}</p>}
      </div>
    </div>
  );
};
export default Edit;
