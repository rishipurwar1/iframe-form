import { useEffect, useState } from "react";
import CustomIframe from "./components/CustomIframe";
import Form from "./components/Form";

const App = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      if (event.data.type !== "submit") return;
      console.log(event.data);
      setResult(event.data);
    };

    window.addEventListener("message", handler);

    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="container">
      <CustomIframe>
        <Form />
      </CustomIframe>
      {result?.value?.success && (
        <p className="success">{`Result: ${JSON.stringify(result?.value)}`}</p>
      )}
      {result?.value?.error && (
        <p className="error">{`Result: ${JSON.stringify(result?.value)}`}</p>
      )}
    </div>
  );
};

export default App;
