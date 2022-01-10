import React from "react";
import { useDesktop } from "../../../contexts/desktop";
import AppContainer from "../../apps/container";
import Icon from "../icon";
import "./index.sass";

const Desktop = () => {
  const { apps } = useDesktop();

  return (
    <div className="desktop">
      {apps.map(Icon)}

      {apps.map(AppContainer)}
    </div>
  );
};

export default Desktop;
