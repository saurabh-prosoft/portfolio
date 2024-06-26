import { useEffect, useRef, useState } from "react";

import Icon from "../common/Icon/icon";
import styles from "./experience.module.css";
import FeedButton from "../common/FeedButton/feed-button";

const Experience = () => {
  const maxHeights = useRef([]);
  const refs = useRef([]);
  const cRefs = useRef([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    refs.current.forEach((el, idx) => {
      maxHeights.current[idx] = el.getBoundingClientRect().height;
      cRefs.current[idx]?.style.setProperty(
        "--max-height",
        `${maxHeights.current[idx]}px`
      );
    });

    return () => {};
  }, []);

  return (
    <div className={styles.Experience}>
      <div className={styles.Container}>
        <div
          onClick={() => setExpand(true)}
          ref={(el) => el && (cRefs.current[0] = el)}
          className={[styles.Set, expand ? styles.Expand : ""].join(" ")}
        >
          <div
            ref={(el) => el && (refs.current[0] = el)}
            className={styles.Content}
          >
            <h2>Modernization</h2>
            <span>
              Led the migration of a legacy <Icon name="angular" /> Angular
              codebase to <Icon name="vue" /> Vue + Vuex.
            </span>
            <span>
              Upgraded build tooling to Vite, resulting in <Icon name="speed" />{" "}
              faster build times.
            </span>
          </div>
        </div>
        <div
          onClick={() => setExpand(true)}
          ref={(el) => el && (cRefs.current[2] = el)}
          className={[styles.Set, expand ? styles.Expand : ""].join(" ")}
        >
          <div
            ref={(el) => el && (refs.current[2] = el)}
            className={styles.Content}
          >
            <h2>Automation</h2>
            <span>
              Created a functional test suite using <Icon name="testcafe" />{" "}
              TestCafe, significantly reducing manual regression testing effort.
            </span>
            <span>
              Developed automation tools to assist database migration using{" "}
              <Icon name="react" /> React and <Icon name="java" /> Java.
            </span>
          </div>
        </div>
        <div
          onClick={() => setExpand(true)}
          ref={(el) => el && (cRefs.current[4] = el)}
          className={[styles.Set, expand ? styles.Expand : ""].join(" ")}
        >
          <div
            ref={(el) => el && (refs.current[4] = el)}
            className={styles.Content}
          >
            <h2>UI/UX Development</h2>
            <span>
              Created both simple and complex screen mockups and static designs
              maintaining continuous feedback using <Icon name="figma" /> Figma.
            </span>
          </div>
        </div>
        <div
          onClick={() => setExpand(true)}
          ref={(el) => el && (cRefs.current[1] = el)}
          className={[styles.Set, expand ? styles.Expand : ""].join(" ")}
        >
          <div
            ref={(el) => el && (refs.current[1] = el)}
            className={styles.Content}
          >
            <h2>Developer Experience</h2>
            <span>
              Built a common IaC library of generic <Icon name="bicep" /> Bicep
              modules to help others in their cloud migration.
            </span>
            <span>
              Implemented an <Icon name="monitor" /> application monitoring
              process with automated alerts, incidents and a metrics dashboard.
            </span>
          </div>
        </div>
        <div
          onClick={() => setExpand(true)}
          ref={(el) => el && (cRefs.current[3] = el)}
          className={[styles.Set, expand ? styles.Expand : ""].join(" ")}
        >
          <div
            ref={(el) => el && (refs.current[3] = el)}
            className={styles.Content}
          >
            <h2>Cloud Migration</h2>
            <span>
              Migrated two applications to <Icon name="azure" /> Azure.
            </span>
            <span>
              Developed an ETL Data Pipeline using Serverless{" "}
              <Icon name="function" /> Function Apps.
            </span>
          </div>
        </div>

        <FeedButton onClick={() => setExpand(!expand)} icon="info" size={0.8}>
          {!expand ? "Know More" : "Hide"}
        </FeedButton>
      </div>
    </div>
  );
};

export default Experience;
