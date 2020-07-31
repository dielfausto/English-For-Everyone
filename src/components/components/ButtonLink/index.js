
import React from 'react';

function ButtonLink() {
  // props => { className: "o que algém passar", href: "/"}
  return (
    <a href="{props.href}" classNmae="{props.className}">
      Novo Vídeo
    </a>
  );
}

export default ButtonLink;