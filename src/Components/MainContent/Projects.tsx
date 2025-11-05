import { useState } from "react"
import ecommerceProject from "../../Images/e-commerce.png"


export const Projects = () => {
  const [ecommerceHovered, setEcommerceHovered] = useState<boolean>(false)
  return (
    <div id="projects" className="projects-section">
      <h1 className="overview-header projects-header">
        Projects
        <hr />
      </h1>
      <div className="projects-container">
        <div
          className="project"
          onMouseEnter={() => setEcommerceHovered(true)}
          onMouseLeave={() => setEcommerceHovered(false)}
        >
          <img
            src={ecommerceProject}
            alt="Project Preview"
            className={`project-img ${ecommerceHovered ? "hovered" : ""}`}
            onClick={() =>
              window.open(
                "http://erfanmofidi.github.io/ecommerce-showcase",
                "_blank"
              )
            }
          />

          {ecommerceHovered && (
            <button
              className="view-btn"

            >
              View Project
            </button>
          )}
          <div className="project-description">
            <h1 className="description-header">
              E-Commerce Website
            </h1>
            <p className="description-p">
              A responsive e-commerce website built with React and Tailwind CSS, fetching product data from a free API, featuring product listings, search, and a functional shopping cart.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}