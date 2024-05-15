import Accordion from 'react-bootstrap/Accordion';

function AccordionAbout() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Start of the Journey</Accordion.Header>
        <Accordion.Body>
          "I started my journey in 2021, during high school, when I started
          studying programming."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Growth and Evolution</Accordion.Header>
        <Accordion.Body>
          "Since then, I have continued to grow and evolve, taking on new challenges and learning the latest technologies along the way."
          "I am trying to learn and evolve everyday by taking up new challenges and learning new things on a day to day basis."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Experience with Technologies</Accordion.Header>
        <Accordion.Body>
          "With experience in React.js, Next.js, Flutter, React Native and Kotlin..."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Foco em Transformação Digital</Accordion.Header>
        <Accordion.Body>
          "I'm focused on transforming ideas into incredible digital products."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Prioridade na Experiência do Usuário</Accordion.Header>
        <Accordion.Body>
          "User experience is my priority..."
          "I love learning about user psychology and make a valuable user experience for all type of users."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Compromisso com a Criação de Aplicações</Accordion.Header>
        <Accordion.Body>
          "...I am committed to creating web and mobile applications that are user-centric, visually appealing, and highly functional."
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionAbout;
