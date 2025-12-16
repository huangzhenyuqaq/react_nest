import React, { FC } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundCard}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.errorTitle}>页面未找到</h1>
        <p className={styles.errorDesc}>
          抱歉,您访问的页面不存在或已被移除
          <br />
          请检查网址是否正确
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            返回首页
          </Link>
          <button
            className={styles.secondaryBtn}
            onClick={() => navigate(-1)}
          >
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
