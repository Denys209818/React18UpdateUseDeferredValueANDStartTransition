import React, {startTransition, Suspense, useEffect, useState, useDeferredValue} from 'react';
import { Input } from 'antd';
import { Button, Col, Row } from 'antd';
import TableUsers from './TableUsers';
import { UserModel } from '../common/users/types';
import information from '../../users.json';
const Users : React.FC = () => 
{
    //  1. Перша особливість нового React
    //console.log("change states...");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => 
    {
        e.preventDefault();
        setValue1("1");
        setValue2("1");

        let button : HTMLButtonElement = e.currentTarget;
        let id = button.id;
    }

    
    //  2. startTransition, useDifferedValue
     
    

    const [users, setUsers] = useState<Array<UserModel>>([
    ]);

    const usersDeffered = useDeferredValue(users);

    useEffect(() => {
        //Якщо useDeferredValue, то не потрбіно використовувати startTransition
        //startTransition(() => {
            var array: Array<UserModel> = information.map<UserModel>(x => x);
            setUsers(array);
        //});
    }, [setUsers]);


    const onChangeInput =(e: React.ChangeEvent<HTMLInputElement>) => 
    {
        e.preventDefault();
        var text: String = e.currentTarget.value;

        //Якщо useDeferredValue, то не потрбіно використовувати startTransition
        //startTransition(() => {
            var newArr : Array<UserModel> = information.map<UserModel>(x => x)
            .filter(x => x.firstName.includes(text.toString()))
                .map(x => x);
            setUsers(newArr);
       // });
    }

    return (<>
        <h1>Користувачі</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col offset={8} span={8}>
                <Button id='first' type="primary" onClick={onClickHandler} block>
                    Перерендеринг з використанням двох змін стану
                </Button>
            </Col>
        </Row>
        <Row style={{
            'margin': '20px'
        }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col offset={4} span={16}>
                <Suspense fallback={<>Loading...</>}>
                    <Input placeholder="Пошук користувачів..." onChange={onChangeInput} />
                    {/* Якщо useDeferredValue, то usersDeffered в іншому випадку users*/}
                    <TableUsers data={usersDeffered!}/>
                </Suspense>
            </Col>
        </Row>
    </>);
}

export default Users;