
import './App.css';
import { Region } from './components/region/region';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState ([]);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
      fetch('http://localhost:3000/data/all.json')
          .then(res=> res.json())
          .then (resData => setData(resData))
          .catch(err => setIsError(true));
  }, []);


  
  const regions = [];
  let regionList=['Klaida. Nepavyko pasiimti duomenų'];
  console.log(data);

  
  if (!isError){ 
  for (const country of data){
      if(!regions.includes(country.region)){
      regions.push(country.region)
  }
}
 regionList = regions.map((region, idx) => (
           <Region key={idx} title={region} countries={data.filter(country => country.region===region)} />
           ));
 }



  return (
          <div>
      
      {regionList }
        </div>
        );
      }
  

export default App;
