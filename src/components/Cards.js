import React, { useState } from "react";
import Card from './Card';
import EnrollForm from "./EnrollForm";
const Cards =(props)=>{

  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses]= useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

    // returns you a list of all courses received from the api response
    function getCourses() {
      if(category ==="All"){
        let allCourses=[];        
        Object.values(courses).forEach(array =>{
            array.forEach(courseData=>{
             allCourses.push(courseData); 
            })
        })
      return allCourses;
    }

    else{
      // main sirf specific category ka data array karunga
      return courses[category] || [];
    }

    }


  return (
<div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 items-stretch">
{getCourses().map((course) => {
return (
<div
key={course.id}
onClick={() => setSelectedCourse(course)}
className="cursor-pointer"
>
<Card
             course={course}
             likedCourses={likedCourses}
             setLikedCourses={setLikedCourses}
           />
</div>
);
})}
</div>

  {selectedCourse && (
    <EnrollForm
      course={selectedCourse}
      onClose={() => setSelectedCourse(null)}
    />
  )}
</div>

);
};

export default Cards;