import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBSelect,
	MDBRadio,
	MDBTextArea,
  } from "mdb-react-ui-kit";
  
  import "bootstrap/dist/css/bootstrap.css";
  
  import Button from "react-bootstrap/Button";
  import "./App.css";
  import React, { useState, useEffect } from "react";
  import moment from "moment";
  import { useParams } from "react-router-dom"; 
  
  const ExpenseVoucher = () => {
	const [trnch_name, setTrnch_name] = useState([]);
   
  
	const {Brncode} = useParams();
	
	useEffect(() => {
  debugger;
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  
  var raw = {"Brncode": Brncode,   };
  
  var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: JSON.stringify(raw),
	redirect: 'follow'
  };
  
  fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/tranchexpense", requestOptions)
	.then(response => response.json())
	.then(result => console.log(result))
	.then((result)=>{
		debugger;
		result.Data.map((resp)=>{
		  console.warn("resp",resp)
		  setTrnch_name(resp.trnch_name)
		 
		})})      
	.catch(error => console.log('error', error));
	  // var data = {
	  //   "Emp_kid": Emp_kid,
	  // };
	  
	  // axios.post("http://localhost:8190/CobaSysM3/rest/AccInfoService/fetchEmpData",{
	   
	  //  // method:'POST',
	  //   heafetchders:{
	  //     'Accept':'application/json',
	  //     'Content-Type':'application/json'
	  //   },
	  //   body:JSON.stringify(data)
		
	  // }).then((result)=>{
	  //   debugger;
	  //   data.json().then((resp)=>{
	  //     console.warn("resp",resp)
	  //     setEmp_name(result.user.Emp_name)
	  //       setEmp_city(result.user.Emp_city)
	  //       setEmp_email(result.user.Emp_email)
	  //       setEmp_designation(result.user.Emp_designation)
	  //   }) ;    
		
	  
	   
	  // })
	  // axios.post("http://localhost:8190/CobaSysM3/rest/AccInfoService/fetchEmpData")
	  //   .then(res => res.json())
		
	  //   .then(
	  //     (result) => {
	  //       setEmp_name(result.user.Emp_name)
	  //       setEmp_city(result.user.Emp_city)
	  //       setEmp_email(result.user.Emp_email)
	  //       setEmp_designation(result.user.Emp_designation)
			
	  //       // setAvatar(result.user.Emp_code)
	  //     }
	  //   )
	}, [Brncode])
   
  
  
  
	const [value, setValue] = useState(moment().format("DD-MM-YYYY"));
  
	const onChangeDate = (date) => {
	  debugger;
	  const newDate = moment(date.timeStamp).format("DD-MM-YYYY");
	  setValue(newDate);
	  console.log(newDate); //always log "1970-01-01"
	};
  
	
  
	function myFunction() {
	  debugger;
	  var pttable = document.getElementById("myTable");
	  var ptRowCount = pttable.rows.length;
	  //	var s=ptaddr.parentNode.parentNode.parentNode;
	  var ptNewRow = pttable.insertRow(ptRowCount);
	  ptNewRow.innerHTML = swRow;
	}
	function CreaditRow() {
	  debugger;
	  var pttable = document.getElementById("CreditTable");
	  /* var ptRowCount = pttable.rows.length;
	  //	var s=ptaddr.parentNode.parentNode.parentNode;
	  var ptNewRow = pttable.insertRow(ptRowCount-1);
	  ptNewRow.innerHTML = CreRow; */
  
	  var tableLength = pttable.rows.length;
	  pttable.insertRow(tableLength).innerHTML = CreRow;
	}
	function SWremove() {
	  debugger;
	  var pttable = document.getElementById("CreditTable");
	  var s = pttable.rows.length;
  
	  pttable.deleteRow(s - 1);
	}
	// function SWremove(r) {
	//   var i = r.parentNode.parentNode.rowIndex;
	//   document.getElementById("CreditTable").deleteRow(i);
	// }
  
	// function SWremove(ptrm){
	// 	debugger;
  
	// 		var pyttable=document.getElementById("CreditTable");
	// 		var s=ptrm.parentNode.parentNode.parentNode.parentNode;
	// 		var i=s.rowIndex;
	// 		var ptRowCounter=pyttable.rows.length;
	// 			if(pyttable.rows.length!=3){
	// 		pyttable.deleteRow(i);
	// 		for(var j=1;j<ptRowCounter-2;j++){
	// 				pyttable.rows[j+1].childNodes[0].childNodes[0].value=j;
	// 			}
	// 			}
	// }
  
	var swRow =
	  '<tr>    <td><select    style="width:100%"><option>1</option><option>2</option><option>3</option></select</td><td><input type="text"  style="width:100%" name="requisition" id="requisition" /></td><td><select    style="width:100%;"><option>1</option><option>2</option><option>3</option></select</td><td><input type="text" name="requisition" id="requisition" /></td> <td><input type="text" name="requisition" id="requisition"  style="width:100%;" /></td> <td><input type="text" name="requisition" id="requisition" /></td><td> <div> <a><i class="fas fa-plus" id="requisition" onClick={myFunction}></i></a> &nbsp;&nbsp;&nbsp;<a><i class="fas fa-minus"></i></a> </div> </td> </tr>';
  
	var CreRow =
	  '<tr>    <td><input type="text" style="width:100%;" name="requisition" id="requisition" /></td><td><input type="text"  style="width:100%;" name="requisition" id="requisition" /></td><td><input type="text"  style="width:100%;" name="requisition" id="requisition" /></td> <td> <div> <a> <i class="fas fa-plus" onClick="CreaditRow()" ></i></a> &nbsp;&nbsp;&nbsp;<a><i class="fas fa-minus" id="CreditTable" onClick={SWremove}></i></a> </div> </td> </tr>';
	const divStyle = {
		overflow:'scroll',
	  overflowY: "auto",
	  overflowX: "hidden",
	  height: "100%",
	  width: "100%",
	  


	 
	};
  
	return (
	  <div
		id=""
		style={{
		  marginTop: "10px",
		  marginLeft: "5px",
		  marginRight: "5px",
		  height: "80px",
		}}
	  >
		<div>
		  <nav
			className="bg-primary  navbar-primary navbar"
			style={{ borderRadius: "6px" }}
		  >
			<div className="row col-12 d-flex justify-content-center text-white">
			  <h3 style={{ color: "black" }}>
				<center>
				  <b>Expense Voucher without GST</b>
				</center>
			  </h3>
			</div>
		  </nav>
		</div>
  
		<div className="table">
		  <MDBContainer fluid>
			<MDBRow className="justify-content-center align-items-center m-6">
			  <MDBCard
				className="my-10 rounded-3"
				style={{
				  Width: "100%",
				  marginLeft: "30px",
				  marginRight: "30px",
				  marginTop: "25px",
				  backgroundColor: "#28348a1f",
				}}
			  >
				<MDBCardBody className="px-4">
				  <div
					className="dispatch"
					style={{
					  backgroundColor: "lightblue",
  
					  marginBottom: "10px",
					  marginLeft: "-15px",
					}}
				  >
					{/* <button class="btn btn-primary mt-4 social-button " md="5" style={{  fondSize: "100",}} >  <b>Dispatch/Receipt</b></button> */}
				  </div>
				  <MDBRow>
					<MDBCol md="2">
					  <div className="">
						<label>
						  <h5>Accounting Date</h5>
						</label>
					  </div>
					  <MDBInput
						wrapperClass="mb-3"
						value={value}
						style={{ width: "70%" }}
						onChange={onChangeDate}
						size=""
						fond-size="1.1em"
						id="form2"
						type=""
						className="form-control input"
					  />
					</MDBCol>
					<MDBCol md="3">
					  <div className="">
						<label>
						  <h5>Mode Of Delivery</h5>
						</label>
					  </div>
  
					  <select
					   onChange={(e) =>(e.target.value)}
					   value={trnch_name}
						wrapperClass="mb-3"
						id="tranche"
						name="tranche"
						style={{
						  width: "60%",
						  fontSize: "1.1em",
						  height: "40px",
						  borderRadius: "6px",
						  marginTop: "1px",
						  borderColor: "lightblue",
						}}
					  >
					   
						<option
						  id=""
						  value={trnch_name}
				  
				  onChange={(e) => setTrnch_name(e.target.value)}
							  
						 
						>
						  --Selected Tranch--
						</option>
  
  {/* {
	 trnch_name.map((getcon ,index)=>
  <option  key={index}  value={getcon.trnch_name}>{getcon.trnch_name}</option>
	 )
  } */}
						
						{/* <option
						  id="NewTranch2"
						  value={trnch_name}
						  onChange={(e) => setTrnch_name(e.target.value)}
						></option>
						<option
						  id="Tranch1"
						  value={trnch_amount}
						  onChange={(e) => setTrnch_amount(e.target.value)}
						></option> */}
					  </select>
					</MDBCol>
  
					<MDBCol md="3">
					  <MDBInput
						style={{
						  fontSize: "1.1em",
						  marginTop: "8%",
						  width: "50%",
						}}
						id="showTrnBalance"
						type="text"
					  />
					</MDBCol>
				  </MDBRow>
				</MDBCardBody>
			  </MDBCard>
			</MDBRow>
			<MDBCard
			  className="my-10 rounded-4"
			  style={{
				Width: "120%",
				marginLeft: "20px",
				marginRight: "-5px",
				marginTop: "20px",
			  }}
			>
			  <div>
				<MDBCardBody className="px-4">
				  <h4 style={{ textAlign: "left" }}>Debit Details</h4>
  
				  <div class="fixed-table-body" style={divStyle}>
					<table
					  className="table table-table table-striped table-bordered table-sm"
					  id="myTable"
					  style={{
						border: "1px solid black",
						marginLeft: "20px",
						padding: "10px",
						marginTop: "20px",
						width: "100%",
					  }}
					>
					  <thead style={{ backgroundColor: "aqua" }}>
						<tr>
						  <th style={{ width: "px" }}>Revenue/Capital</th>
						  <th style={{ width: "20%" }}>A/C Head</th>
						  <th style={{ width: "20%" }}>Budget Head</th>
						  <th width="">Amount</th>
						  <th style={{ width: "20%" }}>Narration</th>
						  <th width="170">Remaining Bal.</th>
  
						  <th width="">Action</th>
						</tr>
					  </thead>
					  <tbody>
						<tr>
						  <td>
							<select
							  wrapperClass="mb-3"
							  style={{
								width: "60%",
								fontSize: "1.1em",
								height: "40px",
								borderRadius: "6px",
								width: "100%",
								marginTop: "1px",
								borderColor: "lightblue",
							  }}
							>
							  <option>--Selected Tranch--</option>
							  <option>1</option>
							  <option>2</option>
  
							  <option>4</option>
							</select>
						  </td>
						  <td>
							<input
							  className="form-control"
							  type="text"
							  style={{ width: "100%" }}
							  name="orderNo"
							  id="orderNo"
							/>{" "}
						  </td>
						  <td>
							<select
							  wrapperClass="mb-3"
							  style={{
								width: "60%",
								fontSize: "1.1em",
								height: "40px",
								borderRadius: "6px",
								width: "100%",
								marginTop: "1px",
								borderColor: "lightblue",
							  }}
							>
							  <option>--Selected Tranch--</option>
							  <option>1</option>
							  <option>2</option>
  
							  <option>4</option>
							</select>
						  </td>
						  <td>
							<input
							  type="text"
							  className="form-control"
							  style={{ width: "100%" }}
							  name="orderNo"
							  id="orderNo"
							/>{" "}
						  </td>
						  <td>
							<input
							  type="text"
							  className="form-control"
							  style={{ width: "100%" }}
							  name="orderNo"
							  id="orderNo"
							/>{" "}
						  </td>
						  <td>
							<input
							  type="text"
							  className="form-control"
							  name="requisition"
							  id="requisition"
							/>
						  </td>
  
						  <td>
							<div>
							  <a>
								<i class="fas fa-plus" onClick={myFunction}></i>
							  </a>{" "}
							  &nbsp;&nbsp;&nbsp;
							  <a>
								<i class="fas fa-minus"></i>
							  </a>
							</div>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </div>
				</MDBCardBody>
			  </div>
			</MDBCard>
			<div className="table">
			  <MDBCard
				className="my-10 rounded-4"
				style={{
				  Width: "120%",
				  marginLeft: "20px",
				  marginRight: "-5px",
				  marginTop: "20px",
				  display: "flex",
				}}
			  >
				<MDBCardBody className="px-4">
				  <h4 style={{ textAlign: "left" }}>Credit Details</h4>
  
				  <div class="fixed-table-body">
					<table
					  className="table table-table table-striped table-bordered table-sm"
					  id="CreditTable"
					  style={{
						border: "1px solid black",
						marginLeft: "20px",
						paddingRight: "50px",
						padding: "10px",
						marginTop: "20px",
						width: "100%",
					  }}
					>
					  <thead style={{ backgroundColor: "aqua" }}>
						<tr>
						  <th style={{ width: "30%" }}>A/C Head</th>
						  <th style={{ width: "15%" }}>Amount</th>
						  <th style={{ width: "30%" }}>Narration</th>
  
						  <th style={{ width: "5%" }}>Action</th>
						</tr>
					  </thead>
					  <tbody>
						<tr>
						  <td>
							<input
							  type="text"
							  className="form-control"
							  name="orderNo"
							  style={{ width: "100%" }}
							  id="orderNo"
							/>{" "}
						  </td>
						  <td>
							<input
							  type="text"
							  className="form-control"
							  name="orderNo"
							  style={{ width: "100%" }}
							  id="orderNo"
							/>{" "}
						  </td>
						  <td>
							<input
							  type="text"
							  name="orderNo"
							  className="form-control"
							  style={{ width: "100%" }}
							  id="orderNo"
							/>{" "}
						  </td>
  
						  <td>
							<div>
							  <a onClick={CreaditRow}>
								<i class="fas fa-plus"></i>
							  </a>{" "}
							  &nbsp;&nbsp;&nbsp;
							  <a onClick={SWremove}>
								<i class="fas fa-minus"></i>
							  </a>
							</div>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </div>
				</MDBCardBody>
			  </MDBCard>
			</div>
  
			<MDBCard
			  className="my-10 rounded-4"
			  style={{
				Width: "120%",
				marginLeft: "20px",
				marginRight: "-5px",
				marginTop: "20px",
				paddingLeft: "10%",
			  }}
			>
			  <div class="container-fluid mt-3" style={{}}>
				<div class="row">
				  <div class="col-sm-2 white text-black">
					<label>
					  <h4 style={{ textAline: "center" }}>File No.</h4>
					</label>
					<input
					  class="form-control"
					  type="text"
					  placeholder=""
					  required
					/>
				  </div>
				  <div class="col-sm-2 white text-black">
					<label>
					  <h4>Approval Date</h4>
					</label>
					<input
					  class="form-control"
					  type="date"
					  placeholder=""
					  required
					/>
				  </div>
				  <div class="col-sm-2 white text-black">
					<label>
					  <h4>Invoice No</h4>
					</label>
					<input
					  class="form-control"
					  type="text"
					  placeholder=""
					  required
					/>
				  </div>
				  <div class="col-sm-2 white text-black">
					<label>
					  <h4>Invoice Date</h4>
					</label>
					<input
					  class="form-control"
					  type="date"
					  placeholder=""
					  required
					/>
				  </div>
				</div>
			  </div>
			</MDBCard>
  
			<div
			  class="container"
			  style={{
				marginTop: "80px",
				width: "420px",
				height: "120%",
				cursor: "pointer",
				justifyContent: "space-around",
			  }}
			>
			  <div class="row">
				<div class="col">
				  <button
					id="btnSubmit"
					class="btn btn-primary active form-control  btn-block"
				  >
					Cancel
				  </button>
				</div>
				<div class="col">
				  <button
					id="btnSubmit"
					class="btn btn-primary active form-control btn-block"
					type="submit"
				  >
					Submit
				  </button>
				</div>
				<div class="col">
				  <button
					id="btnSubmit"
					class="btn btn-primary active form-control btn-block"
					type="submit"
				  >
					Save
				  </button>
				</div>
			  </div>
			</div>
			<br />
			<br />
  
			<br />
  
			<br />
  
			<br /> 
		  </MDBContainer>
		</div>
	  </div>
	);
  };
  
  export default ExpenseVoucher;
  