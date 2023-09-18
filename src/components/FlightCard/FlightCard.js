import FlightCardStyles from "./FlightCard.module.css";

const FlightCard = ({ flight, legs }) => {
  const departureDate = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const weekday = date.toLocaleString("default", { weekday: "short" });
    const formattedDate = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${day} ${month} ${weekday}`;

    return formattedDate;
  };

  const arrivalDate = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const weekday = date.toLocaleString("default", { weekday: "short" });
    const formattedDate = `${day} ${month} ${weekday} ${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;

    return formattedDate;
  };

  const calculateTimeDifference = (index) => {
    const departure = new Date(legs[index].segments[0].departureDate);
    const arrival = new Date(legs[index].segments[0].arrivalDate);
    const timeDifference = arrival.getTime() - departure.getTime();
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours} ч ${minutes} мин`;
  };

  const layovers = legs[0].segments.length - 1;

  return (
    <div className={FlightCardStyles.flightCard}>
      <div className={FlightCardStyles.title}>
        <p className={FlightCardStyles.amount_price}>
          {flight && flight.price.total.amount} &#x20bd;
        </p>
        <p className={FlightCardStyles.amount_text}>Стоймость для одного взрослого пассажира</p>
      </div>
      {flight && legs && (
        <div className="legs">
          <div className={FlightCardStyles.leg}>
            <div className={FlightCardStyles.flight_info}>
              <p className={FlightCardStyles.flight_text}>
                {legs[0].segments[0].departureCity &&
                  `${legs[0].segments[0].departureCity.caption},`}
              </p>
              <p className={FlightCardStyles.flight_text}>
                {legs[0].segments[0].departureAirport.caption}
              </p>
              <span className={FlightCardStyles.uid_text}>
                ({legs[0].segments[0].departureAirport.uid}) &rarr;
              </span>
              <p className={FlightCardStyles.flight_text}>
                {legs[0].segments[0].arrivalCity.caption}
              </p>
              <p className={FlightCardStyles.flight_text}>
                {legs[0].segments[0].arrivalAirport.caption} (
                {legs[0].segments[0].arrivalAirport.uid})
              </p>
            </div>

            <div className={FlightCardStyles.timing}>
              <p className={FlightCardStyles.flight_text}>
                {departureDate(legs[0].segments[0].departureDate)}
              </p>
              <p className={FlightCardStyles.flight_text}> &#8986; {calculateTimeDifference(0)}</p>
              <p className={FlightCardStyles.flight_text}>
                {arrivalDate(legs[0].segments[0].arrivalDate)}
              </p>
            </div>
            {layovers > 0 ? (
              <p className={FlightCardStyles.layovers}>{layovers} пересадка</p>
            ) : (
              <p></p>
            )}
            <p className={FlightCardStyles.carrier}>Рейс выполняет: {flight.carrier.caption}</p>
          </div>
          <div className={FlightCardStyles.leg}>
            <div className={FlightCardStyles.flight_info}>
              <p className={FlightCardStyles.flight_text}>
                {legs[1].segments[legs[1].segments.length - 1].departureCity &&
                  legs[1].segments[legs[1].segments.length - 1].departureCity.caption}
              </p>
              <p className={FlightCardStyles.flight_text}>
                {legs[1].segments[legs[1].segments.length - 1].departureAirport &&
                  legs[1].segments[legs[1].segments.length - 1].departureAirport.caption}
              </p>
              <span className={FlightCardStyles.flight_code}>
                (
                {legs[1].segments[legs[1].segments.length - 1].departureAirport &&
                  legs[1].segments[legs[1].segments.length - 1].departureAirport.uid}
                ) →
              </span>
              <p className={FlightCardStyles.flight_text}>
                {legs[1].segments[legs[1].segments.length - 1].arrivalCity.caption},{" "}
                {legs[1].segments[legs[1].segments.length - 1].arrivalAirport.caption} (
                {legs[1].segments[legs[1].segments.length - 1].arrivalAirport.uid})
              </p>
            </div>

            <div className={FlightCardStyles.timing}>
              <p className={FlightCardStyles.flight_text}>
                {departureDate(legs[1].segments[0].departureDate)}
              </p>
              <p className={FlightCardStyles.flight_text}>{calculateTimeDifference(1)}</p>
              <p className={FlightCardStyles.flight_text}>
                {arrivalDate(legs[1].segments[0].arrivalDate)}
              </p>
            </div>
            {layovers > 0 && <p className={FlightCardStyles.layovers}>{layovers} пересадка</p>}
            <p className={FlightCardStyles.carrier}>Рейс выполняет: {flight.carrier.caption}</p>
          </div>
        </div>
      )}
      <button className={FlightCardStyles.btn_choose}>Выбрать</button>
    </div>
  );
};

export default FlightCard;
