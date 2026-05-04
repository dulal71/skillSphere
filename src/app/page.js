import Banner from "@/components/Banner";

import Instructors from "@/components/Instructors";
import LearningTips from "@/components/LearningTips";
import NewRelaases from "@/components/NewRelaases";
import PopularCourses from "@/components/PopularCourses";
import Review from "@/components/Review";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner></Banner>
    <PopularCourses></PopularCourses>
    <NewRelaases></NewRelaases>
    <LearningTips></LearningTips>
    <Instructors></Instructors>
    <Review></Review>
    
  </div>
      
  );
}
