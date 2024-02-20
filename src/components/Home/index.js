import Header from '../Header'
import DesignerIntro from '../DesignerIntro'
import Video from '../Video'
import ReviewAndFeedback from '../ReviewAndFeedback'

import './index.css'

function Home(){
    return (
        <>
            <Header />
            <DesignerIntro />
            <Video />
            <ReviewAndFeedback />
        </>
    )
}

export default Home