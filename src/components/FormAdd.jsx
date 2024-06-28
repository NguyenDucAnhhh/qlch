import React, {useState} from 'react';

function FormAdd(props) {
    const {onAdd, onClose, qls} = props;

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const [errorN, setErrorN] = useState('');
    const [errorA, setErrorA] = useState('');
    const handleAddStudent = (event) => {
        event.preventDefault();

        if(name.trim().length < 1 || name.trim().length > 30 ){
            setErrorN(true);
            return;
        }
        if(address.trim().length < 1 || name.trim().length > 50){
            setErrorA(true);
            return;
        }


        onAdd({id: qls.length+1, name: name, address: address, date: '2/15/2024'});
        onClose();
    }


    return (
        <div>
            <form action="" style={{
                width: '510px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '5px',
            }}>
                <header className="header d-flex justify-content-between align-items-center m-3 p-3"
                        style={{borderBottom: '1px solid black'}}>
                    <h3>Thêm cửa hàng</h3>
                    <button className="close bg-white border-white"
                            onClick={onClose}
                    >&times;</button>
                </header>
                <div style={{display: 'flex', flexDirection: 'column', width: '80%', margin: 'auto'}}>
                    <p className={"d-flex"}>Tên người quản lý</p>
                    <input type="text" className=""
                           onChange={(event) => setName(event.target.value)}/>
                    {errorN && <p className={"text-danger"}>Vui lòng nhập tên đúng cú pháp</p>}
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: '80%', margin: 'auto'}}>
                    <p className={"d-flex"}>Địa chỉ</p>
                    <input type="text" className=""
                           onChange={(event) => setAddress(event.target.value)}/>
                    {errorA && <p className={"text-danger"}>Vui lòng nhập địa chỉ đúng cú pháp</p>}
                </div>

                <div className={"bg-secondary-subtle d-flex justify-content-end p-4 "}
                     style={{gap: '10px', marginTop: '30px'}}>
                    <button className="border-white" onClick={onClose}>Hủy</button>
                    <button className="bg-black text-white" style={{marginRight: '20px'}}
                            onClick={handleAddStudent}>Thêm mới
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormAdd;