import React, { FC } from "react";
import styles from './index.module.scss';
import { useParams } from 'react-router-dom';

const Edit: FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  return (
    <div className={styles.editPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>编辑问卷</h1>
        <p className={styles.pageDesc}>设计您的问卷，添加各种类型的问题</p>
      </div>

      <div className={styles.editorPlaceholder}>
        <div className={styles.placeholderIcon}>✏️</div>
        <p className={styles.placeholderText}>问卷编辑器</p>
        <p className={styles.placeholderHint}>拖拽组件到此处开始设计您的问卷</p>
      </div>
    </div>
  );
};
export default Edit;
