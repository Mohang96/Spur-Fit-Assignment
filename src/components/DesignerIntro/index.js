import {gsap} from 'gsap'
import { FaRegHeart } from "react-icons/fa"
import { MdBookmarkBorder } from "react-icons/md"
import { TfiEmail } from "react-icons/tfi"

import './index.css'

function DesignerIntro(){
    gsap.fromTo( ".designer-intro-box",{ x: -100, backgroundColor: '#ace1fa', }, { x: 10, backgroundColor: '#b9faac' })

    return (
        <div className='designer-intro-box'>
            <h1 className='designer-intro-heading'>Ahead app redesign concept</h1>
            <div className='designer-profile-and-features-container'>
                <div className='designer-profile-and-name-container'>
                    <img src='https://lh3.googleusercontent.com/ogw/ANLem4bmoguV_rP8gn48_wzatP5qzfiyIOGj63LQutJPPCg=s64-c-mo' alt='profile-logo' className='profile-image' />
                    <div className='designer-name-and-work-status-container'>
                        <h1 className='designer-name'>Mohan Garikipati</h1>
                        <div className='designer-work-status-container'>
                            <span className='circle'></span>
                            <p className='work-status'>Available for work</p>
                        </div>
                    </div>
                </div>
                <div className='designer-features-container'>
                    <button className='designer-features-btn'>
                        <FaRegHeart />
                    </button>
                    <button className='designer-features-btn'>
                        <MdBookmarkBorder />
                    </button>
                    <button className='designer-features-btn email-btn'>
                        <TfiEmail className='email-icon' />
                        <span className='email-alternative-btn-text'>Get in touch</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesignerIntro