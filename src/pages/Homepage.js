import  {Navbar}  from "../components/Navbar/Navbar.js";
import {Hero} from "../components/Hero/Hero.js";
import {Collection} from "../components/Collection/Collection.js";
import {Category} from "../components/Category/Category.js";

export const Homepage=()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Collection/>
        <Category/>
        </>
    )

}