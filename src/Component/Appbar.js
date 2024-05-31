import { useMemo, useState } from "react";
import { LogoImage } from "./LogoImage";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"

export const Appbar = () => {
  // const [userName , setUserName] = useState("");
  const userData = useMemo(() => {
    // console.log("rendering");
    return JSON.parse(localStorage.getItem("userName"));
  }, []);
  const navigateTo = useNavigate()

  // Logout
  const logoutHandler = () => {
    navigateTo("/login")
    localStorage.removeItem("token")
  }

  return (
    <div className="shadow h-14 flex justify-between pr-10 bg-zinc-700">
      <div className="flex flex-col justify-center h- ml-4">
        <p className="text-3xl text-[#42c8f5]">Digital wallet</p>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          {" "}
          {userData}{" "}
        </div>

        <Popover>
          <PopoverTrigger>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl text-black cursor-pointer">
                {userData[0].toUpperCase()}{" "}
              </div>
            </div>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <Button onClick={logoutHandler}>Logout</Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
