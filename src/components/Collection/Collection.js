import "../Collection/Collection.css";
export const Collection = () => {
  return (
    <>
      <div className="collection-container">
        <div className="collection-card-wrapper">
        <img
          className="collection-img product-one"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15693072/2021/10/1/e7f58cbd-73db-41ff-8e92-6fc66f9c2c9e1633092374116VeroModaWomenBlueFloralOpaquePrintedCasualShirt1.jpg"
          alt="image"
        />
        <span  className="best-seller">best-seller</span>
        </div>
        <div className="collection-card-wrapper">
        <img
          className="collection-img dresses-img"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9252955/2019/4/17/5b8d2dd5-24b5-4b25-9f0d-06b1078451ae1555483092177-anayna-Women-Green--White-Printed-Straight-Kurta-25115554830-1.jpg"
          alt="image"
        />
<span  className="best-seller">best-seller</span>
</div>
<div className="collection-card-wrapper">
        <img
          className="collection-img"
          src="https://static.wixstatic.com/media/0f643d_26ca5f20554e4f0faebf62d5a8d2bbd4~mv2.jpg/v1/fill/w_625,h_763,al_c,q_85,usm_0.66_1.00_0.01/0f643d_26ca5f20554e4f0faebf62d5a8d2bbd4~mv2.webp"
          alt="image"
        />
        <span  className="best-seller">best-seller</span>
      </div>
    </div>
    </>
  );
};
