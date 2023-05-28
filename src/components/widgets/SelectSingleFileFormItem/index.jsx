import {
  CloseSquareFilled,
  EditFilled,
  FileExclamationOutlined,
  FileTextOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';
import { regexAudio, regexDocument, regexImage, regexVideo } from '@src/utils/regex';
import { Button, Card, Col, Image, Row, Space, Typography } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

const { Meta } = Card;
const { Text } = Typography;

function SelectSingleFileFormItem({ form, onFileSelected, ...props }) {
  const mediaManagerModalRef = useRef(null);
  const [fileSelected, setFileSelected] = useState(undefined);

  useEffect(() => {
    setFileSelected(props?.initialValue);
  }, [props?.initialValue]);

  useEffect(() => {
    if (props?.name) {
      form.setFieldsValue({
        [`${props.name}`]: fileSelected?._id,
      });
      if (onFileSelected) void onFileSelected(fileSelected);
    }
  }, [fileSelected, onFileSelected, form, props?.name]);

  const fileType = useMemo(() => {
    if (fileSelected?.originalname?.match(regexImage)) {
      return 'image';
    }
    if (fileSelected?.originalname?.match(regexDocument)) {
      return 'docx';
    }
    if (fileSelected?.originalname?.match(regexVideo) || fileSelected?.originalname?.match(regexAudio)) {
      return 'audio';
    }
    return 'unknown';
  }, [fileSelected]);

  return (
    <Row className='select-single-file-container'>
      <Col span={24}>
        {fileSelected ? (
          <Card
            className='card-file-single'
            size='small'
            cover={
              fileType === 'image' && (
                <Row align='middle' justify='center' className='card-file-single-cover'>
                  <Col>
                    <Image src={fileSelected?.location} />
                  </Col>
                </Row>
              )
            }
            extra={
              fileSelected && (
                <Space align='start' size={15}>
                  <EditFilled onClick={() => mediaManagerModalRef.current?.onOpen(true)} />
                  <CloseSquareFilled onClick={() => setFileSelected(undefined)} />
                </Space>
              )
            }
          >
            {fileType === 'image' ? (
              <Meta
                description={
                  <Text ellipsis style={{ fontSize: 12 }}>
                    {fileSelected.name}
                  </Text>
                }
              />
            ) : (
              <Row gutter={[10, 10]} align='middle' wrap={false}>
                <Col flex='23px'>
                  {fileType === 'docx' && <FileTextOutlined style={{ fontSize: 16 }} />}
                  {fileType === 'audio' && <PlaySquareOutlined style={{ fontSize: 16 }} />}
                  {fileType === 'unknown' && <FileExclamationOutlined style={{ fontSize: 16 }} />}
                </Col>
                <Col flex='1'>
                  <Text ellipsis>{fileSelected.name}</Text>
                </Col>
              </Row>
            )}
          </Card>
        ) : (
          <Space size={10} align='center'>
            <Text>No file selected</Text>
            <Button onClick={() => mediaManagerModalRef.current?.onOpen(true)}>Add file</Button>
          </Space>
        )}
      </Col>
    </Row>
  );
}

export default SelectSingleFileFormItem;
