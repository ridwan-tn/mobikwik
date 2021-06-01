import React, { useState } from 'react'
import './PaymentForm.css'
export default function PaymentForm() {
    const [objectselector,setObjectSelector ] = useState(0)
    const [dropdownItems, setDropdowmItems] = useState([{
        operator:"Adani Electricity Mumbai Limited",
        IDtype: ["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op31.png`
    },
    {
        operator:"Ajmer Vidyut Vitran Nigam Limited (AVVNL)",
        IDtype:["K Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op132.png`
    },
    {
        operator:" Assam Power Distribution Company Ltd (NON-RAPDR)",
        IDtype:["Consumer ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op198.png`
    },
    {
        operator:" Bangalore Electricity Supply Co. Ltd (BESCOM)",
        IDtype:["Customer ID / Account ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op67.png`
    },
    {
        operator:"B.E.S.T Mumbai ",
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op59.png`
    },
    {
        operator:"Bhagalpur Electricity Distribution Company (P) Ltd",
        IDtype:["Account Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op112.png`
    },
    {
        operator:"Bharatpur Electricity Services Ltd. (BESL)",
        IDtype:["K Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op164.png`
    },
    {
        operator:"Bikaner Electricity Supply Limited (BkESL)",
        IDtype:["K Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op165.png`
    },
    {
        operator:"BSES Rajdhani Power Limited",
        IDtype:["K Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op32.png`
    },
    {
        operator:"BSES Yamuna Power Limited",
        IDtype:["CA Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op33.png`
    },
    {
        operator:"Calcutta Electric Supply Corporation (CESC)",
        IDtype:["Customer ID (Not Consumer No)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op122.png`
    },
    {
        operator:"CESU, Odisha",
        IDtype:["Consumer Id"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op249.png`
    },
    {
        operator:"Chamundeshwari Electricity Supply Corp Ltd (CESCOM)",
        IDtype:["Account ID(RAPDRP) OR Consumer No./Connection ID(Non-RAPDRP)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op199.png`
    },
    {
        operator:"Chhattisgarh State Power Distribution Co. Ltd",
        IDtype:["Account ID(RAPDRP) OR Consumer No./Connection ID(Non-RAPDRP)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op60.png`
    },
    {
        operator:"Dakshin Gujarat Vij Company Limited (DGVCL)",
        IDtype:["Consumer Number","Amount (Minimum ₹100)₹"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op50.png`
    },
    {
        operator:"Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
        IDtype:["Account Number","Mobile Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op193.png`
    },
    {
        operator:"Daman and Diu Electricity",
        IDtype:[" Account  Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op121.png`
    },
    {
        operator:"Department of Power, Government of Arunachal Pradesh",
        IDtype:[" Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op381.png`
    },
    {
        operator:"Department of Power, Government of Arunachal Pradesh - Prepaid",
        IDtype:[" Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op551.png`
    },
    {
        operator:"Department of Power, Nagaland",
        IDtype:[" Consumer ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op245.png`
    },
    {
        operator:"DNH Power Distribution Company Limited",
        IDtype:[" Consumer ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op114.png`
    },
    {
        operator:"Electricity Department Chandigarh",
        IDtype:["Account No without(/)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op329.png`
    },
    {
        operator:"Gift Power Company Limited",
        IDtype:["Consumer No"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op524.png`
    },
    {
        operator:"Government of Puducherry Electricity Department",
        IDtype:["Consumer Number","Consumer Type (LT/TH)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op280.png`
    },
    {
        operator:"Gulbarga Electricity Supply Company Limited",
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op183.png`
    },
    {
        operator:"Himachal Pradesh State Electricity Board",
        IDtype:["Consumer ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op206.png`
    },
    {
        operator:"Hubli Electricity Supply Company Ltd (HESCOM)",
        IDtype:["Account ID(RAPDRP) OR Consumer No./Connection ID(Non-RAPDRP)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op200.png`
    },
    {
        operator:"Jamshedpur Utilities",
        IDtype:["Business Partner Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op69.png`
    },
    {
        operator:"Jharkhand Bijli Vitran Nigam Limited (JBVNL)",
        IDtype:["Consumer Number","Subdivision Code"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op197.png`
    },
    {
        operator:"Jaipur Vidyut Vitran Nigam Ltd",
        IDtype:["Business Partner Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op62.png`
    },
    {
        operator:"Jammu and Kashmir Power Development Department",
        IDtype:["Consumer Code"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op438.png`
    },
    {
        operator:"Jodhpur Vidyut Vitran Nigam Limited (JDVVNL)",       
        IDtype:["K Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op63.png`
    },
    {
        operator:"Kannan Devan Hills Plantations Company Private Limited",       
        IDtype:["Consumer No"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op552.png`
    },
    {
        operator:"Kanpur Electricity Supply Company Ltd",       
        IDtype:["ACCOUNT NO"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op552.png`
    },
    {
        operator:"Kanpur Electricity Supply Company Ltd",       
        IDtype:["ACCOUNT NO"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op147.png`
    },
    {
        operator:"Kerala State Electricity Board Ltd. (KSEBL)",       
        IDtype:["ACCOUNT NO"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op250.png`
    },
    {
        operator:"Kerala State Electricity Board Ltd. (KSEBL)",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op250.png`
    },
    {
        operator:"Kota Electricity Distribution Limited (KEDL)",       
        IDtype:["K Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op169.png`
    },
    {
        operator:"Lakshadweep Electricity Department",       
        IDtype:["Consumer No"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op513.png`
    },
    {
        operator:"Madhya Gujarat Vij Company Limited (MGVCL)",       
        IDtype:["Consumer No","Amount (Minimum ₹100)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op49.png`
    },
    {
        operator:"Madhya Pradesh Madhya Kshetra Vidyut Vitaran-RURAL",       
        IDtype:["IVRS"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op216.png`
    },
    {
        operator:"Madhya Pradesh Madhya Kshetra Vidyut Vitaran-URBAN",       
        IDtype:["IVRS"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op216.png`
    },
    {
        operator:"Madhya Pradesh Paschim Kshetra Vidyut Vitaran",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op68.png`
    },
    {
        operator:"MP Poorva Kshetra Vidyut Vitaran Co. Ltd Jabalpur",       
        IDtype:["Consumer Number/IVRS"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op120.png`
    },
    {
        operator:"Madhya Pradesh Poorv Kshetra Vidyut Vitaran-RURAL",       
        IDtype:["Consumer Number/IVRS"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op120.png`
    },
    {
        operator:"Madhya Pradesh Poorv Kshetra Vidyut Vitaran-URBAN",       
        IDtype:["Consumer Number/IVRS"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op120.png`
    },
    {
        operator:"Maharashtra State Electricity Distbn Co Ltd",       
        IDtype:["Consumer Number","Billing Unit"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op39.png`
    },
    {
        operator:"Meghalaya Power Dist Corp Ltd",       
        IDtype:["Consumer ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op123.png`
    },
    {
        operator:"Mangalore Electricity Supply Co. Ltd (MESCOM) – RAPDR",       
        IDtype:["Account ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op247.png`
    },
    {
        operator:"Mangalore Electricity Supply Company LTD (Non RAPDR)",       
        IDtype:["Account ID"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op490.png`
    },
    {
        operator:"NESCO, Odisha",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op172.png`
    },
    {
        operator:"New Delhi Municipal Council (NDMC)",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op219.png`
    },
    {
        operator:"Noida Power",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op61.png`
    },
    {
        operator:"North Bihar Power Distribution Company Ltd.",       
        IDtype:["CA Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op171.png`
    },
    {
        operator:"Paschim Gujarat Vij Company Limited (PGVCL)",       
        IDtype:["Consumer Number","Amount (Minimum ₹100)"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op51.png`
    },
    {
        operator:"Power & Electricity Department – Mizoram",       
        IDtype:["Customer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op251.png`
    },
    {
        operator:"Punjab State Power Corporation Ltd (PSPCL)",       
        IDtype:["Account  Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op194.png`
    },
    {
        operator:"Sikkim Power-RURAL",       
        IDtype:["Contract Acc Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op235.png`
    },
    {
        operator:"Sikkim Power-URBAN",       
        IDtype:["Contract Acc Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op246.png`
    },
    {
        operator:"South Bihar Power Distribution Company Ltd.",       
        IDtype:["CA Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op163.png`
    },
    {
        operator:"SOUTHCO, Odisha",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op175.png`
    },
    {
        operator:"Tamil Nadu Electricity Board (TNEB)",       
        IDtype:["Consumer Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op189.png`
    },
    {
        operator:"Tata Power - Delhi",       
        IDtype:["Customer Account Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op41.png`
    },
    {
        operator:"Tata Power - Delhi",       
        IDtype:["Customer Account Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op146.png`
    },
    {
        operator:"Torrent power",       
        IDtype:["Circle","Service Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op71.png`
    },
    {
        operator:"TP Ajmer Distribution Ltd (TPADL)",       
        IDtype:["Customer Account Number"],
        logo:`https://static.mobikwik.com/appdata/operator_icons/op177.png`
    }
])
const [operator,setOperator ] = useState(dropdownItems[objectselector].operator)

  const handle_input = ( event )=>{ 
      setOperator( event.target.value);
  }
    return (
        <div className=" row ">
            <div className="col-12 background-color wrappper">
                <div className="row">
                    <div className="col-12 d-flex align-items-center" style={{ color: "white", paddingBottom: "24px" }}>
                        <img src={dropdownItems[objectselector].logo} className=" border-radius-50 me-3 logo-image" alt='' />
                        <h1 className="electricity-payment-heading"> PAY AVVNL ELECTRICITY BILL ONLINE </h1>
                    </div>
                </div>
                <form>
                    <div className="row form-wrappper" >
                        <div className="col-12 col-md-5">
                        <label for="dropdown" class="form-label label"> Operator</label>
                            <div className="dropdown" name=" dropdown">
                                <input class="btn w-100 dropdown-toggle d-flex justify-content-end dropdown-button" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" value= {operator } onChange={ handle_input}/>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {dropdownItems.map( (dropdownItem , index) =>(
                                    <li  className="dropdown-item mb-2 mt-2"  key={index} onClick={()=>{ setObjectSelector( index ); setOperator(dropdownItem.operator);}}>{ dropdownItem.operator }</li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {(dropdownItems[objectselector].IDtype.length ==1)?
                        <div className="col-12 col-md-5">
                        <label for="dropdown" class="form-label label"> {dropdownItems[objectselector].IDtype} </label>
                            <input type="text" name="" className="form-control  k-number " placeholder={dropdownItems[objectselector].IDtype} />
                        </div>
                        :
                        dropdownItems[objectselector].IDtype.map(( object )=>(                        
                        <div className="col-12 col-md-3">
                        <label for="dropdown" class="form-label label"> {object} </label>
                            <input type="text" name="" className="form-control  k-number " placeholder={object} />
                        </div>
                        ))
                    }
                        <div className=" col-12 col-md-1">
                            <button type="button" className="btn btn-secondary  go-button"> GO </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
