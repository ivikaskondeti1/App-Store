import './index.css'

const TabItem = props => {
  const {tabsList, changeTab, activeTab} = props
  let active = null
  const selectCategorie = event => {
    const Value = event.target.dataset.mssg
    changeTab(Value)
  }
  // console.log(tabsList)
  return (
    <ul className="mainPage2">
      {tabsList.map(eachItem => {
        active = activeTab === eachItem.tabId ? 'active' : ''
        return (
          <li
            className={active}
            key={eachItem.tabId}
            onClick={selectCategorie}
            data-mssg={eachItem.tabId}
          >
            {eachItem.displayText}
          </li>
        )
      })}
    </ul>
  )
}

export default TabItem
