import React, { useState } from "react";
import {
  Card,
  Button,
  Menu,
  Dropdown,
  Modal,
  Input,
  Row,
  Col,
  notification,
  Spin,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Kasus Hot",
      schedule: "2022-01-21",
      isPosted: true,
      content: "lorem abosbdaiosdho ashdo ahsdkjh jhsa",
    },
    {
      id: 2,
      title: "Kucing Terbang",
      schedule: "2022-01-22",
      isPosted: false,
      content: undefined,
    },
    {
      id: 3,
      title: "Koala Gila",
      schedule: "2022-01-23",
      isPosted: false,
      content: "lorem abos asdoaosidu aisduiuasd iasid uahsiduhaoisd ",
    },
  ]);

  const handleOpen = (param) => {
    setCurrentData(param);
    setOpen(true);
  };

  const handleSchedule = () => {
    const condition = open && currentData;
    if ("haus" && condition) {
      console.log("Lari");
    } else {
      console.log("Rest");
    }
  };

  const handleAddNewItem = () => {
    setLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        id: 1,
        title: newTitle,
        schedule: "2022-01-21",
        isPosted: false,
        content: "lorem abosbdaiosdho ashdo ahsdkjh jhsa",
      })
      .then((res) => {
        console.log(res);
        setLoading(false);

        notification.success({
          message: "Added new item successfully",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        });

        setPosts((prev) => [res.data, ...prev]);
      });
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <>
      <div className="post-wrapper">
        <Row
          gutter={16}
          style={{
            marginBottom: "1rem",
          }}
        >
          <Col span={20}>
            <Input
              onChange={(e) => handleChange(e)}
              placeholder="Write something..."
            />
          </Col>
          <Col span={4}>
            <Button onClick={() => handleAddNewItem()} type="primary">
              Add Item
            </Button>
          </Col>
        </Row>

        {loading && (
          <div
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Spin />
          </div>
        )}

        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <Card className={`card ${post.isPosted ? "posted" : ""}`}>
              {post.title}
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu
                    items={[
                      {
                        key: "delete",
                        label: (
                          <span>
                            <DeleteOutlined /> Delete Post
                          </span>
                        ),
                      },
                    ]}
                  />
                }
              >
                <Button type="text" className="btn-more">
                  ...
                </Button>
              </Dropdown>
            </Card>
            {!post.isPosted && (
              <>
                <Button onClick={() => handleOpen(post)}>Post Now</Button>
                <Button onClick={() => handleSchedule()}>Schedule</Button>
              </>
            )}
          </div>
        ))}
      </div>

      <Modal
        title="Are you sure?"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        okType="Yes I'm Sure"
      >
        <Card>
          <h2>{currentData.title}</h2>
          {/* "", false, 0, NaN, null, undefined */}
          <p>{currentData.content ? "No content Available" : ""}</p>
        </Card>
        <div>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="primary">Yes I'm Sure</Button>
        </div>
      </Modal>
    </>
  );
}
