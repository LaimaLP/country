import "./App.css";
import { Region } from "./components/region/Region";
import { useEffect, useState } from "react";
import { SearchInput } from "./components/region/SearchInput";

function App() {
  const [data, setData] = useState([]);
  const [baseData, setBaseData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/data/all.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData)
        setBaseData(resData)
      })
      .catch((err) => setIsError(true));
  }, []);

  const regions = [];

  let regionList = ["Klaida. Nepavyko pasiimti duomenų"];

  if (!isError) {
    for (const country of data) {
      if (!regions.includes(country.region)) {
        regions.push(country.region);
      }
    }
    regionList = regions.map((region, idx) => (
      <Region
        key={idx}
        title={region}
        countries={data.filter((country) => country.region === region)}
      />
    ));
  }

  function handleChange(inputValue) {

    setData(baseData.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      || (country.name.nativeName &&  Object.values(country.name.nativeName)[0].common.toLowerCase().includes(inputValue.toLowerCase()))
     ))
  }

  return (
    <div>
      <SearchInput handleChange={(value) => handleChange(value)} />
      {regionList}
    </div>
  );
}

export default App;

// data.forEach(country => {
//   if(country.name.nativeName && country.name.nativeName.lit)
// console.log("obejkto pirmojo param value:", Object.values(country.name.nativeName)[0].common)
// });

// if(!inputValue || inputValue==="" ){
//   setData(data)
//  }
