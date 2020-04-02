import React from "react";
import profilePicture from "../../../static/assets/images/bio/IMG_Antwaun.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
          tellus vehicula, consequat nunc at, pellentesque nisi. Proin gravida
          justo nibh. Phasellus non fringilla risus. Sed eget mauris turpis.
          Nunc nec imperdiet dolor. Duis porttitor at erat at ultrices. Aliquam
          ac viverra eros. Vivamus pulvinar rhoncus posuere. Duis congue nunc
          quis metus aliquet vehicula. Cras et cursus nunc, id iaculis lorem. In
          pretium, orci nec scelerisque malesuada, justo quam tincidunt elit, id
          varius felis magna tincidunt justo. Pellentesque varius ligula ac
          aliquam bibendum. Integer porta diam consectetur purus tempus, ac
          finibus dolor rhoncus. Fusce ac tristique turpis. Aliquam laoreet
          lectus sed pulvinar lacinia. Proin a elementum nulla, sed accumsan
          lacus. Quisque orci sem, ultrices in massa suscipit, cursus pulvinar
          turpis. Nunc vel commodo lorem. Phasellus in mi vel felis scelerisque
          accumsan nec a velit. Quisque risus mauris, imperdiet ut dictum vitae,
          feugiat eget mi. Mauris semper elit at nulla sagittis venenatis. Nunc
          auctor egestas fermentum. Curabitur ac risus in diam cursus egestas.
          Nam ultricies consectetur enim fringilla maximus.
        </p>
      </div>
    </div>
  );
}
