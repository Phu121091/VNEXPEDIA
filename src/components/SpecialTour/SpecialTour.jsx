import Special from "../../pages/Home/Special/Special";
import './SpecialTour.css'


function SpecialTour() {
    return ( 
        <div className="wrapper-special">
            <div className='suggest-tour'>
                <div className="suggest-title">Special Tour
                    <hr className='hrt'/>
                </div>
                    <p className="suggest-main">
                    We know that every traveller is different, so our experts have
                    meticulously designed different Vietnam touring styles to help you
                    explore Vietnam in a way that suits you the best. Want to see the
                    highlights of Vietnam, take a look on our Classic Vietnam Tours; want
                    to have unforgettable experiences with your children, Vietnam Family
                    Tours can't be missed; want to soak up the sun-and-sea, choose one
                    best beach tour from our Vietnam Beach Holidays theme. No matter what
                    kind of traveller you are, our Best Vietnam Tours by Styles collection
                    got a tour (or probably dozen) that will fit you just right.
                    </p>
            </div>
            <Special/>
        </div> 
    );
}

export default SpecialTour;