import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { produce } from "immer";
import styles from "./Star.module.scss";
import { Spin, Pagination } from "antd/es";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import type { PaginationProps } from "antd";
import QuestionCard from "../../components/QuestionCard";
import useLoadSearchListData from "../../hooks/useLoadSearchList";
import { useTitle } from "ahooks";

const Star: FC = () => {
  useTitle("星标问卷");

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    searchList();
  }, [page, pageSize]);

  const { searchList, loading, data, error } = useLoadSearchListData({
    keyword,
    isStar: true,
    page,
    pageSize,
  });
  const { list = [], total = 0 } = data || {};

  function deleteQuestion(id: string, index: number) {
    console.log(id);
  }
  const onChangePage: PaginationProps["onChange"] = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className={styles.starPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>星标问卷</h1>
      </div>
      <div className={styles.searchBar}>
        <Input placeholder="请输入问卷标题" value={keyword}  onChange={(e) => setKeyword(e.target.value)}/>
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

      <div className={styles.questionList}>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spin />
          </div>
        )}
        {!loading &&
          list.length > 0 &&
          list.map((item: any, index: number) => (
            <QuestionCard
              deleteQuestion={() => deleteQuestion(item._id, index)}
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

      {!loading && list.length === 0 && (
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
