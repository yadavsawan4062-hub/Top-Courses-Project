import React from "react";
import {FcLike,FcLikePlaceholder}  from "react-icons/fc";
import {toast} from "react-toastify";


const Card = (props)=>{
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
     // logic 
     if(likedCourses.includes(course.id)){
      // pehle se like hua pada tha 
      setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id ) ) );
      toast.warning("like removed");

     }
     else {
      // pehale se like mhi hai ye course 
      // insert karna h ye course liked courses me
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else {
        // npn-empty pehle se 
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success("like successfully");
     }
  }

    return (
        <div className="w-full h-[360px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden flex flex-col">
          <div className="relative">
            <img
  src={course.image.url}
  alt={course.title}
  className="w-full h-[170px] object-cover"
/>
          

          <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-12px]
          grid place-items-center "> 
           <button
  onClick={(e) => {
    e.stopPropagation();
    clickHandler();
  }}
>
  {
    likedCourses.includes(course.id)
      ? (<FcLike fontSize="1.75rem" />)
      : (<FcLikePlaceholder fontSize="1.75rem" />)
  }
</button>
          </div>
          </div>
    <div className="p-4 ">
        <p className="text-white font-semibold text-lg leading-6 ">{course.title}</p>
        <p className="m-2 text-white line-clamp-4">
  {course.description}
</p>
    </div>
        </div>
    )
}

export default Card;