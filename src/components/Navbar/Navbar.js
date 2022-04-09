import "./Navbar.css";


export const Navbar=()=>{
    return (
      <div className="nav-container">
        <nav className="nav-wrapper">
          <div className="title">CLOSET !!</div>
          <div className="nav-pills">
            <input
              className="nav-input"
              type="text"
              placeholder="what are you searching for ?"
            />
            {/* <i class="fas fa-search"></i>  */}
            <i className="wishlist-icon" class="fas fa-2x fa-heart"></i>
            <i className="bag-icon" class="fas fa-2x fa-shopping-bag"></i>
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR332niECXQzBEG3rRciWHTZ0e8IrpaeiMwMA&usqp=CAU"
            />
            <div className="nav-login">login</div>
          </div>
        </nav>
      </div>
    );

}