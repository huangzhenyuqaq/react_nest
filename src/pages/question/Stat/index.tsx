import React, { FC } from "react";
import styles from './index.module.scss';

const Stat: FC = () => {
  return (
    <div className={styles.statPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>问卷统计</h1>
        <p className={styles.pageDesc}>查看问卷的详细数据统计和分析</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>1,234442222245</div>
          <div className={styles.statLabel}>总回答数111</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>856</div>
          <div className={styles.statLabel}>有效回答</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>69%</div>
          <div className={styles.statLabel}>完成率</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>3.5 分钟</div>
          <div className={styles.statLabel}>平均时长</div>
        </div>
      </div>

      <div className={styles.chartPlaceholder}>
        <div className={styles.placeholderIcon}>📊</div>
        <p className={styles.placeholderText}>数据图表</p>
        <p className={styles.placeholderHint}>统计图表将在这里展示</p>
      </div>
    </div>
  );
};
export default Stat;
