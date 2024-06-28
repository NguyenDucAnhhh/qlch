import React, {useState} from 'react';
import '../bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import '../fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/all.min.css';
import data from './data.json';
import FormAdd from "./FormAdd";
function Table(props) {

    const [qls, setQls] = useState(data);

    const[showFormAdd, setshowFormAdd] = useState(false);
    const handleCloseAddForm = () => {
        setshowFormAdd(false);
    };

    const handleAdd = (newQl) => {
        setQls([...qls, newQl]);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = date.getFullYear();

        return `${day} Tháng ${month} ${year} `;
    }

    return (
        <div>
            <div className="d-flex justify-content-between mt-3 ">
                <div className="d-flex">
                    <button
                        className={"bg-success text-white m-3 p-2"}
                        onClick={() => {
                            setshowFormAdd(true)
                        }}
                    >
                        <i className="fa-solid fa-circle-plus p-1"></i>
                        THÊM MỚI
                    </button>
                    <button className={"bg-white m-3 p-2"}>
                        <i className="fa-solid fa-upload p-1"></i>
                        XUẤT RA FILE
                        <i className="fa-solid fa-arrow-right p-1"></i>
                    </button>

                </div>
                <div className="d-flex">
                    <button className={"bg-white m-3 p-2"}>
                        <i className="fa-solid fa-arrow-right p-1"></i>
                    </button>
                    <input className="me-2" type="search" placeholder="Tìm kiếm cửa hàng"
                           aria-label="Search"/>
                    <button className="btn btn-outline border-dark" type="submit">
                        <i className="fa-solid fa-search p-1"></i>
                    </button>
                </div>
                <div className="d-flex">
                    <p style={{fontWeight: 'bold'}}>Kết quả</p>
                    <select className="m-2" onChange={handleAdd} aria-placeholder={"20"}>
                    </select>
                </div>
            </div>
            <table className="table table-striped">
                <tr className="row bg-black" style={{borderBottom: '1px solid black'}}>
                    <th className="col">
                        <p className="col bg-black text-white">Hành động</p>
                    </th>
                    <th className="col d-flex">
                        <p className="col bg-black text-white">STT</p>
                        <i className="fa-solid fa-arrows-up-down p-1 m-2 bg-black text-white"></i>
                    </th>
                    <th className="col d-flex">
                        <p className="col bg-black text-white">Người quản lý</p>
                        <i className="fa-solid fa-arrows-up-down p-1 m-2 bg-black text-white"></i>
                    </th>
                    <th className="col d-flex">
                        <p className="col bg-black text-white">Địa chỉ</p>
                        <i className="fa-solid fa-arrows-up-down p-1 m-2 bg-black text-white"></i>
                    </th>
                    <th className="col d-flex">
                        <p className="col bg-black text-white">Lần cập nhật cuối</p>
                        <i className="fa-solid fa-arrows-up-down p-1 m-2 bg-black text-white"></i>
                    </th>
                </tr>

                {qls.map((ql, index) => (
                    <div key={index}>
                        <tr className="row">
                            <td className="col">
                                <button className="btn">
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                                <button className="btn">
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                                <button className="btn">
                                    <i className="fa-solid fa-circle-xmark"></i>
                                </button>
                            </td>
                            <td className="col">
                                <p>{ql.id}</p>
                            </td>
                            <td className="col">
                                <p>{ql.name}</p>
                            </td>
                            <td className="col">
                                <p>{ql.address}</p>
                            </td>
                            <td className="col">
                                <p>{formatDate(ql.date)}</p>
                            </td>

                        </tr>
                    </div>
                ))}
            </table>
            <div className={"d-flex justify-content-end m-3"}>
                <p style={{fontWeight: 'bold'}}>0{qls.length} Kết quả phù hợp</p>

            </div>

            {showFormAdd && (
                <FormAdd
                    onClose={handleCloseAddForm}
                    onAdd={handleAdd}
                    qls={qls}
                />
            )}
        </div>
    );
}

export default Table;