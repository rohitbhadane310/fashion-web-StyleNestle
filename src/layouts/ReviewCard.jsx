import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ name }) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor transition duration-300 ease-in-out">
      <div>
        <ImQuotesLeft size={25} />
        <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4">
          {name}
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
        aperiam distinctio fuga ipsam rerum rem.
      </p>
    </div>
  );
};

export default ReviewCard;
