import { Country } from "../country/Country"
import style from "./Region.module.css"
import { SearchInput } from "./SearchInput";




export function Region({ title, countries, inputName }) {

    return (
        <div className={style.regionContainer}>
            <h1>{title}</h1>
            <div className={style.region}>
                {countries.map((country, idx) =>
                    <Country key={idx} name={country.name.common} flag={country.flags.png} capital={country.capital} startOfWeek={country.startOfWeek} populiation={country.population} />)}
            </div>
        </div>
    )
}