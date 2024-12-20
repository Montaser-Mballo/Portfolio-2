import "../project_page.css";
import { useEffect } from "react";
import Navbar_V2 from "../../components/navbarV2/Navbar_V2";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/Habeebi Academy logo.jpg";
import Wordpress from "../../assets/wordpress-icon.png";
import Html from "../../assets/html icon.png";
import Css from "../../assets/css icon.png";
import Slack from "../../assets/slack-icon.png";
import GoogleAnalytics from "../../assets/google analytics logo.png";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
// import MediaIcon from "../../assets/media-icon.png";
import Ahrefs from "../../assets/ahrefs-icon.jpg";


const Project_Page_1 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project__page">

      <Navbar_V2 />



      <div className="project-header">
        <h1>SEO</h1>
        <p className="project-subtitle">Search Engine Optimization</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <img src={ProjectImg} alt="Habeebi Academy logo" />
        </div>

        <div className="project_overview">

          <h2>Client Description</h2>

          <p>
            Habeebi Academy is an online education platform.
          </p>

          <h2>Project Description</h2>

          <p>
            This project involved the SEO optimization of Habeebi Academy, an
            online education platform aimed at enhancing its visibility and
            driving organic traffic. The primary focus was on optimizing course
            pages and implementing a strategic backlinking approach to improve
            the site&apos;s overall search engine ranking.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            SEO, backlinking strategy, keyword research, on-page optimization.
          </p>

          <h2>Tools Used</h2>

          <div className="tools_icons">
            <div className="icon_item">
              <img src={Wordpress} alt="WordPress Icon" />
              <p>WordPress</p>
            </div>

            <div className="icon_item">
              <img src={Html} alt="HTML Icon" />
              <p>HTML</p>
            </div>

            <div className="icon_item">
              <img src={Css} alt="CSS Icon" />
              <p>CSS</p>
            </div>

            <div className="icon_item">
              <img src={Ahrefs} alt="Ahrefs Icon" />
              <p>Ahrefs</p>
            </div>

            <div className="icon_item">
              <img src={Slack} alt="Slack Icon" />
              <p>Slack</p>
            </div>

            <div className="icon_item">
              <img src={GoogleAnalytics} alt="Google Analytics Icon" />
              <p>Google Analytics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project_body">
        <div className="project_card">
          <img src={PersonIcon} alt="Person Icon" />

          <h2>Role</h2>

          <p><strong>In my role, I was responsible for:</strong></p>

          <article>
            <ul>
              <li>
                Adding high-quality, SEO-optimized content to various course
                pages, ensuring that each page was aligned with best practices
                in keyword usage and content relevance.
              </li>

              <li>
                Developing and executing a comprehensive backlinking strategy to
                enhance the website&apos;s authority and reach by securing
                high-quality backlinks from reputable sources.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={AnalyticsIcon} alt="Analytics Icon" />

          <h2>Outcome</h2>

          <p><strong>The project resulted in:</strong></p>

          <article>
            <ul>
              <li>
                Reduced the website&apos;s bounce rate by 15%, indicating that users found the content more engaging and relevant after optimization efforts.
              </li>

              <li>
                Increased average session duration by 20%, reflecting enhanced user engagement with course materials and content.
              </li>

              <li>
                Identified and optimized underperforming content, resulting in a 25% increase in views for previously low-traffic course pages.
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="btn_container">
        <a
          href="//habeebiacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          Visit Client&apos;s Webpage
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_1;
