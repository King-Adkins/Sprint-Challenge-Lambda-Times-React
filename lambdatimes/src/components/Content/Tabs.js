import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log('Tabs props:', props);
  return (
    <div className = 'tabs'>
      <div className = 'topics'>
        <span className = 'title'>TRENDING TOPICS:</span>
      { props.tabs.map(tab => {
        return (
          <Tab
            key = {Date.now() * Math.random()}
            tab = {tab}
            changeSelected = {props.changeSelected}
            selectedTab = {props.selectedTab}
            />
        )
      })}
      </div>    
    </div>
  )
}

Tabs.PropTypes = {
  changeSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Tabs;