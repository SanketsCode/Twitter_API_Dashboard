import React from "react";

type User = {
  name: string;
  username: string;
  id: string;
  img: {
    id: string;
    author: string;
    width: string;
    height: string;
    url: string;
    download_url: string;
  };
};
export default function Card({ name, username, id, img }: User) {
  // console.log(img.download_url);

  return (
    <div className="w-[90%] bg-[#3d466d] h-auto p-4 m-10 rounded-lg flex items-center shadow-lg">
      <img
        src={img.download_url}
        className="rounded-full w-24 h-24 border-white border"
        alt={username}
      />

      <div className="flex-row ml-5">
        <div className="flex items-center">
          <h1 className="m-3 text-2xl text-white">Name : {name}</h1>
          <h3 className="bg-white pl-[3px] pr-[3px] h-6 ml-2 rounded-md w-auto">
            ID: {id}
          </h3>
        </div>
        <h2 className="m-3 text-2xl text-white">Username : {username}</h2>
      </div>
    </div>
  );
}
