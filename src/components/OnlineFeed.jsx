import React from "react";
import { FaGlasses } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

export default function OnlineFeed() {
  return (
    <div>
      <div>
        <div>
          <FaGlasses size={30} color="#87204D" />
          <p>My Posts</p>
        </div>
        <div>
          <MdPostAdd size={30} color="#87204D" />
          <p>Create New Post</p>
        </div>
      </div>
    </div>
  );
}
