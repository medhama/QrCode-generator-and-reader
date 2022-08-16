import React from "react";
import NavBar from "./navbar";
import "./styles/scan.scss";
import { useState } from "react";

import { QrReader } from "react-qr-reader";

import QrScanner from "qr-scanner";

const Scan = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState("");
  const [startScan, setStartScan] = useState(false);

  const scanimg = (e) => {
    console.log(typeof e.target.files[0]);
    console.log(typeof selectedImage);
    QrScanner.scanImage(e.target.files[0]).then((data) => {
      console.log(data);
      setData(data);
    });
  };

  return (
    <div>
      <NavBar />
      <h1>Scan Qr Code</h1>
      <div>
        <button
          className="StartScanButton"
          onClick={() => {
            setStartScan(!startScan);
          }}
        >
          {" "}
          {startScan ? "Stop Scan" : "Start Scan with webcam"}
        </button>
        <div className="Scannerr">
          {startScan && (
            <QrReader
              className="webcamm"
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                  setStartScan(false);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: "100%" }}
            />
          )}
        </div>

        {selectedImage && (
          <div>
            <img
              id="myImg"
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
              onchange={() => {
                console.log("changed");
              }}
            />
            <br />
            <button
              className="removeButton"
              onClick={() => {
                setSelectedImage(null);
                console.log("cleared");
              }}
            >
              Remove
            </button>
          </div>
        )}
        <br />

        <br />
        <input
          className="fileInputButton"
          type="file"
          name="myImage"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
            console.log("cleared1");

            scanimg(event);
          }}
        />
      </div>
      <div className={`${data !== "" ? "outputData" : ""}`}>
        <p>{data !== "" && <p>{data}</p>}</p>
      </div>
    </div>
  );
};

export default Scan;
