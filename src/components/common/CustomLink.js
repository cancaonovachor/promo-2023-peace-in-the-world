import React from "react";

export function CustomLink(props) {
  return (
    <a
      {...props}
      onClick={async (e) => {
        e.preventDefault();
        await props.onCloseArticle();
        props.onOpenArticle("explanation");
      }}
    >
      {props.children}
    </a>
  );
}
