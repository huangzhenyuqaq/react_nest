import React, { FC } from "react";
import classNames from "classnames";
import styles from "./QuestionCard.module.scss";
import { Popconfirm, Modal } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

type PropsType = {
  _id: number;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  deleteQuestion: (id: number) => void;
  edQuestion: (id: number) => void;
};
const { confirm } = Modal;
const QuestionCard: FC<PropsType> = (props) => {
  const {
    _id,
    title,
    isPublished,
    isStar,
    answerCount,
    createAt,
    deleteQuestion,
    edQuestion,
  } = props;

  function editQuestion(id: number) {
    edQuestion(id);
  }

  function delQuestion(id: number) {
    console.log(id);
    confirm({
      title: "确认删除吗？",
      okText: "确认",
      icon: <UserAddOutlined />,
      cancelText: "取消",
      onOk: () => deleteQuestion(id),
    });
  }

  const cardClassName = classNames(styles.questionCard, {
    [styles.published]: isPublished,
  });

  return (
    <div className={cardClassName}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          {isStar && <span className={styles.star}>*</span>}
          <strong className={styles.title}>{title}</strong>
        </div>
        <div className={styles.statusBadge}>
          <span
            className={
              isPublished ? styles.publishedTag : styles.unpublishedTag
            }
          >
            {isPublished ? "已发布" : "未发布"}
          </span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>回答人数:</span>
          <span className={styles.infoValue}>{answerCount}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>最后回答日期:</span>
          <span className={styles.infoValue}>{createAt}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => editQuestion(_id)}>
          编辑问卷
        </button>
        {/* <Popconfirm
          title="确认删除吗？"
          onConfirm={() => delQuestion(_id)}
          okText="确认"
          cancelText="取消"
        >
          <button className={styles.deleteBtn}>删除</button>
        </Popconfirm> */}
        <button className={styles.deleteBtn} onClick={() => delQuestion(_id)}>删除</button>
      </div>
    </div>
  );
};

export default QuestionCard;
