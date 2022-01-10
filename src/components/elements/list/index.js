import React from "react";
import { useDroppable } from "@dnd-kit/core";
import "./index.sass";

const List = ({ children }) => {
  const { setNodeRef } = useDroppable({
    id: "file-explorer",
  });
  return (
    <ul className="list" ref={setNodeRef}>
      {children}
    </ul>
  );
};

export default List;
