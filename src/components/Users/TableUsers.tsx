import { Table, Tag, Space } from 'antd';
import { UserModel } from '../common/users/types';

const columns = [
  {
    title: 'Ім\'я',
    dataIndex: 'firstName',
    key: 'firstname',
    render: (text:String) => <b>{text}</b>,
  },
  {
    title: 'Прізвище',
    dataIndex: 'lastName',
    key: 'lastname',
    render: (text:String) => <b>{text}</b>,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    render: (text:String) => <b>{text}</b>,
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
    render: (text:String) => <b>{text}</b>,
  }
];

export interface tableData 
{
    data:Array<UserModel>
}
  

export default (info:tableData) => <Table columns={columns} pagination={{ pageSize: 500 }} dataSource={info.data} />;