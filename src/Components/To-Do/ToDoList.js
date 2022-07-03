import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Divider, Table } from "antd";
import {
    getAllListHandler, getListHandler
} from "../../services/list.service";
import swal from 'sweetalert2';


function ToDoList() {
    const history = useHistory();
    const [details, setDetails] = useState([]);
    const [listData, setListData] = useState();

    const onEditClickHandler = (record) => {
        getListHandler(record.id)
            .then(data => {
                if (data) {
                    setListData(data);
                    swal.fire(
                        'Success',
                        data.title,
                        'success'
                    );
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    const getToDoList = () => {

        getAllListHandler()
            .then(data => {
                if (data) {
                    setDetails(data);
                }
            })
            .catch(err => {
                console.log(err)
            });

    }

    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'left',
        },
        {
            title: 'Completed',
            key: 'completed',
            dataIndex: 'completed',

            render: (text, record) => (

                text ? (
                    <span>
                        <span className="gx-btn layout-edit-btn" onClick={() => onEditClickHandler(record)}>Completed</span>
                    </span>
                )
                    :
                    <span>
                        <span className="gx-btn layout-edit-btn" onClick={() => onEditClickHandler(record)}>Not Completed</span>
                    </span>

            ),
        }
    ];

    const logOUt = () => {
        history.push(`./`);
    }

    useEffect(() => {
        getToDoList();
    }, []);

    return (
        <>
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-login`} ></div>
                <section className={`form-block form-block--is-login to-do`}>
                    <div className="to-do-header">
                        <span> To Do</span>
                        <span onClick={logOUt}> Log Out</span>
                    </div>
                </section>
                <div className={`form-block form-block--is-login to-do`} style={{ 'marginTop': '30px' }}>
                    <Table className="gx-table-responsive" columns={columns} dataSource={details} pagination={false} />
                </div>
            </div>


        </>
    );
}

export default ToDoList;
