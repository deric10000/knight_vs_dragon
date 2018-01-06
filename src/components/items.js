import React, { Component } from 'react';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';

export class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItemList: false
    };
    this.toggleItemList = this.toggleItemList.bind(this);
  }

  toggleItemList() {
    if (this.state.clickedItemList === false) {
      this.setState(() => {
        return {
          clickedItemList: true
        }
      })
    } else {
      this.setState(() => {
        return {
          clickedItemList: false
        }
      })
    }
  }

  render() {
      return (
      <div className="Items">
        <h3>Items &nbsp;
          {
            this.state.clickedItemList === true ?
              <div id="itemList">
                <FaArrowCircleLeft className="icons" id="itemsClose" onClick={ this.toggleItemList } />
                  <div className="itemElement" id="basicItem"></div>
                  <div className="itemElement"></div>
                  <div className="itemElement"></div>
                  <div className="itemElement"></div>
                  <div className="itemElement"></div>
              </div>
              :
              <FaArrowCircleRight className="icons" id="itemsOpen" onClick={ this.toggleItemList } />
          }
        </h3>
      </div>
    )
  }
}
