import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeCard = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[100%] mx-auto bg-[#f5f7fa]">
      <div className="flex w-[94%] mx-auto md:flex-row flex-col justify-between items-center">
        <h1 className="text-[grey] text-[40px] cursor-pointer">PostDoc</h1>
        <form>
          <input
            type="text"
            placeholder="search Post"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" align-middle w-[265px] h-[2.5rem] outline-none border-[2px] rounded-[4px] pl-[4px] mx-auto"
          />
        </form>
      </div>
      <div className="w-[90%] mx-auto bg-[#f5f7fa]">
        <div className="flex md:flex-row flex-wrap flex-col gap-8 mt-[20px]">
          {users
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.title.toLowerCase().includes(search);
            })
            .map((user) => (
              <div
                className="mx-auto w-[80%] md:w-[40%] p-[8px] bg-[white] py-[30px] rounded-[10px] shadow-xl"
                key={user.id}
              >
                <h1 className="text-[grey] text-[18px] text-center">
                  {user.title}
                </h1>
                <p className="text-[14px] text-center">{user.body}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
