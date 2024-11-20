import React, { memo } from "react";

const SocialLinksProfile = memo(() => {
  const label = ["GitHub", "FrontEnd Mentor", "LinkedIn", "Twitter", "Instagram"];

  return <div className="w-96 h-[60%] bg-grey-900 rounded-3xl p-10">
    <div>
      <div className="flex justify-center items-center">
        <img src="./assets/images/avatar-jessica.jpeg" alt="avatar" className="w-20 h-20 rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="text-[20px] mt-4">Jessica Randall</div>
        <div className="text-green text-[10px]">London, United Kinngdom</div>
        <div className="mt-6 mb-4 text-[12px]">"Front-end developer and avid reader"</div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6">
        {
          label.map(item => {
            return <div className="w-full h-10 bg-grey-700 rounded-lg flex text-center items-center justify-center text-white">{item}</div>
          })
        }
      </div>
    </div>
  </div>;
});

export default SocialLinksProfile;
