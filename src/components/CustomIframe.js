import React, { useState } from "react";
import { createPortal } from "react-dom";
import { styles } from "./styles";

const CustomIframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe
      {...props}
      ref={setContentRef}
      style={styles.iframe}
      title="form iframe"
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default CustomIframe;
