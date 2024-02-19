import {Component} from 'react'

import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { IoSearchOutline } from "react-icons/io5"
import { RiArrowDropDownLine } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

import './index.css'

class Header extends Component {
    state = {isMenuIconClicked: false, isProfileIconClicked: false, searchInput: ''}

    onClickMenuIcon = () => {
        this.setState(prevState => ({isMenuIconClicked: !prevState.isMenuIconClicked}))
    }

    onClickProfileIcon = () => {
        this.setState(prevState => ({isProfileIconClicked: !prevState.isProfileIconClicked}))
    }

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
    }

    renderMobileViewNavItems = () => (
        <div className='mobile-view-nav-items-container'>
                    <h1 className='mobile-view-nav-item'>Find designers</h1>
                    <div className='nav-features-container'>
                        <span className='vertical-line designers-features-vertical-line'></span>
                        <div>
                            <div>
                                <h1 className='mobile-view-nav-item'>Designer Search</h1>
                                <p className='mobile-view-nav-item-description'>Quickly find your next designer</p>
                            </div>
                            <div>
                                <h1 className='mobile-view-nav-item'>Post a job</h1>
                                <p className='mobile-view-nav-item-description'>The #1 job board for design talent</p>
                            </div>
                        </div>
                    </div>
                    <h1 className='mobile-view-nav-item'>Inspiration</h1>
                    <h1 className='mobile-view-nav-item'>Courses</h1>
                    <div className='nav-features-container'>
                        <span className='vertical-line courses-features-vertical-line'></span>
                        <div>
                            <div>
                                <h1 className='mobile-view-nav-item'>UX Diploma</h1>
                                <p className='mobile-view-nav-item-description'>Learn UX design from scratch in 6 months</p>
                            </div>
                            <div>
                                <h1 className='mobile-view-nav-item'>UI Certificate</h1>
                                <p className='mobile-view-nav-item-description'>12-week UI skill building for designers</p>
                            </div>
                            <div>
                                <h1 className='mobile-view-nav-item'>Live interactive workshops</h1>
                                <p className='mobile-view-nav-item-description'>with design professionals</p>
                            </div>
                        </div>
                    </div>
                    <h1 className='mobile-view-nav-item'>Jobs</h1>
                    <h1 className='mobile-view-nav-item'>Go Pro</h1>
        </div>
    )

    render(){
        const {searchInput, isMenuIconClicked} = this.state

        return (
            <>
            <nav className='header-background'>
                <div className='header-menu-and-title-container'>
                    {!isMenuIconClicked && <HiOutlineMenuAlt2 className='header-menu-icon' onClick={this.onClickMenuIcon} />}
                    {isMenuIconClicked && <AiOutlineClose className='header-menu-icon' onClick={this.onClickMenuIcon} />}
                    <a href='#' className='website-title'>Dribble</a>
                    <ul className='nav-items-list'>
                        <li className='nav-item'>
                            Find designers
                            <RiArrowDropDownLine />
                        </li>
                        <li className='nav-item'>
                            Inspiration
                        </li>
                        <li className='nav-item'>
                            Courses
                            <RiArrowDropDownLine />
                        </li>
                        <li className='nav-item'>
                            Jobs
                        </li>
                        <li className='nav-item'>
                            Go Pro
                        </li>
                    </ul>
                </div>
                <div className='header-search-and-profile-container'>
                    <IoSearchOutline className="search-icon" />
                    <div className='search-icon-container'>
                        <IoSearchOutline />
                        <input type='text' className='search-input' value={searchInput} onChange={this.onChangeSearchInput} placeholder='Search...' />
                    </div>
                    <img src='https://lh3.googleusercontent.com/ogw/ANLem4bmoguV_rP8gn48_wzatP5qzfiyIOGj63LQutJPPCg=s64-c-mo' alt='profile-logo' className='profile-image' onClick={this.onClickProfileIcon} />
                </div>
            </nav>
            {isMenuIconClicked && (
                this.renderMobileViewNavItems()
            )}
            </>
        )
    }
}

export default Header