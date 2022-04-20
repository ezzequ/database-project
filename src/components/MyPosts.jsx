import React from "react";
import "./MyPosts.css";
import { FaGlasses } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";




function MyPosts() {
    return (
        
        <div className="container">
        <div className="heading">
            <div>
                <MdMenuBook size={30} color="#87204D"/>
            <p>Go to the feed</p>
            </div>
            <div>
                <FaGlasses size={40} color="#87204D"/>
                <h3>My posts</h3>
            </div>
            <div>
                <MdPostAdd size={30} color="#87204D"/>
            <p>Create new post</p>
            </div>
        </div>
        </div>
      
    ); 
}

export default MyPosts;