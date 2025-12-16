import React, { FC, useState } from "react";
import styles from "./Trash.module.scss";
import { Table, Empty } from "antd";

const Trash: FC = () => {
  const [questList, setQuestList] = useState([
    {
      _id: 1,
      title: "张三",
      isPublished: true,
      isStar: true,
      answerCount: 100,
      createAt: "2023-01-01 23:59:59",
    },
    {
      _id: 2,
      title: "李四",
      isPublished: false,
      isStar: false,
      answerCount: 10,
      createAt: "2023-01-01 23:59:59",
    },
    {
      _id: 3,
      title: "王五",
      isPublished: true,
      isStar: true,
      answerCount: 22,
      createAt: "2023-01-01 23:59:59",
    },
  ]);
  const tableColumns = [
    {
      title: "问卷标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      key: "isPublished",
    },
    {
      title: "是否收藏",
      dataIndex: "isStar",
      key: "isStar",
    },
    {
      title: "回答次数",
      dataIndex: "answerCount",
      key: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
      key: "createAt",
    },
  ];
  return (
    <div className={styles.trashPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>回收站</h1>
        
        <p className={styles.pageDesc}>
          已删除的问卷将保留30天，之后将永久删除
        </p>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🗑️</div>
        {questList.length === 0 && (
          <p className={styles.emptyText}>回收站为空</p>
        )}
        {questList.length > 0 && (
          <Table
            columns={tableColumns}
            dataSource={questList}
            pagination={false}
          />
        )}
        <p className={styles.emptyHint}>删除的问卷将出现在这里</p>
      </div>
    </div>
  );
};
export default Trash;
