import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cityMap from "../../../static/assets/images/bio/phoenix-metro-map.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + cityMap + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullets">
          <div className="bullet-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">antwaun@antwaunjohnson.com</div>
          </div>

          <div className="bullet-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Phoenix Metro Area</div>
          </div>
        </div>
      </div>
    </div>
  );
}
