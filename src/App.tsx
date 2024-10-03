import './App.css';
import styled from 'styled-components';
import {useState} from 'react';
import Correct from './Correct';
import Incorrect from './Incorrect';

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
  display: flex;
  gap: 50px;
  padding: 20px;
`;

const Column = styled.div<{ isCorrect: boolean | null }>`
  align-items: center;
  background: ${({isCorrect}) => (isCorrect === null ? '#F3F8FB' : isCorrect ? '#0086381A' : '#D300181A')};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 24px 32px 14px;
`;

const Card = styled.button<{ isSelected: boolean; isChecked: boolean | null }>`
  align-items: center;
  border-radius: 28px;
  border: 4px solid ${({isSelected, isChecked}) => {
    if (isChecked === null) {
      return isSelected ? '#1a8cff' : '#919191';
    } else if (isSelected) {
      return isChecked ? '#008638' : '#d30018';
    } else {
      return '#919191';
    }
  }};
  box-shadow: ${({isSelected, isChecked}) => {
    if (isChecked === null) {
      return isSelected ? '0 4px 0 0 #0d4680' : '0 4px 0 0 #575757';
    } else if (isSelected) {
      return isChecked ? '0 4px 0 0 #005022' : '0 4px 0 0 #7f000e';
    } else {
      return '0 4px 0 0 #575757';
    }
  }};
  cursor: pointer;
  display: flex;
  position: relative;
  height: 230px;
  justify-content: center;
  margin-bottom: 30px;
  overflow: hidden;
  padding: 0;
  width: 350px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 33px;
  margin-bottom: 30px;
  text-align: center;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const App = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [columnResults, setColumnResults] = useState<(boolean | null)[]>(new Array(sampleSection.cards.length).fill(null));
  const [isChecked, setIsChecked] = useState(false);

  const handleCardClick = (columnIndex: number, cardIndex: number) => {
    // console.log(isChecked);
    if (isChecked) return;

    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = [...prevSelectedCards];
      newSelectedCards[columnIndex] = cardIndex;
      return newSelectedCards;
    });
    setColumnResults((prevResults) => {
      const newResults = [...prevResults];
      newResults[columnIndex] = null;
      return newResults;
    });
  };

  const handleCheckClick = () => {
    const newColumnResults = sampleSection.cards.map((column, columnIndex) => {
      const selectedCardIndex = selectedCards[columnIndex];
      if (selectedCardIndex === undefined) return null;
      return column.answers[selectedCardIndex].isCorrect;
    });

    setColumnResults(newColumnResults);
    console.log(selectedCards);
    if (selectedCards.length !== 0) {
      setIsChecked(true);
    }

    const isOverallCorrect = newColumnResults.every(result => result === true);

    if (isOverallCorrect) {
      console.log('Успешно');
    } else {
      console.log('Попробуй еще');
    }
  };

  const handleResetClick = () => {
    setSelectedCards([]);
    setColumnResults(new Array(sampleSection.cards.length).fill(null));
    setIsChecked(false);
  };

  return (
    <>
      <Container>
        {sampleSection.cards.map((column, columnIndex) => (
          <Column key={columnIndex} isCorrect={columnResults[columnIndex]}>
            <Title>{column.title}</Title>
            {column.answers.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                isSelected={selectedCards[columnIndex] === cardIndex}
                isChecked={columnResults[columnIndex] !== null && selectedCards[columnIndex] === cardIndex ? column.answers[cardIndex].isCorrect : null}
                onClick={() => handleCardClick(columnIndex, cardIndex)}
              >
                <img
                  src={process.env.PUBLIC_URL + card.image.path}
                  alt={card.altText}
                />
                {columnResults[columnIndex] !== null && selectedCards[columnIndex] === cardIndex && (
                  <IconContainer>
                    {column.answers[cardIndex].isCorrect ? <Correct /> : <Incorrect />}
                  </IconContainer>
                )}
              </Card>
            ))}
          </Column>
        ))}
      </Container>
      {selectedCards.length !== 0 && (
        <button onClick={handleCheckClick}>Check</button>
      )}
      <button onClick={handleResetClick}>Reset</button>
    </>
  );
};

export default App;
