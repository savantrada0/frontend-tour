type PicCardProps = {
    imageNum: number
}

const PictureCard = (imageNum:PicCardProps) => {
  return (
    <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--1"
          src={`img/tour-5-${imageNum}.jpg`}
          alt="The Park Camper Tour 1"
        />
      </div>
  )
}

export default PictureCard
