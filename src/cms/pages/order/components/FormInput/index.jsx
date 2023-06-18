import { Badge, Descriptions } from 'antd';

function FormInput({ data, listSize }) {
  return (
    <Descriptions title='Order Info' layout='vertical' bordered>
      <Descriptions.Item label='Id'>{data.orderID}</Descriptions.Item>
      <Descriptions.Item label='Size'>{data.size}</Descriptions.Item>
      <Descriptions.Item label='Quantity'>{data.number}</Descriptions.Item>
      <Descriptions.Item label='Total price'>{data.price}</Descriptions.Item>
      <Descriptions.Item label='Order time'>2018-04-24 18:00:00</Descriptions.Item>
      <Descriptions.Item label='Usage Time' span={2}>
        2019-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label='Status' span={3}>
        <Badge status='processing' text='Running' />
      </Descriptions.Item>
      <Descriptions.Item label='Negotiated Amount'>$80.00</Descriptions.Item>
      <Descriptions.Item label='Discount'>$20.00</Descriptions.Item>
      <Descriptions.Item label='Official Receipts'>$60.00</Descriptions.Item>
      <Descriptions.Item label='Config Info'>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </Descriptions.Item>
    </Descriptions>
  );
}

export default FormInput;
