import './SuggestTour.css'
import Blockgrid from '../Blockgrid/Blockgrid';

function SuggestTour() {
    return ( <div className="wrapper-suggest">
                <div className='suggest-tour'>
        <div className="suggest-title">Suggested Simples Tours
        <hr className='hrt'/>
        </div>
        
      <p className="suggest-main">
        The tours featured throughout our website are intended to give you ideas
        for what's possible when you travel with us. Treat them simply as
        inspiration, because your trip will be created individually by one of
        our specialists to match your tastes and budget.
      </p>

      <div className="itemSimmple">
        <Blockgrid />
      </div>
      </div>
    </div> );
}

export default SuggestTour;