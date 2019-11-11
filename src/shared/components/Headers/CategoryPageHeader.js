import React from "react";
import defaultBackground from "assets/img/english2.png"; 

// core components

function CategoryPageHeader({ background = defaultBackground }) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-large">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + background + ")"
          }}
          ref={pageHeader}
        ></div>
      </div>
    </>
  );
}

export default CategoryPageHeader;
