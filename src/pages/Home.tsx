import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MANAGE_INDEX_PATHNAME, REGISTER_PATHNAME } from "../router";

const Home: FC = () => {
  const navigate = useNavigate();
  function goManage() {
    navigate(MANAGE_INDEX_PATHNAME);
  }
  function goRegister() {
    navigate(REGISTER_PATHNAME);
  }
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>专业的在线问卷调查平台</h1>
        <p className={styles.heroSubtitle}>
          轻松创建、分发和分析问卷，收集有价值的反馈数据
          <br />
          让数据驱动您的决策，助力业务增长
        </p>
        <div className={styles.ctaButtons}>
          {/* <Link to="/manage" className={styles.primaryBtn}>
            开始创建问卷
          </Link> */}
          <Button
            type="primary"
            size="large"
            onClick={() => goManage()}
          >
            开始创建问卷
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={() => goRegister()}
          >
            免费注册
          </Button>
          {/* <Link to="/register" className={styles.secondaryBtn}>
            免费注册
          </Link> */}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>📝</div>
          <h3 className={styles.featureTitle}>简单易用</h3>
          <p className={styles.featureDesc}>
            直观的拖拽式编辑器，无需编程知识，轻松创建专业问卷
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>📊</div>
          <h3 className={styles.featureTitle}>数据分析</h3>
          <p className={styles.featureDesc}>
            实时统计图表，多维度数据分析，让洞察一目了然
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🔒</div>
          <h3 className={styles.featureTitle}>安全可靠</h3>
          <p className={styles.featureDesc}>
            企业级数据加密，保护您的隐私和数据安全
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚀</div>
          <h3 className={styles.featureTitle}>高效协作</h3>
          <p className={styles.featureDesc}>
            支持团队协作，多人共同编辑和管理问卷项目
          </p>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10,000+</div>
            <div className={styles.statLabel}>活跃用户</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50,000+</div>
            <div className={styles.statLabel}>创建问卷</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1,000,000+</div>
            <div className={styles.statLabel}>收集回复</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>服务可用性</div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
