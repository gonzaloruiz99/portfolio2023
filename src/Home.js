import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"



const Reactprojects = [

  {
    id: "Reactproject_RPS",
    name:"Rock, Paper, Scissors",
    img:require("./home_images/rockpaper_img.png"),
    link: "Rockpaper",
  },
  {
    id: "Reactproject_TTT",
    name:"TicTacToe",
    img:require("./home_images/tictactoe_img.png"),
    link: "Tictactoe",
  },
  {
    id: "Reactproject_TDA",
    name:"ToDo App",
    img:require("./home_images/todo_img.png"),
    link: "Todoapp",
  },
  {
    id: "Reactproject_BM",
    name:"Bookmark",
    img:require("./home_images/bookmark_img.png"),
    link: "Bookmark",
  },
  {
    id: "Reactproject_CsApi",
    name:"Countries API",
    img:require("./home_images/countries_img.png"),
    link: "Countries",
  },
  {
    id: "Reactproject_MuAp",
    name:"Menu App",
    img:require("./home_images/menu_img.png"),
    link: "Menu",
  },
  {
    id: "Reactproject_SnLs",
    name:"Shorten Links",
    img:require("./home_images/shorter_img.png"),
    link: "Shorten",
  },
  
]
const JSprojects = [
   {
    id: "JSproject_3dPortfolio",
    name:"3D Portfolio",
    img:require("./JS_images/3dPortfolio_img.png"),
    link: "./JS_projects/3dPortfolio/index.html",
  },
   {
    id: "JSproject_countDown",
    name:"Countdown",
    img:require("./JS_images/countDown_img.png"),
    link: "",
  },
   {
    id: "JSproject_eCommerce",
    name:"E-commerce",
    img:require("./JS_images/eCommerce_img.png"),
    link: "",
  },
   {
    id: "JSproject_fixedBackground",
    name:"Fixed background",
    img:require("./JS_images/fixedBackground_img.png"),
    link: "",
  },
   {
    id: "JSproject_pricingTables",
    name:"Pricing tables",
    img:require("./JS_images/pricingTables_img.png"),
    link: "",
  },
   {
    id: "JSproject_roomHomepage",
    name:"Room homepage",
    img:require("./JS_images/roomHomepage_img.png"),
    link: "",
  },
]

const socials = [
   {
    id: "behance_icon",
    name:"Behance",
    img:require("./home_images/behance_icon.png"),
    link: "#",
  },
   {
    id: "Linkedin_icon",
    name:"LinkedIn",
    img:require("./home_images/linkedin_icon.png"),
    link: "#",
  },
   {
    id: "webpage_icon",
    name:"Webpage",
    img:require("./home_images/website_icon.png"),
    link: "#",
  },
]

const Home = () => {
  return (
    <>
      <nav>
        <h2 className="logo">Ruiz Gonzalo</h2>
        <li className="links">
          <ul className="link"><a href="#">UX portfolio</a></ul>
          <ul className="link"><a href="#">LinkedIn</a></ul>          
        </li>
      </nav>

      
      <div className="home-container">
        <h1 className="home-title">REACT PROJECTS</h1>
        <ul className='projects-box'>
          {Reactprojects.map((project)=>{
            return <li key={project.id} className="home-project">
                <Link to={project.link} className='home-project_link'>
                  <img className="home-project_img" src={project.img} alt={project.name} />
                  <p className="home-project_name">{project.name}</p>
                </Link>
            </li>
          })}
        </ul>
      </div>


      <div className="home-container">
        <h1 className="home-title">JS PROJECTS</h1>
        <ul className='projects-box'>
          {JSprojects.map((project)=>{
            return <li key={project.id} className="home-project">
                <div className='home-project_link'>
                  <a href="https://gonzaloruiz99.github.io/JS-projects/PricingTables/" target='blank'>
                    <img className="home-project_img" src={project.img} alt={project.name} />
                    <p className="home-project_name">{project.name}</p>
                  </a>
                </div>
            </li>
          })}
        </ul>
      </div>
      

      <footer>
        <div className="location_info">
          <h2>Location</h2>
          <p>Argentina, Córdoba</p>
        </div>
        <div className="contact_info">
          <h2>Contact</h2>
          <p>gonzaruiz9191@gmail.com</p>
        </div>
        <ul className="socials">
          {socials.map((social) => {
            return <li key={social.id}><a href={social.link}><img className='socialIcon' src={social.img} alt={social.link} /></a></li>
          })}
        </ul>
      </footer>
    </>
  )
}

export default Home