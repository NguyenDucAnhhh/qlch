import React from 'react';
import '../bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css';
function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black ">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white" href="#">Trường Đại học Thủy lợi</a>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">

                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-disabled="true">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled text-white" href="#">Quản lý cửa hàng</a>
                                </li>
                            </ul>
                            <input className="me-2" type="search" placeholder="Nhập nội dung tìm kiếm"
                                   aria-label="Search"/>
                            <button className="btn btn-outline border-dark text-white" type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;