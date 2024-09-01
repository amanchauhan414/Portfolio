import { useLocation } from "react-router-dom";
import { HomeSectionContent } from "../../modals/HomeSectionContent";
import { SeeMoreButton } from "../../Buttons/SeeMoreButton";
import { SectionContentTemplate } from "../../common/SectionContentTemplate";
import { GreetingsText, HomeSectionContainer, SectionTitle, Subtitle } from "./styled";

export const HomeSection = () => {
  const { pathname } = useLocation();

  return (
    <HomeSectionContainer id='home' className={`${pathname !== '/' && 'not-active'}`}>
      <GreetingsText>
        <p>Welcome To My  <strong> portfolio </strong>!</p>
      </GreetingsText>
      <SectionTitle>
        <h1>Aman Chauhan</h1>
        <Subtitle> Front End Developer </Subtitle>
      </SectionTitle>
      <SeeMoreButton type_modal='home' />
      <SectionContentTemplate sectionName='home'>
        <HomeSectionContent />
      </SectionContentTemplate>
    </HomeSectionContainer>
  );
}