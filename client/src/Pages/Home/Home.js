import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div id={styles.bg1Container}>
        <div>
          <h1>We Build Lifestyle</h1>
          <p>
            Rampravesh Thekedaar is a leading construction company that
            specializes in building houses and do repairing work.
          </p>
        </div>
      </div>

      <div id={styles.aboutContainer}>
        <div>
          <h1>
            About
            <span>us</span>
          </h1>
          <p>
            Ram Pravesh Thekedaar is a construction company based in India. Our
            company is committed in building houses for people in need with the
            help of our experienced and dedicated team and providing the best
            quality construction services with the best customer service.
          </p>
        </div>
      </div>
      <div id={styles.testimonialContainer}>
        <div>
          <h3>
            What Our
            <span>Clients</span>
          </h3>
          <p>Say About Us?</p>
        </div>
        <div id={styles.testimonials}>
          <fieldset>
            <legend>Dr. Das, (Delhi)</legend>
            <p>
              "I contacted them for the renovation work of my house. I am
              completely satisfied with their work."
            </p>
          </fieldset>
          <fieldset>
            <legend>Rajeev, (Delhi)</legend>
            <p>
              "I don't know what else to say. Thanks guys, keep up the good
              work! You're the best compant I have ever met for my House
              construction. I would like to personally thank you for your
              outstanding work."
            </p>
          </fieldset>
          <fieldset>
            <legend>Dinesh Kataria, (Delhi)</legend>
            <p>
              "Rampravesh Thekedaar has got everything I need like a good
              guidance, what materials should we use and ability to turn the
              imagination into reality. I will refer you to everyone I know."
            </p>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Home;
