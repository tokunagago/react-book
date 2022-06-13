const Result = (props) => {
  return (
    <div>
      {props.results.cityName && <div className="results-city">{props.results.cityName}</div>}
      {props.results.country && <div className="results-countory">{props.results.country}</div>}
      {props.results.temperature && <div className="results-temp">{props.results.temperature}</div>}
      {props.results.conditionText &&
        <div className="results-condition">
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      }
    </div>
  );

};

export default Result;