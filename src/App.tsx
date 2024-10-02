import './App.css';
import {ReactComponent as Lion} from './lion.svg';
import {ReactComponent as Snake} from './snake.svg';
import styled from 'styled-components';
import Ant from './ant';
import Chicken from './chicken';
import Snail from './snail';
import Spider from './spider';

const sampleSection = {
  title: "4 legs",
  cards: [
    {
      image: {
        path: "https:/asdasd",
      },
      altText: "image alt text",
      isCorrect: false,
    },
    {
      image: {
        path: "",
      },
      altText: "image alt text",
      isCorrect: true,
    },
  ]
};

const data = [
  {
    title: "4 legs",
    cards: [
      {
        image: {
          path: "https:/asdasd",
        },
        altText: "image alt text",
        isCorrect: false,
      },
      {
        image: {
          path: "",
        },
        altText: "image alt text",
        isCorrect: true,
      },
    ]
  },
  {
    title: "2 legs",
    cards: [
      {
        image: {
          path: "https:/asdasd",
        },
        altText: "image alt text",
        isCorrect: false,
      },
      {
        image: {
          path: "",
        },
        altText: "image alt text",
        isCorrect: true,
      },
    ]
  },
  {
    title: "6 legs",
    cards: [
      {
        image: {
          path: "https:/asdasd",
        },
        altText: "image alt text",
        isCorrect: false,
      },
      {
        image: {
          path: "",
        },
        altText: "image alt text",
        isCorrect: true,
      },
    ]
  }
];

const Container = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
`;

const Column = styled.div`
  align-items: center;
  background: #F3F8FB;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 14px;
`;

const Card = styled.div`
  cursor: pointer;
  height: 230px;
  margin-bottom: 30px;
  width: 350px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 33px;
  margin-bottom: 30px;
  text-align: center;
`;

const renderSVG = (name: string) => {
  switch (name) {
    case 'Lion':
      return <Lion />;
    case 'Snake':
      return <Snake />;
    case 'Ant':
      return <Ant />;
    case 'Chicken':
      return <Chicken />;
    case 'Snail':
      return <Snail />;
    case 'Spider':
      return <Spider />;
    default:
      return null;
  }
};


const App = () => {

  return (
    <Container>
      {data.map((column, columnIndex) => (
        <Column key={columnIndex}>
          <Title>{column.title}</Title>
          {column.cards.map((card, cardIndex) => (
            <Card key={cardIndex}>
              {renderSVG(card)}
            </Card>
          ))}
        </Column>
      ))}
    </Container>
  );
};

export default App;
