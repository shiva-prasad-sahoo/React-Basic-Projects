import React from "react";
import { useTheme } from "../THemeContext";

function ThemeStatus() {
  const { theme } = useTheme();
  return (
    <div>
      <p>
        Current Theme : <strong>{theme}</strong>
      </p>
    </div>
  );
}

export default ThemeStatus;
