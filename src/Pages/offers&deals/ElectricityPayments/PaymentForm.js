import React from 'react'
import './PaymentForm.css'
export default function PaymentForm() {
    return (
        <div className=" row ">
            <div className="col-12 background-color wrappper">
                <div className="row">
                    <div className="col-12 d-flex align-items-center" style={{ color: "white", paddingBottom: "24px" }}>
                        <img src="https://static.mobikwik.com/appdata/operator_icons/op132.png" className=" me-3" alt='' />
                        <h1 className="electricity-payment-heading"> PAY AVVNL ELECTRICITY BILL ONLINE </h1>
                    </div>
                </div>
                <form>
                    <div className="row form-wrappper" >
                        <div className="col-12 col-md-5">
                        <label for="dropdown" class="form-label label"> Operator</label>
                            <div className="dropdown" name=" dropdown">
                                <button class="btn w-100 dropdown-toggle d-flex justify-content-end dropdown-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            dropdown
                               </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href=" ">Action</a></li>
                                    <li><a className="dropdown-item" href=" ">Another action</a></li>
                                    <li><a className="dropdown-item" href=" ">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                        <label for="dropdown" class="form-label label"> K Number</label>
                            <input type="text" name="" className="form-control  k-number " placeholder="K Number" />
                        </div>
                        <div className=" col-12 col-md-1">
                            <button type="button" className="btn btn-secondary  go-button"> GO </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
