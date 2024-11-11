import ReviewCard from '../components/ReviewCard'

const ReviewSection = () => {
  return (
    <section className="section-reviews">
      <div className="reviews">
        {[7,14,6,15,3].map(item=>{return(<ReviewCard imageNum={item}/>)})}
      </div>
    </section>
  )
}

export default ReviewSection
