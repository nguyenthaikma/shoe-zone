import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Space } from 'antd'

const handleSearch = (confirm) => {
  confirm()
}

const handleReset = (clearFilters, confirm) => {
  clearFilters()
  confirm()
}

function getColumnSearchProps(placeholder) {
  return {
    filterDropdown: ({ close, confirm, setSelectedKeys, selectedKeys, clearFilters }) => (
      <Col style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(confirm)}
          placeholder={placeholder}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            onClick={() => handleSearch(confirm)}
            type="primary"
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters, confirm)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            Close
          </Button>
        </Space>
      </Col>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  }
}
export default getColumnSearchProps
