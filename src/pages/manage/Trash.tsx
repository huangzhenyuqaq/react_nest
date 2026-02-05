import React, { FC, useEffect, useState } from "react";
import styles from "./Trash.module.scss";
import { Table, Empty, Spin } from "antd";
import useLoadSearchListData from "../../hooks/useLoadSearchList";

const Trash: FC = () => {
  useEffect(() => {
    searchList();
  }, []);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { searchList, loading, data, error } = useLoadSearchListData({
    keyword,
    isDelete: true,
    page,
    pageSize,
  });
  const { list = [], total = 0 } = data || {};
  const tableColumns = [
    {
      title: "问卷ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "问卷标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      key: "isPublished",
      render: (isPublished: boolean) => (isPublished ? "已发布" : "未发布"),
    },
    {
      title: "是否收藏",
      dataIndex: "isStar",
      key: "isStar",
      render: (isStar: boolean) => (isStar ? "已收藏" : "未收藏"),
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
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  function deleteQuestions(ids: string[]) {
    console.log(ids);
  }
  return (
    <div className={styles.trashPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>回收站</h1>

        <p className={styles.pageDesc}>
          已删除的问卷将保留30天，之后将永久删除
        </p>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className={styles.searchInput}
          placeholder="请输入问卷标题"
          id="title_input"
        />
        <button onClick={() => searchList()} className={styles.searchButton}>
          搜索
        </button>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🗑️</div>
        {!loading && list.length === 0 && (
          <p className={styles.emptyText}>回收站为空</p>
        )}
        {!loading && list.length > 0 && (
          <div>
            <button onClick={() => deleteQuestions(selectedIds)}>删除选中问卷</button>
          <Table
            columns={tableColumns}
            dataSource={list}
            pagination={false}
            rowKey={(record: any) => record._id}
            rowSelection={{
              type: "checkbox",
              onChange: (selectedRowKeys, selectedRows) => {
               setSelectedIds(selectedRowKeys as string[])
              },
            }}
          />
          </div>
        )}
        <p className={styles.emptyHint}>删除的问卷将出现在这里</p>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
};
export default Trash;
