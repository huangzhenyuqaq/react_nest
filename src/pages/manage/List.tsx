import React, { FC, useState, useEffect } from "react";
import { produce } from "immer";

import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";
import { Empty } from 'antd';
// import {useSearchParams} from 'react-router-dom';

const List1: FC = () => {
  useTitle("我的问卷");
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("keyword",searchParams.get("keyword"))
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

  useEffect(() => {
    console.log("执行了");
  }, [questList]);

  function addQuestion(id: number) {
    const title_input = document.getElementById(
      "title_input"
    ) as HTMLInputElement;
    setQuestList(
      produce((draft) => {
        draft.push({
          _id: id,
          title: title_input.value,
          isPublished: false,
          isStar: false,
          answerCount: 0,
          createAt: "2023-01-01 23:59:59",
        });
      })
    );
    title_input.value = '';
  }

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
    <div className={styles.listPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>我的问卷</h1>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="请输入问卷标题"
          id="title_input"
        />
        <button
          className={styles.addBtn}
          onClick={() => addQuestion(questList.length + 1)}
        >
          + 添加问卷
        </button>
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

      {questList.length === 0 && <Empty description="暂无问卷，快去创建一个吧" />}
    </div>
  );
};

export default List1;
