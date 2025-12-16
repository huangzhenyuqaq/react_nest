import React, { FC } from "react";
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
// import {useSearchParams} from 'react-router-dom';

const Login: FC = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>欢迎回来</h1>
        <p className={styles.subtitle}>登录您的账户以继续使用</p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>用户名</label>
            <input
              type="text"
              className={styles.input}
              placeholder="请输入用户名"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>密码</label>
            <input
              type="password"
              className={styles.input}
              placeholder="请输入密码"
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotLink}>忘记密码?</a>
          </div>

          <button type="submit" className={styles.submitBtn}>
            登录
          </button>
        </form>

        <div className={styles.footer}>
          还没有账户?
          <Link to="/register" className={styles.registerLink}>立即注册</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
