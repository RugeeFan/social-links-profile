import React, { memo } from "react";
import SocialLinksProfile from "./components/SocialLinksProfile";

const App = memo(() => {
  return <div className="flex justify-center items-center h-screen">
    <SocialLinksProfile />
    <div class="attribution fixed bottom-0 text-white">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Rugee</a>.
    </div>
  </div>
});

export default App;
