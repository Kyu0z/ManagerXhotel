import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Button, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { db } from "@src/firebase";
import {
  CollectionReference,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import user from "@src/assets/user.png";

const { Title } = Typography;

const TableUser = () => {
  // Table
  interface DataType {
    key: React.Key;
    name: string;
    avatar: string;
    phoneNumber: number;
    room: string;
    checkIn: string;
    checkOut: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Avatar",
      width: 100,
      dataIndex: "avatar",
      key: "avatar",
      fixed: "left",
      render: (text: string, record: DataType) => (
        <img src={user} alt="avatar" />
      ),
    },
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    { title: "Phone", dataIndex: "phoneNumber", key: "1", width: 108 },
    { title: "Room", dataIndex: "room", key: "2" },
    {
      title: "Check In",
      key: "checkIn",
      render: (text: string, record: DataType) => <span>14:00 31/2/2023</span>,
    },
    {
      title: "Check Out",
      key: "checkOut",
      width: 100,
      render: (text: string, record: DataType) => <span>12:00 03/3/2023</span>,
    },
    {
      title: "State",
      key: "state",
      width: 100,
      render: () => <Tag color="warning">Paid</Tag>,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: () => (
        <Button type="primary" danger>
          Delete
        </Button>
      ),
    },
  ];

  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const colRef: CollectionReference = collection(db, "users");
    const queries = query(colRef);
    const unsubscribe = onSnapshot(queries, (snapshot) => {
      const results = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          key: doc.id,
          name: data.name,
          avatar: data.avatar,
          phoneNumber: data.phoneNumber,
          room: data.room,
          checkIn: data.checkIn,
          checkOut: data.checkOut,
        };
      });
      setData(results);
    });

    // Clean up listener
    return () => unsubscribe();
  }, []);

  return (
    <Space direction="vertical">
      <Title level={4} style={{ fontWeight: "700" }}>
        Booking List
      </Title>
      <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
    </Space>
  );
};

export default TableUser;
