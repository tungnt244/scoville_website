import React from 'react'
import NavbarNews from './NavbarNews'
import NewsPage from './NewsPage'
import NewsList from './NewsList'

export default class NewsLayout extends React.Component {
  render(){
    return(
      <div className="news-layout">
        <NavbarNews/>
        {this.props.children}
      </div>
    )
  }
}