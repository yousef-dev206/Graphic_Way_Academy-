import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Adminlayout from './Layout/Adminlayout'
import Index from './Admin_components/User/Index'
import Edit from './Admin_components/User/Edit'
import UserLayout from './Layout/UserLayout'
import Create from './Admin_components/User/Create'
import Dashboard from './Admin_components/Dashboard'
import Courses from './Admin_components/Courses/Courses'
import CoursesInfo from './Admin_components/Courses/CoursesInfo'
import CreateCourse from './Admin_components/Courses/CreateCourse'
import Lesson from './Admin_components/Courses/Lesson'
import Userinfo from './Admin_components/User/Userinfo'
import EditCourse from './Admin_components/Courses/EditCourse'
import UCourses from './User_Components/UCourses'
import About_us from './User_Components/About_us'
import Contact_us from './User_Components/Contact_us'
import UCoursesInfo from './User_Components/UCoursesInfo'
import ULesson from './User_Components/ULesson'


const routes = createBrowserRouter([{
  path:'admin',
  element:<Adminlayout/>,
  children:[
    {
      path:'',
      element:<Home/>

  },
    {
      path:'index',
      element:<Index/>
  },
    {
      path:'userinfo',
      element:<Userinfo/>
  },
      {
      path:'edit',
      element:<Edit/>

  },
  {
      path:'create',
      element:<Create/>

  },
  {
      path:'dashboard',
      element:<Dashboard/>

  },
  {
      path:'courses',
      element:<Courses/>

  },
  {
      path:'coursesinfo',
      element:<CoursesInfo/>

  },
  {
      path:'createcourse',
      element:<CreateCourse/>

  },
  {
      path:'editcourse',
      element:<EditCourse/>

  },
    {
      path:'lesson',
      element:<Lesson/>

  }
  
]
},
{
  path:"user",
  element:<UserLayout/>,
  children:[
    {
      path:"",
      element:<Home/>
  },
    {
      path:"courses",
      element:<UCourses/>
  },
    {
      path:"about-us",
      element:<About_us/>
  },
  {
      path:"contact-us",
      element:<Contact_us/>
  },
  {
      path:"ucoursesinfo",
      element:<UCoursesInfo/>
  },
  {
      path:"ulesson",
      element:<ULesson/>
  },
]
}



])







function App() {
  return (

    <RouterProvider router={routes}/>

  )
}

export default App
