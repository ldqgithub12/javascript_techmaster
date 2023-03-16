import React, { useEffect, useState } from 'react'
import axios from 'axios';

function CartItem() {
    const [cartItem, setCartItem] = useState([])
    useEffect(() => {
        const fetchItem = async () => {
            try {
                let rs = await axios.get("http://localhost:8080/api/v1/cartItems")
                setCartItem(rs.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchItem();
    }, [])
    return (
        <>
            <body>
                <div className="shopping-cart-container mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-4">
                                    <h2>Shopping Cart</h2>
                                </div>
                            </div>
                        </div>

                        <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p>
                        <div className="row shopping-cart">
                            <div className="col-md-8">
                                <div className="product-list">
                                    <div className="product-item d-flex border mb-4">
                                        <div className="image">
                                            <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="sản phẩm 1" />
                                        </div>
                                        <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h2 className="text-dark fs-5 fw-normal">
                                                        Sản phẩm 1
                                                    </h2>
                                                    <h2 className="text-danger fs-5 fw-normal">
                                                        300.000 VND
                                                    </h2>
                                                </div>
                                                <div className="text-black-50">
                                                    <div className="d-inline-block me-3">
                                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light">-</button>
                                                        <span className="py-2 px-3 d-inline-block fw-bold">1</span>
                                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="text-primary border-0 bg-transparent fw-light">
                                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item d-flex border mb-4">
                                        <div className="image">
                                            <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="sản phẩm 2" />
                                        </div>
                                        <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h2 className="text-dark fs-5 fw-normal">
                                                        Sản phẩm 2
                                                    </h2>
                                                    <h2 className="text-danger fs-5 fw-normal">
                                                        400.000 VND
                                                    </h2>
                                                </div>
                                                <div className="text-black-50">
                                                    <div className="d-inline-block me-3">
                                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light">-</button>
                                                        <span className="py-2 px-3 d-inline-block fw-bold">1</span>
                                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="text-primary border-0 bg-transparent fw-light">
                                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item d-flex border mb-4">
                                        <div className="image">
                                            <img src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="sản phẩm 3" />
                                        </div>
                                        <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h2 className="text-dark fs-5 fw-normal">
                                                        Sản phẩm 3
                                                    </h2>
                                                    <h2 className="text-danger fs-5 fw-normal">
                                                        500.000 VND
                                                    </h2>
                                                </div>
                                                <div className="text-black-50">
                                                    <div className="d-inline-block me-3">
                                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light">-</button>
                                                        <span className="py-2 px-3 d-inline-block fw-bold">1</span>
                                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="text-primary border-0 bg-transparent fw-light">
                                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bill">
                                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                                        <span className="text-black-50">Tạm tính:</span>
                                        <span className="text-primary" id="sub-total-money">1.200.000 VND</span>
                                    </div>
                                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                                        <span className="text-black-50">VAT (10%):</span>
                                        <span className="text-primary" id="vat-money">120.000 VND</span>
                                    </div>
                                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                                        <span className="text-black-50">Thành tiền:</span>
                                        <span className="text-primary" id="total-money">1.320.000 VND</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default CartItem