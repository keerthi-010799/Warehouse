import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getWareHouse } from "./action/index";
import { useParams, useNavigate } from "react-router-dom";
import './WareHouseDetails.css';

const WareHouseDetails = (props) => {
  const [oneWareHouse, setWareHouse] = useState({});

  const { id } = useParams();
  console.log(props.state);
  const navigate = useNavigate();
  useEffect(() => {
    props.getWareHouse();
    getWareHouseById(id);
  }, []);
  const getWareHouseById = (id) => {
    let WareHouses = props.state;
    let WareHouse = WareHouses ? WareHouses.find((w) => w.id == id) : goToHome;
    return setWareHouse(WareHouse);
  };
  const goToHome = () => {
    navigate("/");
  };
  const handleInput = (e) => {
    setWareHouse({
      ...oneWareHouse,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="details">
      <h1>Ware House Details</h1>
      <div className="row">Id: <input className='input' name="id" value={oneWareHouse.id} onChange={handleInput} />
      </div>
      <div className="row">Name:{" "}
      <input className='input' name="name" value={oneWareHouse.name} onChange={handleInput} />
      </div>
      
      <div className="row">Cluster:{" "}
      <input
        name="cluster"
        className='input'
        value={oneWareHouse.cluster}
        onChange={handleInput}
      /></div>
      
      <div className="row">Code:{" "}
      <input className='input' name="code" value={oneWareHouse.code} onChange={handleInput} />
      </div>
      
      <div className="row">City:
      <input className='input' name="city" value={oneWareHouse.city} onChange={handleInput} />
      </div>
      
      <div className="row">Space Available:{" "}
      <input
        name="space_available"
        className='input'
        value={oneWareHouse.space_available}
        onChange={handleInput}
      /></div>
      
      <div className="row">Type:{" "}
      <input className='input' name="type" value={oneWareHouse.type} onChange={handleInput} />
      </div>
      
      <div className="row">Live:{" "}
      <input
        name="is_live"
        className='input'
        value={oneWareHouse.is_live === true ? "live" : "not in use"}
        onChange={handleInput}
      /></div>
      
      <div className="row">Registered:{" "}
      <input
        name="is_registered"
        className='input'
        value={
          oneWareHouse.is_registered === true ? "regestered" : "not registered"
        }
        onChange={handleInput}
      /></div>
      <br />
      <button onClick={goToHome}>Home</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWareHouse: () => {
      dispatch({ type: getWareHouse });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WareHouseDetails);
