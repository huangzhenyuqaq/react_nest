import React, { FC } from "react";
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';

const Register: FC = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerCard}>
        <h1 className={styles.title}>创建账户</h1>
        <p className={styles.subtitle}>开始您的问卷调查之旅</p>

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
            <label className={styles.label}>邮箱</label>
            <input
              type="email"
              className={styles.input}
              placeholder="请输入邮箱地址"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>密码</label>
            <input
              type="password"
              className={styles.input}
              placeholder="请输入密码 (至少6位)"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>确认密码</label>
            <input
              type="password"
              className={styles.input}
              placeholder="请再次输入密码"
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            注册
          </button>
        </form>

        <div className={styles.footer}>
          已有账户?
          <Link to="/login" className={styles.loginLink}>立即登录</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
