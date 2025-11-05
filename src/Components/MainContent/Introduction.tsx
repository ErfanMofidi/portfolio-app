import frontend from "../../Images/front-end2.webp"
import htmlLogo from '../../Images/html-logo.png'
import cssLogo from '../../Images/css-logo.png'
import jsLogo from '../../Images/js-logo.png'
import reactLogo from '../../Images/icons8-react-native-96.png'
import tailwindcss from '../../Images/icons8-tailwindcss-96.png'

export const Introduction = () => {
  return(
    <div className="introduction">

      <p className="introduction-text">Introduction</p>

      <div className="overview">
        <h1 className="overview-header">
          Overview.
        </h1>
        <p className="overview-text">
          Hello!<br />
          I{`'`}m a front-end web developer specializing in HTML, CSS, JavaScript, React, and TypeScript. I have experience in designing and implementing web pages using modern technologies and best practices, and I’m always striving to deliver projects with the highest quality in the shortest possible time.
          <br />
          If you are looking for someone who is not only proficient in modern technologies but also highly values quality and commitment, I would be glad to help bring your project to life.
        </p>
      </div>

      <div className="appliance-skills-container">

        <div className="appliance-skills">
          <img className="frontend-image" alt="" src={frontend} />
          <p className="frontend-text">Frontend <br /> Developer</p>
        </div>

        <div className="coding-languages">
          <img className="html logo" alt="" src={htmlLogo}  title="HTML"/>
          <img className="css logo" alt="" src={cssLogo} title="CSS"/>
          <img className="tailwind logo" alt="" src={tailwindcss} title="Tailwindcss"/>
          <img className="js logo" alt="" src={jsLogo} title="JavaScript"/>
          <img className="react logo" alt="" src={reactLogo} title="ReactJS"/>
        </div>

      </div>

    </div>
  )
}