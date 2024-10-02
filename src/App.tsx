import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const sampleSection = {
  cards: [
    {
      'answers': [
        {
          'isCorrect': true,
          'image': {
            'path': '/lion.svg',
            'mime': 'image/png',
            'copyright': {
              'license': 'U'
            }
          },
          'altText': 'Lion'
        },
        {
          'isCorrect': false,
          'image': {
            'path': '/snake.svg',
            'mime': 'image/png',
            'copyright': {
              'license': 'U'
            }
          },
          'altText': 'Snake'
        }
      ],
      'title': '4 legs'
    },
    {
      'answers': [
        {
          'isCorrect': false,
          'image': {
            'path': '/ant.svg',
            'mime': 'image/png',
            'copyright': {
              'license': 'U'
            }
          },
          'altText': 'Ant'
        },
        {
          'isCorrect': true,
          'image': {
            'path': '/chicken.svg',
            'mime': 'image/png',
            'copyright': {
              'license': 'U'
            }
          },
          'altText': 'Chicken'
        }
      ],
      'title': '2 legs'
    },
    {
      'answers': [
        {
          'isCorrect': true,
          'image': {
            'path': '/snail.svg',
            'mime': 'image/png',
            'copyright': {
              'license': 'U'
            }
          },
          'altText': 'Snail'
        },
        {
          'isCorrect': false,
          'image': {
            'path': '/spider.svg',
            'mime': 'image/png',
            'copyright': {
              'license': 'U'
            }
          },
          'altText': 'Spider'
        }
      ],
      'title': 'No legs'
    }
  ]
};

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

const Card = styled.button<{ isSelected: boolean }>`
  align-items: center;
  border-radius: 28px;
  border: 4px solid ${({ isSelected }) => (isSelected ? '#1a8cff' : '#919191')};
  box-shadow: 0 4px 0 0 #575757;
  cursor: pointer;
  display: flex;
  position: relative;
  height: 230px;
  justify-content: center;
  margin-bottom: 30px;
  overflow: hidden;
  padding: 0;
  width: 350px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: red;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 33px;
  margin-bottom: 30px;
  text-align: center;
`;

const App = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardClick = (columnIndex: number, cardIndex: number) => {
    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = [...prevSelectedCards];
      newSelectedCards[columnIndex] = cardIndex;
      return newSelectedCards;
    });
  };

  const handleCheckClick = () => {
    const isCorrect = sampleSection.cards.every((column, columnIndex) => {
      const selectedCardIndex = selectedCards[columnIndex];
      if (selectedCardIndex === undefined) return false;
      return column.answers[selectedCardIndex].isCorrect;
    });

    if (isCorrect) {
      console.log('Успешно');
    } else {
      console.log('Попробуй еще');
    }
  };

  return (
    <>
      <Container>
        {sampleSection.cards.map((column, columnIndex) => (
          <Column key={columnIndex}>
            <Title>{column.title}</Title>
            {column.answers.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                isSelected={selectedCards[columnIndex] === cardIndex}
                onClick={() => handleCardClick(columnIndex, cardIndex)}
              >
                <img
                  src={process.env.PUBLIC_URL + card.image.path}
                  alt={card.altText}
                />
              </Card>
            ))}
          </Column>
        ))}
      </Container>
      <button onClick={handleCheckClick}>Check</button>
    </>
  );
};

export default App;
