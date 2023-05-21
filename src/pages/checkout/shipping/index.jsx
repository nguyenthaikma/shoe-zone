import { Button, Col, Descriptions, Row } from 'antd';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Shipping() {
  const navigate = useNavigate();
  const { idProduct } = useParams();
  return (
    <Row gutter={[0, 38]}>
      <Col span={24} style={{ border: '1px solid #eee', padding: 12, paddingTop: 12, borderRadius: 8 }}>
        <Descriptions>
          <Descriptions.Item contentStyle={{ textAlign: 'right', display: 'block' }} span={24} label='Contact'>
            nguyenthai9cc@gmail.com
          </Descriptions.Item>
          <Descriptions.Item contentStyle={{ textAlign: 'right', display: 'block' }} span={24} label='Ship to'>
            Hoc vien Ky thuat mat ma
          </Descriptions.Item>
        </Descriptions>
      </Col>
      <Col span={24}>
        <Descriptions title='Shipping method'>
          <Descriptions.Item
            contentStyle={{ textAlign: 'right', display: 'block' }}
            span={24}
            label='International Shipping'
          >
            $20.00
          </Descriptions.Item>
        </Descriptions>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
        <Link to={`/checkouts/information/${idProduct}`}>Return to information</Link>
        <Button onClick={() => navigate(`/checkouts/payment/${idProduct}`)} type='primary' size='large'>
          Continue to payment
        </Button>
      </Col>
    </Row>
  );
}
