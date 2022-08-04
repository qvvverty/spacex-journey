import "./advantageCard.css";

export default function AdvantageCard({ cardContent }) {
  return (
    <div className='advantage-card'>
      {
        cardContent.map((content, index) => {
          const CSSClass = 'advantage-text advantage-text-' + (index + 1) + '-line';
          if (Array.isArray(content)) {
            return (
              <span className={CSSClass} key={content[0]}>
                {content[0]}
                <span className={CSSClass + '-small'}>{content[1]}</span>
              </span>
            )
          } else {
            return <span className={CSSClass} key={content[0]}>{content}</span>
          }
        })
      }
    </div>
  )
}
