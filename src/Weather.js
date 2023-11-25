import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container outer-edge">
        <form className="form-inline">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Please type a location..."
            autofocus="on"
            autocomplete="off"
          />

          <button type="submit" className="btn btn-dark mb-2">
            Search
          </button>
        </form>
        <div className="container inner-edge">
          <div className="row">
            <span className="col-sm">
              <div className="col-sm">
                <h1>Amsterdam</h1>
                <small className="sub-text">
                  <i className="fa-solid fa-location-dot"></i> <small>NL</small>
                </small>
                <br />

                <small className="updateInfo">
                  Last updated: <span>Saturday 13:53</span>
                </small>

                <br />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/mostly-sunny-cloudy-cloud-512.png"
                  alt="Few clouds icon"
                  className="iconStyle"
                />
                <br />
                <div>
                  <small className="light-text">currently</small>
                </div>
                <div className="currentTemp">10°C</div>
                <small className="high-low-text">H: </small>
                <span className="light-text temperatures">9</span>
                <small className="high-low-text"> L: </small>
                <span className="light-text temperatures">7</span>
                <br />
                <br />
                <div className="light-text">
                  <a className="units" href="#">
                    °C
                  </a>{" "}
                  |{" "}
                  <a className="units" href="#">
                    °F
                  </a>
                </div>
                <br />
                <div className="info-text-1">Few clouds</div>
                <div className="info-text-2">
                  Feels like 4°C • Humidity 83% • Wind 6 m/s
                </div>
                <br />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
