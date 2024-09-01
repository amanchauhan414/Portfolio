import { IconContext } from 'react-icons'
import WhoIAmIllustration from '../../../assets/images/images/whoiam-home.png'
import { HomeSectionContentContainer, InterestingsSection, PresentationSection, WhoIAmSection } from "./styled"
import { CgCodeSlash } from 'react-icons/cg'
import { RiBook3Line, RiPaletteLine } from 'react-icons/ri'
import { TbBooks } from 'react-icons/tb'
import { MdOutlineDesignServices, MdOutlineDraw, MdOutlineCreate, MdOutlineMovie } from 'react-icons/md'
import { useTheme } from 'styled-components'

export const HomeSectionContent = () => {
  const theme = useTheme();

  const interestings = [
    {
      Icon: <CgCodeSlash />,
      title: 'Technology',
      description: "I'm excited about learning new technologies and using them to build helpful and creative solutions.."
    }, {
      Icon: <MdOutlineDesignServices />,
      title: 'Design',
      description: 'I love creating simple, user-friendly designs using Figma. '
    }, {
      Icon: <RiBook3Line />,
      title: 'UI/UX Design',
      description: 'I enjoy creating smooth, user-centered interfaces for better experiences..'
    }, {
      Icon: <RiPaletteLine />,
      title: 'Art',
      description: "I appreciate art's power to inspire and enhance creativity"
    }, {
      Icon: <MdOutlineDraw />,
      title: 'Hiking',
      description: 'I love hiking for the adventure and connection with nature.'
    }, {
      Icon: <MdOutlineMovie />,
      title: 'Reading',
      description: 'I find joy in reading sci-fi Books and manga to get immersed in different worlds, times, lives... '
    },
     
  ]

  return (
    <HomeSectionContentContainer>
      <PresentationSection>
        <h3>A little more about me </h3>
        <p>A bit about me: my personal profile, hobbies, personality, skills, knowledge, interests, goals, work, and what you can expect from me.</p>
        <span></span>
      </PresentationSection>
      <WhoIAmSection>
        <figure>
          <img src={WhoIAmIllustration} alt='illustration of a boy reading a book sitting in the shade of a tree' />
        </figure>
        <div>
          <h3>Who am I?</h3>
          <h4>I am a frontend software developer</h4>
          <p>I am a frontend software developer passionate about leveraging new technologies to create accessible software for everyone. I thrive on building intuitive user interfaces and am particularly enthusiastic about animations, bringing dynamic and engaging experiences to life..</p>
        </div>
      </WhoIAmSection>
      <InterestingsSection>
        <h3>Interests</h3>
        <ul>
          {
            interestings.map(({ Icon, description, title }, index) => (
              <li key={index}>
                <IconContext.Provider value={{ size: '26px', color: theme.colors.typography.main }}>
                  { Icon }
                </IconContext.Provider>
                <div>
                  <strong>{ title }</strong>
                  <p>{ description }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </InterestingsSection>
    </HomeSectionContentContainer>
  )
}