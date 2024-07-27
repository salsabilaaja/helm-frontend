import React from "react"
import { Link } from 'react-router-dom'
import CONFIG from '../static/config.json'
import CCNActionButton from "../components/button/CCNActionButton"


function CCNCoverView() {
  return (
    <div className="coverContainer">
      <div className="coverContentContainer">
        <div className="coverContent">
          <p className="txtCoverTitle">Know your Helmet</p>
          <p className="txtCoverDesc mt-[10px]">Find you perfect helmet today in HELMETCO</p>

          <Link to={CONFIG.pages.endpoint.question}>
            <CCNActionButton
              className="btnStartCover mt-[20px]"
              a_strText="Start Now"
              filled
            />
          </Link>
        </div>
        <div className="coverPicture">
          <img src={require('../assets/img/helmCover.png')} alt="helm_cover" />
        </div>
      </div>
    </div>
  )
}

export default CCNCoverView
