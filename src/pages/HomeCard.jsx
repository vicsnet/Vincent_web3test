import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeCard = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

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
                : user.name.toLowerCase().includes(search);
            })
            .map((user) => (
              <div
                className="mx-auto w-[80%] md:w-[40%] p-[8px] bg-[white] py-[30px] rounded-[10px] shadow-xl"
                key={user.id}
              >
                <h1 className="text-[grey] text-[12px] md:text-[18px] font-bold flex gap-[10px] justify-center">
                  <span className="">Name:</span> {user.name}
                </h1>
                <h3 className="text-[grey] text-[12px] md:text-[18px]  flex gap-[10px] justify-center">
                  <span className="font-bold">UserName:</span> {user.username}
                </h3>
                <h3 className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Email:</span>
                  {user.email}
                </h3>

                <h3 className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Phone:</span>
                  {user.phone}
                </h3>
                <h3 className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Company's Name:</span>
                  {user.company.name}
                </h3>
                <h3 className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Slogan:</span>{" "}
                  {user.company.catchPhrase}
                </h3>
                <h3 className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Motivation:</span>
                  {user.company.bs}
                </h3>
                <h3 className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Company's Website:</span>{" "}
                  {user.website}
                </h3>
                <p className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Address:</span>
                  <span className="w-[70%] gap-[2px] flex">
                    <span>{user.address.street},</span>
                    <span>{user.address.suite},</span>
                    <span>{user.address.city}</span>
                  </span>
                </p>
                <p className="text-[grey] text-[12px] md:text-[18px] flex gap-[10px] justify-center">
                  <span className="font-bold">Zip Code:</span>{" "}
                  {user.address.zipcode}
                </p>
                <div className="flex justify-center gap-[4px]">
                  <p className="text-[grey] text-[12px] md:text-[18px] flex gap-[4px] justify-center">
                    <span className="font-bold">Latitute:</span>
                    {user.address.geo.lat}
                  </p>
                  <p className="text-[grey] text-[12px] md:text-[18px] flex gap-[4px] justify-center">
                    <span className="font-bold">Longitude:</span>
                    {user.address.geo.lng}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
