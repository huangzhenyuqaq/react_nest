import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { produce } from "immer";
import styles from "./Star.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";

const Star: FC = () => {
  useTitle("星标问卷");
  const [questList, setQuestList] = useState([
    {
      _id: 5,
      title: "张三",
      isPublished: true,
      isStar: true,
      answerCount: 100,
      createAt: "2023-01-01 23:59:59",
    },
    {
      _id: 6,
      title: "李四",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2023-01-01 23:59:59",
    },
    {
      _id: 7,
      title: "王五",
      isPublished: true,
      isStar: true,
      answerCount: 22,
      createAt: "2023-01-01 23:59:59",
    },
  ]);

  function deleteQuestion(id: number) {
    console.log(id);
    setQuestList(
      produce((draft) => {
        draft.splice(
          draft.findIndex((item) => item._id === id),
          1
        );
      })
    );
  }

  function edQuestion(id: number) {
    setQuestList(
      produce((draft) => {
        const q = draft.find((item) => item._id == id);
        if (q) {
          q.title = "已经阅读问卷";
        }
      })
    );
  }

  return (
    <div className={styles.starPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>星标问卷</h1>
      </div>

      <div className={styles.questionList}>
        {questList.length > 0 &&
          questList.map((item) => (
            <QuestionCard
              deleteQuestion={deleteQuestion}
              edQuestion={edQuestion}
              key={item._id}
              _id={item._id}
              title={item.title}
              isPublished={item.isPublished}
              isStar={item.isStar}
              answerCount={item.answerCount}
              createAt={item.createAt}
            />
          ))}
      </div>

      {questList.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>⭐</div>
          <p className={styles.emptyText}>暂无星标问卷</p>
          <Link to="/manage" className={styles.emptyAction}>
            去收藏问卷
          </Link>
        </div>
      )}
    </div>
  );
};
export default Star;
