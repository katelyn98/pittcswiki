import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CourseListing from "../components/course-listing"
import { Link } from "gatsby"
import COURSE_LIST from "../data/autogenerated_course_info.json"
import courseCategorizer from "../utils/course-categorizer"

const categorizedCourses = courseCategorizer(COURSE_LIST.courses)

// TODO DESIGN fix this hr, make consitent titles
const CoursesPage = () => (
  <Layout>
    <SEO title="Pitt CS Course Exploration" />
    <h1>Courses</h1>
    <p>
      This page is meant to be an easy way to discover Pitt CS courses! If you
      are unsure of what classes you should take or the degree requirements, be
      sure to check out our{" "}
      <Link to="/guides/scheduling">scheduling guide</Link>!
    </p>
    <CourseListing
      courseList={COURSE_LIST}
      courseCategories={categorizedCourses}
    />
  </Layout>
)

export default CoursesPage
