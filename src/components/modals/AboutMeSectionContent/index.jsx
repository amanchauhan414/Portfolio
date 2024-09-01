import { AboutMeSectionContainer, ArticleContentWrapper, ContentSectionWrappers, KnowledgesCard } from "./styled"
import AboutMeImage from '../../../../public/amanprofile.jpg'
import { Button } from '../../Buttons/Button';
import { knowledges } from "../../../Mock/knowledges";

export const AboutMeSectionContent = () => {
  return (
    <AboutMeSectionContainer>
      <ContentSectionWrappers>
        <header>
          <h3>About Me</h3>
        </header>
        <article>
          <figure>
            <img src={AboutMeImage} alt='A Profile Image' />
          </figure>
          <ArticleContentWrapper>
            <h4>Professional Profile</h4>
            <div>
              <p>
             I am a front end software developer . Being passionate about technology and innovation, I am constantly searching for my skills that allow me to quickly adapt to new challenges and expand my knowledge about the world of programming..
              </p>
              <p>
              My experience covers a wide range of technologies, such as JavaScript, TypeScript, C++, Python , React.js, Next.js, Node.js, TailwindCSS , Ant Design and many others. The obtained experiences range from the development of responsive and attractive web applications to the creation of REST APIs, including some experiences with the design of user interfaces using Figma.
              </p>
              <p>
              I'm dedicated to innovation and making a difference. I use my creativity and drive to ensure project success, always aiming for growth and delivering top-quality results.
              </p>
            </div>
            <Button type="link" props={{
              href: 'https://docs.google.com/document/d/1gHDYk6O-Y9DcGPp9p7E2ljeNSPgzabAt6TGvqRb0m8g/edit?usp=sharing'
            }}>
              Download CV
            </Button>
            <aside>
              <p>About Me</p>
              <span></span>
            </aside>
          </ArticleContentWrapper>
        </article>
      </ContentSectionWrappers>
      <ContentSectionWrappers>
        <header>
          <h3>Knowledge</h3>
        </header>
        <ul>
          {
            knowledges.map(({ level, name, image }, index) => (
              <KnowledgesCard key={index} aria-labelledby={`knowledge_Title-${index}`}>
                <figure>
                  <img src={image} alt={`${name} logo`} />
                </figure>
                <div>
                  <p id={`knowledge_Title-${index}`} className="knowledge_Title"> { name } </p>
                  <p className="knowledge_Level">{ level }</p>
                </div>
              </KnowledgesCard>
            ))
          }
        </ul>
      </ContentSectionWrappers>
    </AboutMeSectionContainer>
  )
}