import "./App.css";
import { Region } from "./components/region/Region";
import { useEffect, useState } from "react";
import { SearchInput } from "./components/region/SearchInput";

function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/data/all.json")
      .then((res) => res.json())
      .then((resData) => setData(resData))
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
console.log("data xxxxxxxxxxxxx:", data)
    regionList = regions.map((region, idx) => (
      <Region
        key={idx}
        title={region}
        countries={data.filter((country) => country.region === region)}
      />
    ));
  }

    function handleChange(inputValue){
      data.forEach(element => {
        console.log("vemiam", element)
      });
      setData(data.filter((country) => country.name.nativeName.toLowerCase().includes(inputValue.toLowerCase()) || country.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    }


  return (
    <div>
      <SearchInput handleChange={(value)=> handleChange(value)}/>
      {regionList}
    </div>
  );
}

export default App;
