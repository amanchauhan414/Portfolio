import { useLocation } from "react-router-dom";
import { AboutMeIllustration, AboutMeSectionContainer } from "./styled";
import { SeeMoreButton } from "../../Buttons/SeeMoreButton";
import Illustration from '../../../assets/images/images/aboutme-home.png'
import { SectionContentTemplate } from "../../common/SectionContentTemplate";
import { AboutMeSectionContent } from "../../modals/AboutMeSectionContent";

export const AboutMeSection = () => {
  const { pathname } = useLocation();

  const infoList = [
    {
      id: 0,
      value: 'Professional Profile'
    }, {
      id: 1,
      value: 'Abilities & knowledge'
    }, {
      id: 2,
      value: 'Professional Experience'
    }, {
      id: 3,
      value: ''
    },
  ]

  return (
    <AboutMeSectionContainer id="about-me" className={`${pathname !== '/about-me' && 'not-active'}`}>
      <AboutMeIllustration src={Illustration} alt='illustration of a person wearing an virtual reality glasses.' />
      <div className='section-main_summary'>
        <hgroup>
          <h1>About Me</h1>
        </hgroup>
        <ul>
          {
            infoList.map(({ id, value }) => <li key={id}>{ value }</li>)
          }
        </ul>
      </div>
      <article className="professional_summary">
        <p>
        A Front End software developer looking to maximize his potential through innovation and creativity..
        </p>
      </article>
      <SeeMoreButton type_modal='about-me' />
      <SectionContentTemplate sectionName='about-me'>
        <AboutMeSectionContent />
      </SectionContentTemplate>
    </AboutMeSectionContainer>
  );
}