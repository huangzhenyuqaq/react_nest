import React, { FC } from "react";
import { Outlet, Link } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { LOGIN_PATHNAME, REGISTER_PATHNAME } from '../router/index'
// import { useNavigate } from 'react-router-dom'

const MainLayout: FC = () => {
  // const navigate = useNavigate()
  // const handleLoginClick = () => {
  //   navigate('/login')
  // }
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>问卷调查系统</div>
          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>首页</Link>
            <Link to="/manage" className={styles.navLink}>管理问卷</Link>
            <Link to={LOGIN_PATHNAME} className={styles.navLink}>登录</Link>
            {/* <button onClick={handleLoginClick} className={styles.navLink}>登录</button> */}
            <Link to={REGISTER_PATHNAME} className={styles.navLink}>注册</Link>
          </nav>
        </div>
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>问卷调查系统 © 2025 All Rights Reserved</p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>关于我们</a>
            <a href="#" className={styles.footerLink}>隐私政策</a>
            <a href="#" className={styles.footerLink}>使用条款</a>
            <a href="#" className={styles.footerLink}>联系我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
