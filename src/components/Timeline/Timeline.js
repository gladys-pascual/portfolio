import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../../assets/icons/WorkIcon";
import EducationIcon from "../../assets/icons/EducationIcon";
import BornIcon from "../../assets/icons/BornIcon";
import HomeIcon from "../../assets/icons/HomeIcon";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="Oct 2020 - present"
        iconStyle={{ background: "white" }}
        icon={<EducationIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Diploma in Full Stack Software Development (Part Time, Remote)
        </h4>
        <p>Code Institute</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="Apr - Oct 2020"
        iconStyle={{ background: "white" }}
        icon={<EducationIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Front-End Web Development Course (Part Time, Remote)
        </h4>
        <p>Wild Code School</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="Mar - Apr 2020"
        iconStyle={{ background: "white" }}
        icon={<EducationIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          HTML, CSS, and Javascript for Web Developers - 5 Week Course
        </h4>
        <p>Johns Hopkins University delivered through Coursera</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="Nov 2018 - present"
        iconStyle={{ background: "white" }}
        icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Process Development Engineer II
        </h4>
        <p>APC Ltd, Cherrywood, Dublin 18</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="Jun  - Aug 2016"
        iconStyle={{ background: "white" }}
        icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Manufacturing Science & Technology PhD Intern
        </h4>
        <p>Brystol-Myers Squibb, Co. Dublin</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="2014 -  2018"
        iconStyle={{ background: "white" }}
        icon={<EducationIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          PhD Chemical Engineering
        </h4>
        <p>University College Dublin</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="May  - Sep 2013"
        iconStyle={{ background: "white", color: "white" }}
        icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Process Engineering Co-op Student
        </h4>
        <p>Roche Ireland Limited, Co. Clare</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "white" }}
        date="2010 -  2014"
        iconStyle={{ background: "white" }}
        icon={<EducationIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          BE Chemical Engineering (1.1)
        </h4>
        <p>University College Dublin</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "white" }}
        icon={<HomeIcon />}
        date="2006"
      >
        <p>Moved to Athenry, Co Galway, Ireland</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "white" }}
        icon={<BornIcon />}
      >
        <p>Born in Manila, Philippines</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
