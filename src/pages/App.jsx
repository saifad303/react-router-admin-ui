import React, { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link
        to="/admin/dashboard"
        className=" bg-rose-500 text-white px-8 py-4 rounded-lg m-10 inline-block"
      >
        Go to admin
      </Link>
    </div>
  );
};

export default App;
