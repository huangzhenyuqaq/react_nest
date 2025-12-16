import React, { FC } from "react";
import { Outlet, Link, useLocation } from 'react-router-dom'
import styles from './ManageLayout.module.scss'

const ManageLayout: FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/manage') {
      return location.pathname === '/manage';
    }
    return location.pathname.includes(path);
  };

  return (
    <div className={styles.manageLayout}>
      <div className={styles.manageLayoutLeft}>
        <h2 className={styles.sidebarTitle}>问卷管理</h2>
        <Link to="/question/create">
          <button className={styles.createBtn}>+ 创建问卷</button>
        </Link>
        <nav className={styles.navList}>
          <Link
            to="/manage/list"
            className={`${styles.navLink} ${isActive('/manage/list') ? styles.active : ''}`}
          >
            📋 我的问卷
          </Link>
          <Link
            to="/manage/star"
            className={`${styles.navLink} ${isActive('/manage/star') ? styles.active : ''}`}
          >
            ⭐ 星标问卷
          </Link>
          <Link
            to="/manage/trash"
            className={`${styles.navLink} ${isActive('/manage/trash') ? styles.active : ''}`}
          >
            🗑️ 回收站
          </Link>
        </nav>
      </div>
      <div className={styles.manageLayoutRight}>
        <Outlet />
      </div>
    </div>
  );
};
export default ManageLayout;
