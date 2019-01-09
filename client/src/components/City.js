import React from "react";

const City = () => {
  return (
    <div>
      <form action="/" enctype="multipart/form-data" method="post">
        <input type="file" name="GaudiLover" />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default City;
