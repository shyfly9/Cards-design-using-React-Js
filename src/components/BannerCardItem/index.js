import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <li className={`card ${className}`}>
      <h1 className="head">{headerText}</h1>
      <p className="describe">{description}</p>
      <button className="btn" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
