import React, { FC, useEffect, useState } from "react";

import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";
import { Empty, Spin } from "antd";
import { getQuestionListService } from "../../services/question";
import useLoadSearchListData from "../../hooks/useLoadSearchList";
import { useRequest } from "ahooks";
// import {useSearchParams} from 'react-router-dom';

const List1: FC = () => {
  useTitle("我的问卷");
  useEffect(() => {
    searchList()
  }, [])
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("keyword",searchParams.get("keyword"))
  // const [questList, setQuestList] = useState([]);
  // const [total, setTotal] = useState(0);

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { searchList,loading, data, error  } = useLoadSearchListData({keyword,page,pageSize});
  const { list = [], total = 0 } = data || {};
  // const { data={},loading}=useLoadQuestionListData()
 
  function deleteQuestion(id: string) {
    console.log(id);
  }

  return (
    <div className={styles.listPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>我的问卷</h1>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="请输入问卷标题"
          className={styles.searchInput}
          id="title_input"
        />
        <button
          className={styles.searchButton}
          onClick={() => searchList()}
        >
          搜索
        </button>
      </div>

      <div>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spin />
          </div>
        )}
        <div className={styles.questionList}>
          {!loading &&
            list.length > 0 &&
            list.map((item: any) => (
              <QuestionCard
                deleteQuestion={deleteQuestion}
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
      </div>

      {!loading && list.length === 0 && (
        <Empty description="暂无问卷，快去创建一个吧" />
      )}
    </div>
  );
};

export default List1;
