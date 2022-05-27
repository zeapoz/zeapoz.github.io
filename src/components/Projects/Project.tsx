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
    <div className="aspect-square basis-2/5">
      <a href={props.link}
        className="hover:text-white">
        <img
          src="https://img.icons8.com/ios-filled/24/969696/link--v1.png"
          alt="Link"
          className="inline" />
        <h1 className="inline font-bold text-xl">{props.title}</h1>
      </a>
      <img
        src={props.image}
        alt={props.title}
        className="aspect-square my-3 rounded-md object-cover object-center w-full" />
      <p>{props.desc}</p>
      <br></br>
    </div>
  );
}
