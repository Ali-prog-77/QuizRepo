import React from 'react';
import { Typography, Button, Row, Col, Card } from 'antd';
import { useNavigate } from "react-router-dom";
import './HomePage.css';
const { Title } = Typography;

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className="home-page-container" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="content-container">
        <Card className="content-card">
          <Title level={2}>Merhaba Türk Edebiyatı hakkında ne kadar bilgilisin, bunu test etmek ister misin?</Title>
          <Button type="primary" size="large" style={{ marginBottom: '2rem' }} onClick={()=> navigate("/quiz")}>Teste Başla!</Button>
        </Card>
        
        <Row justify="center" gutter={[0, 16]}>
          <Col>
            <Card className="content-card">
              <Title level={2}>Ali İnan'ı ne kadar yakından tanıyorsun test etmek ister misin?</Title>
              <Button type="primary" size="large" onClick={()=> navigate("/aliquiz")} >Teste Başla!</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
