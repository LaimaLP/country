import style from "./Country.module.css"

export function Country({name, flag, capital, startOfWeek, populiation}) {
    return (
        <div className={style.flagContainer}>
            <div className={style.flagItem}>
                <img src={flag} alt="flag" />
                <div className={style.countryDetails}> 
                    <h2>{name}</h2>
                    <p> <b>Capital:</b> {capital}  </p>
                    <p> <b>Start of week:</b> {startOfWeek}</p>
                    <p> <b>Population size:</b> {populiation}</p>
                </div>
            </div>
        </div>
    )
}