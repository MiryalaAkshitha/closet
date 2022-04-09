import "../Collection/Collection.css";
import collectionImg1 from "../../assets/collection-img1.webp";
import collectionImg2 from "../../assets/collection-img2.webp";
import collectionImg3 from "../../assets/collection-img3.webp";
export const Collection = () => {
  return (
    <>
      <div className="collection-container">
        <div className="collection-card-wrapper">
        <img
          className="collection-img product-one"
          src={collectionImg1}
          alt="image"
        />
        <span  className="best-seller">best-seller</span>
        </div>
        <div className="collection-card-wrapper">
        <img
          className="collection-img dresses-img"
          src={collectionImg2}
          alt="image"
        />
<span  className="best-seller">best-seller</span>
</div>
<div className="collection-card-wrapper">
        <img
          className="collection-img"
          src={collectionImg3}
          alt="image"
        />
        <span  className="best-seller">best-seller</span>
      </div>
    </div>
    </>
  );
};
