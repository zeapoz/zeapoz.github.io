import React from "react";

export { Bar };

type Props = {
  title: string,
  percentage: number,
}

const Bar = ({ title, percentage }: Props) => {
  return (
    <li>
      {title}
      <div className="w-full h-3 rounded-full bg-gray-700">
        <div className={"rounded-full bg-blue-500 h-full"} style={{ width: percentage + "%" }}></div>
      </div>
    </li >
  );
}
