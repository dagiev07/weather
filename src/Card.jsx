const Card = ({ data }) => {
  return (
    <div className={!data.current.is_day ? `night-bg` : "card"}>
      <div className="about">
        <div className="name">{data.location.name}</div>

        <div className="img">
          <img src={data.current && data.current.condition.icon} alt="" />
        </div>
      </div>
      <div className="location-temperature">
        <div className="location">{data.location.region}</div>
        <div className="temperature">{data.current.temp_c}ºC</div>
      </div>
      <div className="data-temperature">
        <div className="data">{data.location.localtime}</div>
        <div className="temperature">{data.current.temp_f}ºF</div>
      </div>
    </div>
  );
};

export default Card;