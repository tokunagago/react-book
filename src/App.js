import { useState } from "react";
import axios from 'axios';
import Title from './components/Title'
import Form from './components/Form';
import Result from './components/Results'
import './App.css';
import Loading  from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [results, setResults] = useState({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  });

  const getWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`https://api.weatherapi.com/v1/current.json?key={API_KEY}&q=${city}&aqi=no`)
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
        setCity('');
        setLoading(false);
      })
      .catch(err => alert('エラーが発生しました。ページをリロードしてください。'));
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading /> : <Result results={results} />}
      </div>
    </div>
  );
}

export default App;