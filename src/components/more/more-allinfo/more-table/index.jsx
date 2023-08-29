import { Table } from "antd";
import React from "react";

function MoreTable() {
  const columns = [
    {
      title: "Depending",
      dataIndex: "name",
      key: "name",
      width: "60%",
    },
    {
      title: "Depending",
      dataIndex: "depending",
      key: "depending",
      align: "right",
    },
    {
      title: "Depending",
      dataIndex: "depending",
      key: "depending",
      align: "right",
      //   width: "auto"
    },
  ];

  const data = [
    {
      key: "1",
      name: "depending",
      depending: "depending",
      depending: "depending",
    },
    {
      key: "2",
      name: "depending",
      depending: "depending",
      depending: "depending",
    },
    {
      key: "3",
      name: "depending",
      depending: "depending",
      depending: "depending",
    },
  ];
  return (
    <>
      <Table pagination={false} columns={columns} dataSource={data} />
    </>
  );
}

export default MoreTable;
