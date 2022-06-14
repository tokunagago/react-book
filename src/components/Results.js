const Result = ({results}) => {
  const {cityName, country, temperature, conditionText, icon } = results;
  return (
    <>
      {cityName && <div className="results-city">{cityName}</div>}
      {country && <div className="results-countory">{country}</div>}
      {temperature && <div className="results-temp">{temperature}</div>}
      {conditionText &&
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      }
    </>
  );

};

export default Result;