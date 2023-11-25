import './App.css';

import {useState, useEffect} from "react";



function App() {
  const [datas,setDatas] = useState([]);

  const loadData = async()=>{
    
    try {
      const response = await fetch("http://localhost:5000/api/user");
    const data = await response.json();
   
    setDatas(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {datas.map((val) => {
        return <div>{val.name}</div>;
      })}
    </div>
  );
}

export default App;
