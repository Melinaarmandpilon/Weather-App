import day from "../assets/animated/day.svg";
import night from "../assets/animated/night.svg";
import cloudyDay from "../assets/animated/cloudy-day-1.svg";
import cloudyNight from "../assets/animated/cloudy-night-1.svg";
import cloudy from "../assets/animated/cloudy.svg";
import rainy from "../assets/animated/rainy-6.svg";
import rainy2 from "../assets/animated/rainy-3.svg";
import thunder from "../assets/animated/thunder.svg";

export default function WeatherIcon({ icon }) {
  switch (icon) {
    case "01d":
      return <img src={day} alt="Not found" />;
    case "01n":
      return <img src={night} alt="Not found" />;
    case "02d":
      return <img src={cloudyDay} alt="Not found" />;
    case "02n":
      return <img src={cloudyNight} alt="Not found" />;
    case "03d":
      return <img src={cloudy} alt="Not found" />;
    case "03n":
      return <img src={cloudy} alt="Not found" />;
    case "04d":
      return <img src={cloudy} alt="Not found" />;
    case "04n":
      return <img src={cloudy} alt="Not found" />;
    case "09d":
      return <img src={rainy} alt="Not found" />;
    case "09n":
      return <img src={rainy} alt="Not found" />;
    case "10d":
      return <img src={rainy2} alt="Not found" />;
    case "10n":
      return <img src={rainy} alt="Not found" />;
    case "11d":
      return <img src={thunder} alt="Not found" />;
    case "11n":
      return <img src={thunder} alt="Not found" />;
    default:
      return <img src={day} alt="Not found" />;
  }
}
