import { useLocation } from "react-router-dom";
import { ContactMe, ContactSectionWrapper, ContactsDetails, SectionTitle } from "./styled";
import { useContext, useEffect } from "react";
import ModalContext from "../../../context/modalContext";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

export const ContactSection = () => {
  const { pathname } = useLocation();
  const [, setShowModal ] = useContext(ModalContext)

  useEffect(() => {
    if(pathname.includes('contacts'))
      setShowModal({ is_opened: true, modal_type: 'contacts', progress: '100%' });
  }, [ pathname ])

  const contacts = [
    {
      id: 0,
      Icon: <BsTelephone />,
      title: 'Phone Number',
      value: '+919058529199'
    }, {
      id: 1,
      Icon: <BsGeoAlt />,
      title: 'Location',
      value: 'Moradabad, India '
    }, {
      id: 2,
      Icon: <BsEnvelope />,
      title: 'E-mail',
      value: 'amanchauhancl1@gmail.com'
    },
  ]

  return (
    <ContactSectionWrapper id='contacts' className={`${pathname !== '/contacts' && 'not-active'}`}>
      <SectionTitle>
        <h2>Contact Me</h2>
        <h3>******</h3>
      </SectionTitle>
      <ContactsDetails>
        {
          contacts.map(({ Icon, id, title, value }) => (
            <li key={id}>
              { Icon }
              <div>
                <strong>{ title }</strong>
                <p>{ value }</p>
              </div>
            </li>
          ))
        }
      </ContactsDetails>
      <ContactMe to='mailto:rodrigsmor.pf@gmail.com'>
       Connect
      </ContactMe>
    </ContactSectionWrapper>
  );
}