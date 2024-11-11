import Footer from "../components/Footer";
import Header from "../components/Header";
import TourCard from "../components/TourCard";

const Overview = () => {
    return (
      <>
      <Header/>
      <main className="main">
        <div className="card-container">
          {[1,2,3,4,5,6].map((item)=>{return<TourCard imageNum={item}/>})}
        </div>
      </main>
      <Footer/>
      </>
    )
};

export default Overview;
