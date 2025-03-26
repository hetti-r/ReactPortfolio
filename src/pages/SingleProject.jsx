import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  // Scroll to the projects section on page load
  useEffect(() => {
    // Check if running on HTTPS
    const isHttps = window.location.protocol === 'https:';

    if (isHttps) {
      document.cookie = "figma.did=value; SameSite=None; Secure";
      console.log('Cookie set successfully over HTTPS');
    } else {
      console.warn('Cookie not set: HTTPS required for SameSite=None cookies');
      // Optional: Redirect to HTTPS
      // window.location.href = window.location.href.replace('http:', 'https:');
    }

    // Disable default scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Ensure DOM is fully loaded before scrolling
    const scrollToProjects = () => {
      const element = document.getElementById('projects');
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      } else {
        requestAnimationFrame(scrollToProjects);
      }
    };
    requestAnimationFrame(scrollToProjects);

    // Cleanup scroll restoration
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const longDescriptionLines = project.longDescription.split('\n'); // split the long description into an array of lines divided by newlines

  return (
    <main>
      <section id="projects">
        <div className="boxcontainer">
          <div className='single-project'>

            <img className='project-title-img' src={`/src/assets/projectPics/${project.imageSrc}`} alt={project.imageAlt} />

            <h2>{project.title}</h2>

            {longDescriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            {project.extraImages && (
              <>
                {project.extraImages.map((image, index) => (
                  <div key={index} className="extra-image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="extra-project-image"
                    />
                  </div>
                ))}
              </>
            )}

            {project.figma && (
              <div className="figma-embed-wrapper">
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="100%"
                  height="720"
                  src={project.figma}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  onError={(e) => {
                    console.error("Figma iframe loading error:", e);
                  }}
                />
              </div>
            )}
            {project.video && (
              <div className="video-embed-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.video}
                  title="video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {project.pdf && (
              <div className="pdf-embed-wrapper">
                <iframe
                  src={`/src/assets/pdfs/${project.pdf}#view=FitH`}
                  width="100%"
                  height="800px"
                  style={{
                    border: 'none',
                    display: 'block'
                  }}
                  title="PDF document"
                >
                  <p>Your browser does not support iframes. <a href={`/src/assets/pdfs/${project.pdf}`}>Download PDF</a></p>
                </iframe>
              </div>
            )}
            <div>
              <button className="backButton" onClick={() => window.history.back()}>GO BACK</button>
              {project.link && (
                <a className="moreButton" href={project.link} target="_blank" rel="noopener noreferrer">VIEW PROJECT</a> /* open in a new tab + security attributes */
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProject;