import { Fragment } from "react";
import { revealProps } from "../../../domHooks";
import { teachingGroups, type TeachingGroup } from "../../../data/homeContent";
import { InlineLink } from "../../common/InlineLink";
import { SectionHeading } from "../../common/SectionHeading";
import { HomeSection, HomeSectionLead } from "./HomeSection";
import styles from "./TeachingSection.module.css";

export function TeachingSection() {
  return (
    <HomeSection id="teaching">
      <SectionHeading title="Teaching" />
      <HomeSectionLead>
        Teaching assistant for lectures, seminars, and practical courses;
        preparing exercises, leading sessions, supervising students, and
        supporting course organization.
      </HomeSectionLead>
      <div className={styles.grid}>
        {teachingGroups.map((group) => (
          <article key={group.title} {...revealProps}>
            <h3>{group.title}</h3>
            <TeachingCourseList courses={group.courses} />
          </article>
        ))}
      </div>
    </HomeSection>
  );
}

function TeachingCourseList({
  courses,
}: {
  courses: TeachingGroup["courses"];
}) {
  return (
    <ul className={styles.courseList}>
      {courses.map((course) => (
        <li key={course.label}>
          <InlineLink href={course.href}>{course.label}</InlineLink>
          <span className={styles.terms}>
            {course.terms.map((term, termIndex) => (
              <Fragment key={`${course.label}-${term.label}`}>
                {termIndex > 0 ? ", " : null}
                <InlineLink href={term.href}>{term.label}</InlineLink>
              </Fragment>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
