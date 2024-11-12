import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Redirect = (props) => {
  const { persona } = useLoaderData();
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!persona) return;

    let link = null;
    switch (persona) {
      case "linapaolabonilla":
        link = "https://hihello.me/p/caeab945-6bc9-425e-8c2a-29ab6309c83f";
        break;
      case "juancarloslopez":
        link = "https://hihello.me/p/b4287dbb-a748-4ae6-afdc-d33b7bfac822";
        break;
      case "edgarizquierdo":
        link = "https://hihello.me/p/8506c2d5-ea74-41e3-b04f-e5a7f58718bf";
        break;
      case "sandraretavisca":
        link = "https://hihello.me/p/69803c31-5501-4c7d-b8c0-031338508782";
        break;
    }
    setUrl(link);
    if (link) window.location.href = link;
  }, [persona]);

  if (!url)
    return (
      <>
        {persona} <span> Persona no encontrada</span>
      </>
    );
  return (
    <h5>
      Redirecting: ...{" "}
      <a href={url}>
        {" "}
        Ir a tarjeta de: {persona} {url}
      </a>
    </h5>
  );
};

export default Redirect;
