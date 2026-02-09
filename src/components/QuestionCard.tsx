import React, { FC } from "react";
import classNames from "classnames";
import styles from "./QuestionCard.module.scss";
import { Popconfirm, Modal, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { updateQuestionService } from "../services/question";
import { useRequest } from "ahooks";

type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  deleteQuestion: (id: string) => void;
};
const { confirm } = Modal;
const QuestionCard: FC<PropsType> = (props) => {
  const navigate = useNavigate();
  const {
    _id,
    title,
    isPublished,
    isStar,
    answerCount,
    createAt,
    deleteQuestion,
  } = props;

  // function starQuestion(id: string) {
  //   // 标星取消标星 调用接口updateQuestionService，使用useRequest

  //   const {run:updateQuestion}=useRequest(async ()=>await updateQuestionService(id),{
  //     manual:true,
  //     onSuccess(result){
  //       message.success(result.msg)
  //     }
  //   })
    
  // }
  const { loading:changeStarLoading,run: starQuestion } = useRequest(
    async () => await updateQuestionService(_id,{isStar: isStar}),
    { manual: true,
      onSuccess(result) {
        console.log("result",result);
        message.success(result.msg);
      },
     }
  );

  function delQuestion(id: string) {
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
        <button className={styles.editBtn} onClick={() => starQuestion()} disabled={changeStarLoading}> 
          {isStar ? "取消标星" : "标星"}
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
