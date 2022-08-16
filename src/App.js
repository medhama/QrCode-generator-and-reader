import "./App.scss";
import NavBar from "./components/navbar";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [OrderId, setOrderId] = useState("");
  //const [Phone, setPhone] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    var ab = {
      FirstName: Fname,
      LastName: Lname,
      OrderId: OrderId,
    };

    QRCode.toDataURL(
      JSON.stringify(ab),
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="App">
      <NavBar />
      <div className="formContainer">
        <h1>QR Code Generator</h1>
        <label>
          First Name: &nbsp;
          <br></br>
          <input
            type="text"
            placeholder="john"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </label>
        <br></br>

        <label>
          Last Name: &nbsp;
          <br></br>
          <input
            type="text"
            placeholder="doe"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <br></br>

        <label>
          Order ID: &nbsp;
          <br></br>
          <input
            type="text"
            placeholder="123456789"
            value={OrderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <button className="buttonn" onClick={GenerateQRCode}>
          Generate
        </button>
      </div>
      {qr && (
        <>
          <img src={qr} />
          <a className="DownloadButton" href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
