type OverviewCardProps = {
    imageNum: number
}

const OverviewCard = ({imageNum}:OverviewCardProps) => {
  return (
            <div className="overview-box__detail">
              <img
                src={`img/users/user-${imageNum}.jpg`}
                alt="Intern"
                className="overview-box__img"
              />
              <span className="overview-box__label">Intern</span>
              <span className="overview-box__text">Max Smith</span>
            </div>
  )
}

export default OverviewCard
