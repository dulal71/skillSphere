import Banner from "@/components/Banner";

import Instructors from "@/components/Instructors";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import Review from "@/components/Review";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <PopularCourses></PopularCourses>
    <LearningTips></LearningTips>
    <Instructors></Instructors>
    <Review></Review>
    
  </div>
      
  );
}
