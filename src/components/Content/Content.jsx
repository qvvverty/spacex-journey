import AdvantageCard from "./AdvantageCard/AdvantageCard";
import "./content.css";

const cardsContent = [
  [
    'мы',
    '1',
    'на рынке'
  ],
  [
    'гарантируем',
    '50%',
    'безопасность'
  ],
  [
    'календарик за',
    ['2001', 'г.'],
    'в подарок'
  ],
  [
    'путешествие',
    '597',
    'дней'
  ],
];

export default function Content() {
  return (
    <div className="content-wrapper">
      <div>
        <div className="slogan">
          <span className="slogan-large-text slogan-gradient">Путешествие</span>
          <span className="slogan-common-text slogan-gradient">на красную планету</span>
        </div>
        <div className="travel-wrapper">
          <div className="travel-button has-corners">
            Начать путешествие
            <div className="border-corner border-corner-2" />
            <div className="border-corner border-corner-4" />
          </div>
          <div className="arrow" />
        </div>
      </div>
      <div className="advantage-cards-wrapper">
        {
          cardsContent.map(cardContent => <AdvantageCard cardContent={cardContent} key={cardContent[0]} />)
        }
      </div>
    </div>
  )
}
