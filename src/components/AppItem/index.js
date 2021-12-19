import './index.css'

const AppItem = props => {
  const {appsList} = props
  // console.log(appsList)
  return (
    <ul className="mainPage3">
      {appsList.map(eachItem => (
        <li className="AppDetails" key={eachItem.appId}>
          <img src={eachItem.imageUrl} alt="AppImage" className="appImage" />
          <h1 className="appName">{eachItem.appName}</h1>
        </li>
      ))}
    </ul>
  )
}

export default AppItem
