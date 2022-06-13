import React from "react";

export { Project };

type Props = {
  link: string,
  title: string,
  desc: string,
  image: string,
}

const Project = (props: Props) => {
  return (
    <a href={props.link}>
      <div className="aspect-square basis-2/5 transition hover:scale-105 hover:text-white hover:-translate-y-1">
        <div>
          <img
            src="https://img.icons8.com/ios-filled/24/969696/link--v1.png"
            alt="Link"
            className="inline" />
          <h1 className="inline font-bold text-xl">{props.title}</h1>
        </div>
        <img
          src={props.image}
          alt={props.title}
          className="aspect-square my-3 rounded-md object-cover object-center w-full" />
        <p className="text-gray-400">{props.desc}</p>
        <br />
      </div>
    </a>
  );
}
