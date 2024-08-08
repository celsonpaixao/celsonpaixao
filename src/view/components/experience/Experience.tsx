import React, { useEffect } from "react";
import style from "./Exprerience.module.scss";
import TitleLabel from "../titlelabel/Titlelabe";
import AOS from "aos";
import "aos/dist/aos.css";
import { Avatar, List, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import experience_datas from "../../../data/experience_data"; // Importando os dados

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Mapeando os dados de experience_datas para o formato esperado pelo componente List
  const data = experience_datas.map((item) => ({
    href: "#", // Pode adicionar um link relevante aqui
    title: item.title,
    avatar: item.image,
    description: item.competence.join(", "), // Transformando as competências em uma string
    content: (
      <>
        <p>
          <strong>Nível:</strong> {item.nivel}
        </p>
        <p>
          <strong>Local:</strong> {item.type_local}
        </p>
        <p>
          <strong>Início:</strong> {item.start}
        </p>
        {item.atual ? (
          <p className={style.atual_atext}>Onde estou atualmente...</p>
        ) : (
          <p>
            <strong>Fim:</strong> {item.End}
          </p>
        )}
      </>
    ),
  }));

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className={style.experience_container} id="experience">
      <TitleLabel text="Experiências" />
      <div className="container">
        <p className={style.experience_container_P}>{""}</p>
      </div>

      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data} // Usando os dados mapeados aqui
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Experience;
