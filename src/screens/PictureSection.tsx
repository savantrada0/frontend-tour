import PictureCard from '../components/PictureCard'

const PictureSection = () => {
  return (
    <section className="section-pictures">
      {[1,2,3].map((item)=>{return<PictureCard imageNum={item}/>})}
    </section>
  )
}

export default PictureSection
