import * as React from "react";

const Serverstatus = () => {
  const [status, setstatus] = React.useState("");
  React.useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setstatus(data));
  }, []);

  return (
    <div>
      <h1>Server status: </h1>
      <p>{status}</p>
    </div>
  );
};

export default Serverstatus;
