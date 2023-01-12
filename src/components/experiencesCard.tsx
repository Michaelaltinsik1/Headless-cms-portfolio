import React from 'react';
import { H3, body } from '../styles/typography';

interface EmploymentType {
  contentfulAboutPageContent: {
    role: string;
    company: string;
    to: string;
    from: string;
  };
}
interface EducationType {
  contentfulAboutPageContent: {
    title: string;
    school: string;
    to: string;
    from: string;
  };
}
interface EmploymentType2 {
  role: string;
  company: string;
  to: string;
  from: string;
}
interface EducationType2 {
  title: string;
  school: string;
  to: string;
  from: string;
}

enum Months {
  JANUARY = 'January',
  FEBRUARY = 'February',
  MARCH = 'Match',
  APRIL = 'April',
  MAY = 'May',
  JUNE = 'June',
  JULY = 'July',
  AUGUST = 'August',
  SEPTEMBER = 'September',
  OCTOBER = 'October',
  NOVEMBER = 'November',
  DECEMBER = 'December',
}

interface DateTypes {
  fromMonth: number | null;
  fromYear: number | null;
  toMonth: number | null;
  toYear: number | null;
}
const ExperienceCard = ({
  contentfulAboutPageContent,
}: EmploymentType | EducationType) => {
  console.log('Prop data: ', contentfulAboutPageContent);
  console.log(contentfulAboutPageContent.to);
  console.log(typeof contentfulAboutPageContent.to);
  const dates: DateTypes = {
    fromMonth: null,
    fromYear: null,
    toMonth: null,
    toYear: null,
  };
  /**
   * Splits up the string by - into an array
   */
  const fromDates = contentfulAboutPageContent.from.split('-');
  const toDates = contentfulAboutPageContent.to.split('-');
  /**
   * Checks if the length is larger than 2 => if the date has a month and a year
   */
  if (fromDates.length > 2 && toDates.length > 2) {
    dates.fromYear = Number(fromDates[0]);
    dates.fromMonth = Number(fromDates[1]);
    dates.toYear = Number(toDates[0]);
    dates.toMonth = Number(toDates[1]);
  }
  let fromMonth;
  let toMonth;
  /**
   * Checks if the types are number and gets the corresponding month
   */
  if (typeof dates.fromMonth === 'number' && typeof dates.toMonth == 'number') {
    fromMonth = getMonth(dates.fromMonth);
    toMonth = getMonth(dates.toMonth);
  }
  /***
   * This function is an typescript typeguard. This typeguard is used to
   * check and determined in the return statement if the data sent in is of type
   * Employment or Education
   */
  function isEmployementType(
    contentfulAboutPageContent: EmploymentType2 | EducationType2
  ): contentfulAboutPageContent is EmploymentType2 {
    return (
      (contentfulAboutPageContent as EmploymentType2).company !== undefined
    );
  }
  isEmployementType(contentfulAboutPageContent);
  return (
    <article className="shadow-cardShadow bg-cardBG px-4 py-6 rounded-lg tablet:rounded-2xl bg-blue-500 tablet:max-w-[500px] tablet:px-6 tablet:py-8 min-w-full min-h-full">
      {/* Check if type is Employment of Education to either get role or title from the object */}
      {isEmployementType(contentfulAboutPageContent) ? (
        <h3 className={`${H3}`}>Role: {contentfulAboutPageContent.role}</h3>
      ) : (
        <h3 className={`${H3}`}>Title: {contentfulAboutPageContent.title}</h3>
      )}
      {/* Check if type is Employment of Education to either get Company or school from the object */}
      {isEmployementType(contentfulAboutPageContent) ? (
        <p className={`${body}`}>
          Company: {contentfulAboutPageContent.company}
        </p>
      ) : (
        <p className={`${body}`}>School: {contentfulAboutPageContent.school}</p>
      )}
      {/* Checks that neither of the variables are falsey */}
      {fromMonth && dates.fromYear && toMonth && dates.fromYear && (
        <p className={`${body}`}>
          Period: {fromMonth} {dates.fromYear} - {toMonth} {dates.toYear}
        </p>
      )}
    </article>
  );
};

function getMonth(month: number): Months | null {
  /**
   * returns the coresponding month as a string
   */
  switch (month) {
    case 1: {
      return Months.JANUARY;
    }
    case 2: {
      return Months.FEBRUARY;
    }
    case 3: {
      return Months.MARCH;
    }
    case 4: {
      return Months.APRIL;
    }
    case 5: {
      return Months.MAY;
    }
    case 6: {
      return Months.JUNE;
    }
    case 7: {
      return Months.JULY;
    }
    case 8: {
      return Months.AUGUST;
    }
    case 9: {
      return Months.SEPTEMBER;
    }
    case 10: {
      return Months.OCTOBER;
    }
    case 11: {
      return Months.NOVEMBER;
    }
    case 12: {
      return Months.DECEMBER;
    }
    default:
      return null;
  }
}
export default ExperienceCard;
