import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const websites = [
  {
    id: 1,
    name: "Road Trip Buddy",
    image:
      "https://github.com/DSStad/travel-weather/raw/main/images/appScreenshot.png",
    websiteLink: "https://dsstad.github.io/travel-weather/",
    repoLink: "https://github.com/DSStad/travel-weather",
  },
  {
    id: 2,
    name: "Bluit",
    image: "https://i.imgur.com/uFco5VG.png",
    websiteLink: "https://blueit-79b9e15820d2.herokuapp.com/",
    repoLink: "https://github.com/Paulsig007/Blueit",
  },
  {
    id: 3,
    name: "Chat98",
    image: "https://i.imgur.com/GdCAK7Q.png",
    websiteLink: "https://chat98-a21833346cf4.herokuapp.com/",
    repoLink: "https://github.com/TrueWillB/chat98",
  },
  {
    id: 4,
    name: "Weather In Your City",
    image:
      "https://raw.githubusercontent.com/MsJamesM/Weather-In-Your-City/main/index-screenshot.png",
    websiteLink: "https://msjamesm.github.io/Weather-In-Your-City/",
    repoLink: "https://github.com/MsJamesM/Weather-In-Your-City",
  },
  {
    id: 5,
    name: "Code Quiz",
    image:
      "https://raw.githubusercontent.com/MsJamesM/Code-Quiz/main/application-screenshot.png",
    websiteLink: "https://msjamesm.github.io/Code-Quiz/",
    repoLink: "https://github.com/MsJamesM/Code-Quiz",
  },
  {
    id: 6,
    name: "Social Media API",
    image:
      "https://github.com/MsJamesM/Social-Media-Api/blob/main/Visuals/Screenshot.png?raw=true",
    websiteLink: "https://vimeo.com/848152377",
    repoLink: "https://github.com/MsJamesM/Social-Media-Api",
  },
];

function Projects() {
  return (
    <>
      <div className="projectsList">
        {websites.map((website) => (
          <div key={website.id} className="projectsPreview">
            <a
              href={website.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={website.image} alt={website.name} />
            </a>
            <div className="projectLinks">
              <a
                href={website.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {website.name}
              </a>
              <a
                href={website.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
