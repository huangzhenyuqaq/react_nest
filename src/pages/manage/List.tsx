import React, { FC, useEffect, useState } from "react";

import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { useTitle } from "ahooks";
import { Empty, Spin, Input, Button,Pagination } from "antd";
import type { PaginationProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useLoadSearchListData from "../../hooks/useLoadSearchList";

const List1: FC = () => {
  useTitle("我的问卷");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    searchList();
  }, [page, pageSize]);


  const { searchList, loading, data, error } = useLoadSearchListData({
    keyword,
    page,
    pageSize,
  });
  const { list = [], total = 0 } = data || {};

  function deleteQuestion(id: string) {
    console.log(id);
  }
  const onChangePage: PaginationProps["onChange"] = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className={styles.listPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>我的问卷</h1>
      </div>

      <div className={styles.searchBar}>
        <Input
          placeholder="请输入问卷标题"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button
          onClick={() => {
            setPage(1);
            searchList();
          }}
          type="primary"
          icon={<SearchOutlined />}
        >
          搜索
        </Button>
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
        
      <div className={styles.pagination}>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={total}
          align="center"
          onChange={onChangePage}
        />
      </div>
      </div>

      {!loading && list.length === 0 && (
        <Empty description="暂无问卷，快去创建一个吧" />
      )}
    </div>
  );
};

export default List1;
