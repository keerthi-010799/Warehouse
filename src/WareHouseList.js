import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWareHouse, setWareHouse } from "./action/index";
import './WareHouseList.css';

function WarHouseList(props) {
  useEffect(() => {
    props.dispatch(fetchWareHouse());
  }, []);
  const [cluster, setCluster] = useState();
  const [city, setCity] = useState();
  const [space, setSpace] = useState();
  const [whouse, setHouse] = useState();

  const navigate = useNavigate();
  const clusterFilter = (e) => {
    setCluster(e.target.value);
  };
  const cityFilter = (e) => {
    setCity(e.target.value);
  };
  const spaceFilter = (e) => {
    setSpace(e.target.value);
  };
  const filterWareHouse = () => {
    let dataname;
    console.log(city, cluster, space);
    if ((cluster === undefined || cluster === "") &&(city === undefined || city === "") &&(space == undefined || space == "")) {
      console.log("empty");
      dataname = props.state;
      console.log(dataname);
      setHouse(dataname);
    } else if ((cluster === undefined ||cluster === "") ||(city === undefined ||city === "" )||(space == undefined ||space == "")) {
      console.log("half");
        if ((cluster === undefined || cluster === "") &&(city !== undefined || city !== "") &&(space !== undefined || space !== "")) {
          dataname = props.state
          .filter((w) => w.city === city)
          .filter((w) => w.space_available == space);
          console.log(dataname);
          setHouse(dataname);

        }
        if ((city === undefined || city === "") &&(cluster !== undefined || cluster !== "") &&(space !== undefined || space !== "")) {
          dataname = props.state
          .filter((w) => w.cluster === cluster)
          .filter((w) => w.space_available == space);
          console.log(dataname);
          setHouse(dataname);

        }
        if ((space == undefined || space == "") &&(cluster !== undefined || cluster !== "") &&(city !== undefined || city !== "")) {
          dataname = props.state
          .filter((w) => w.cluster === cluster)
          .filter((w) => w.city == city);
          console.log(dataname);
          setHouse(dataname);

        }
    if ((cluster !== undefined &&cluster !== "") &&(city !== undefined &&city !== "") &&(space !== undefined &&space !== "")) {
      console.log("full filter");
      dataname = props.state
        .filter((w) => w.cluster === cluster)
        .filter((w) => w.city === city)
        .filter((w) => w.space_available == space);
      console.log(dataname);
      setHouse(dataname);
    }
    if((cluster !== undefined || cluster !== "") &&(city === undefined || city === "") &&(space == undefined || space == "")) {
        dataname = props.state
      .filter((w) => w.cluster === cluster);
        console.log(dataname);
        setHouse(dataname);

  }
  if((cluster === undefined || cluster === "") &&(city !== undefined || city !== "") &&(space == undefined || space == "")) {
        dataname = props.state
          .filter((w) => w.city === city)
        console.log(dataname);
        setHouse(dataname);
  }
  if((cluster === undefined || cluster === "") &&(city === undefined || city === "") &&(space !== undefined || space !== "")) {
        dataname = props.state
          .filter((w) => w.space_available == space);
        console.log(dataname);
        setHouse(dataname);

  }
}
};

  const search = (e) => {
    let details = props.state.filter((wHouse) => {
      if (e.target.value === "" || e.target.value === null) {
        console.log(wHouse);
        return wHouse;
      } else if (
        wHouse.name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        console.log(wHouse);
        return wHouse;
      }
    });
    return setHouse(details);
  };
  console.log(whouse);
  
  return (
    <div className="list">
      <h1>Ware House List</h1>
      <header className="App-header"></header>
      <input className="search" placeholder='Type text to search' onChange={search} />
      <br />
      <input className="filter" placeholder="Enter Cluster" onChange={clusterFilter} />
      <input className="filter" placeholder="Enter City" onChange={cityFilter} />
      <input className="filter" placeholder="Enter Space Available" onChange={spaceFilter} />
      <button onClick={filterWareHouse}>filter</button>
      <ul>
      {props.state
        ? whouse
          ? whouse.map((wareHouse) => {
              return (            
                  <li
                      onClick={() =>
                        navigate(`/WareHouseDetails/${wareHouse.id}`)
                      }
                    >
                      {wareHouse.name}
                    </li>
              );
            })
          : props.state.map((wareHouse) => {
              return (
                    <li
                      onClick={() =>
                        navigate(`/WareHouseDetails/${wareHouse.id}`)
                      }
                    >
                      {wareHouse.name}
                    </li>
              );
            })
        : null}
        </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(WarHouseList);