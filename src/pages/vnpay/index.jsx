import { Button, Col, Image, Row, Typography } from 'antd';
import moment from 'moment';

import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './style.module.scss';
import { commonImg } from '@src/assets/images/common';

const { Title, Text } = Typography;

function VnpReturnScreen() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const query = {};
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    query[param] = value;
  }
  const myDate = query.vnp_PayDate || '';
  const date = new Date(myDate.toString().replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '$4:$5:$6 $2/$3/$1'));

  return (
    <div className='auth-container'>
      <div className='auth-wrapper'>
        <div className={style.wrapper}>
          <Row className={style.wrapper}>
            <Col span={24}>
              <Row>
                <Col span={0} md={{ span: 8 }}>
                  <Row className={style.imgWrap}>
                    <Image className={style.img} src={commonImg.confirm} alt='VnpayVerify' />
                  </Row>
                </Col>
                <Col className={style.contentWrap} span={24} md={{ span: 14, offset: 2 }}>
                  <Row className={style.contentRow}>
                    <Title level={1} className={style.title}>
                      {query.vnp_ResponseCode === '00' ? 'GIAO DỊCH THÀNH CÔNG' : 'GIAO DỊCH KHÔNG THÀNH CÔNG'}
                    </Title>
                    <Col span={24}>
                      <Row>
                        <Col span={24} className={style.payItem}>
                          <Row>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Số tiền thanh toán
                                </Col>
                                <Col span={14}>
                                  <Text className={style.textNeutral2}>
                                    <Text className={style.textNeutral5}>
                                      {(Number(query?.vnp_Amount) / 100)?.toLocaleString()} đ
                                    </Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Mã website trên hệ thống VNPAY
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>{query?.vnp_TmnCode}</Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24} className={style.payItem}>
                          <Row>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Nội dung thanh toán
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>{query?.vnp_OrderInfo}</Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Mã ngân hàng
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>{query?.vnp_BankCode}</Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24} className={style.payItem}>
                          <Row>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Mã giao dịch tại Ngân hàng
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>{query?.vnp_BankTranNo}</Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Mã giao dịch
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>{query?.vnp_TransactionNo}</Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Ngày giao dịch
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>
                                      {moment(date).format('DD/MM/YYYY HH:mm:ss')}
                                    </Text>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Kết quả thanh toán
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>
                                      {query?.vnp_ResponseCode === '00' ? 'Thành công' : 'Không thành công'}
                                    </Text>{' '}
                                    <Text className={style.label}>({query?.vnp_ResponseCode})</Text>
                                    <Col>
                                      <a
                                        href='https://sandbox.vnpayment.vn/apis/docs/bang-ma-loi/'
                                        target='_blank'
                                        rel='noreferrer'
                                      >
                                        Tham khảo bảng mã lỗi
                                      </a>
                                    </Col>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row className={style.payRow}>
                                <Col span={10} className={style.textNeutral3}>
                                  Tình trạng của giao dịch tại Cổng thanh toán VNPAY
                                </Col>
                                <Col span={14}>
                                  <Text>
                                    <Text className={style.textNeutral5}>
                                      {query?.vnp_TransactionStatus === '00' ? 'Thành công' : 'Không thành công'}
                                    </Text>{' '}
                                    <Text className={style.label}>({query?.vnp_TransactionStatus})</Text>
                                    <Col>
                                      <a
                                        href='https://sandbox.vnpayment.vn/apis/docs/bang-ma-loi/'
                                        target='_blank'
                                        rel='noreferrer'
                                      >
                                        Tham khảo bảng mã lỗi
                                      </a>
                                    </Col>
                                  </Text>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Button className={style.regiterBtn} onClick={() => navigate('/')} type='warning'>
                        Trang chủ
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default VnpReturnScreen;
