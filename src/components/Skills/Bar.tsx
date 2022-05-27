import React from "react";

export { Bar };

type Props = {
  title: string,
  value: string,
}

const Bar = ({ title, value }: Props) => {
  let filled = "rounded-full bg-blue-500 h-full w-" + value;

  return (
    <li>
      {title}
      <div className="w-full h-3 rounded-full bg-gray-700">
        <div className={filled}></div>
      </div>
    </li>
  )
}
