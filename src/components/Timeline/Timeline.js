import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '../../assets/icons/WorkIcon';
import EducationIcon from '../../assets/icons/EducationIcon';
import BornIcon from '../../assets/icons/BornIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import './Timeline.scss';

const Timeline = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: '#fce4ec' }}
          date="May 2021 - present"
          iconStyle={{ background: 'white' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Associate Frontend Engineer
          </h4>
          <div className="personio-logo-wrapper">
            <a
              href="https://www.personio.com/about-personio/careers/"
              target="_blank"
              rel="noopener noreferrer"
              className="personio-logo-link"
            >
              <img
                src="pictures/personio.png"
                alt="personio logo"
                className="personio-logo"
              />
            </a>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="Jan 2022"
          iconStyle={{ background: 'white' }}
          icon={<EducationIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            <a
              href="https://images.credential.net/embed/18p6cwit.png"
              target="_blank"
              rel="noopener noreferrer"
              className="code-institute-diploma"
            >
              Diploma
            </a>{' '}
            in Full Stack Software Development (Part Time, Remote)
          </h4>
          <p className="timeline-text">Code Institute</p>
          <p className="timeline-text">Grade: Distinction</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="Oct 2020"
          iconStyle={{ background: 'white' }}
          icon={<EducationIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Front-End Web Development Course, React focus (Part Time, Remote)
          </h4>
          <p className="timeline-text">Wild Code School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="Nov 2018 - Apr 2021"
          iconStyle={{ background: 'white' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Process Development Engineer II
          </h4>
          <p className="timeline-text">APC Ltd, Cherrywood, Dublin 18</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="Jun  - Aug 2016"
          iconStyle={{ background: 'white' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Manufacturing Science & Technology PhD Intern
          </h4>
          <p className="timeline-text">Brystol-Myers Squibb, Co. Dublin</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="2014 -  2018"
          iconStyle={{ background: 'white' }}
          icon={<EducationIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            PhD Chemical Engineering
          </h4>
          <p className="timeline-text">University College Dublin</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="May  - Sep 2013"
          iconStyle={{ background: 'white', color: 'white' }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Process Engineering Co-op Student
          </h4>
          <p className="timeline-text">Roche Ireland Limited, Co. Clare</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'white' }}
          date="2010 -  2014"
          iconStyle={{ background: 'white' }}
          icon={<EducationIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            BE Chemical Engineering (1.1)
          </h4>
          <p className="timeline-text">University College Dublin</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'white' }}
          icon={<HomeIcon />}
          date="2006"
        >
          <p className="timeline-text">Moved to Athenry, Co Galway, Ireland</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'white' }}
          icon={<BornIcon />}
        >
          <p className="timeline-text">Born in Manila, Philippines</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <p className="italic">
        You can read more about my journey to world of tech in this{' '}
        <a
          href="https://irishtechnews.ie/using-lockdown-to-career-change-into-tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          interview
        </a>
        .
      </p>
    </>
  );
};

export default Timeline;
