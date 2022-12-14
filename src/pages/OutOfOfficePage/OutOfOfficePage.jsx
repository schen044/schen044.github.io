import SimpleImageSlider from "react-simple-image-slider";
export default function OutOfOfficePage() {
  let githubImage = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>;
    const images = [
      { url: "https://github.com/schen044/Out-Of-Office/raw/main/public/images/webpage-screenshot/home-page.png" },
      { url: "https://github.com/schen044/Out-Of-Office/raw/main/public/images/webpage-screenshot/sign-up-page.png" },
      { url: "https://github.com/schen044/Out-Of-Office/raw/main/public/images/webpage-screenshot/view-all-trip-page.png" },
      { url: "https://github.com/schen044/Out-Of-Office/raw/main/public/images/webpage-screenshot/trip-detail-page.png" },
    ];
    return (
        <div>
          <h1>Out of Office</h1>
          <div className="project-info">
            <a href="https://github.com/schen044/Out-Of-Office" target="_blank"><button className="github-button">{githubImage} &nbsp; Github Repo Link</button></a>
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
            <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" /> 
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" /> 
          </div>
          <div className="project-body">
            <div>         
              <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            /></div>
            <div className="text">This project was a joint effort between me and two other cohort members. Our team wanted to help users plan upcoming trips, so we created Out of Office. Out of Office can log future trips along with create detailed itineraries and activities so there are no gaps and the user can stay on schedule.</div>
          </div>
      </div>
    )
}
