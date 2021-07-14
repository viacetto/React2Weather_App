import MiniWeather from './MiniWeather'
function Week({ titleClass, containerClass, wrapperClass, viewName, currentQuery, currrentData }) {
  const dataNumber = currrentData.length
  const data = currrentData.slice(dataNumber-5)
  return (
    <div className={containerClass}>
      <span className={titleClass}>{viewName}</span>
      <span className={wrapperClass}>
      {data.map((el) => {
              return (
                <MiniWeather titleClass={titleClass} key={el.dt} elData={el} ></MiniWeather>
              )
            })}
      </span>
    </div>
  )
}
export default Week;