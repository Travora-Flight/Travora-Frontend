import { createPortal } from "react-dom";
import "./ScanOverlay.css";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

import AddBagModal from "./AddBagModal/AddBagModal";

type Props = {
  onClose: () => void;
  onSaveBag: (bag: any) => void;
};

const ScanOverlay = ({ onClose, onSaveBag }: Props) => {

  const [showAddBag, setShowAddBag] = useState(false);

  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {

    let scanner: Html5Qrcode;

    const startScanner = async () => {

      try {

        // مهم
        await new Promise((resolve) =>
          setTimeout(resolve, 300)
        );

        scanner = new Html5Qrcode("reader");

        scannerRef.current = scanner;

        await scanner.start(

          {
            facingMode: "environment"
          },

          {
            fps: 10,
            qrbox: {
              width: 220,
              height: 220,
            },
          },

          (decodedText) => {

            console.log("SCANNED:", decodedText);

            setShowAddBag(true);

            scanner
              .stop()
              .then(() => {
                scanner.clear();
              })
              .catch((err) =>
                console.log(err)
              );

          },

          () => { }

        );

      } catch (err) {

        console.error(
          "CAMERA ERROR:",
          err
        );

      }

      try {

        const stream =
          await navigator.mediaDevices.getUserMedia({
            video: true,
          });

        console.log("CAMERA WORKS");

        stream.getTracks().forEach((track) =>
          track.stop()
        );

      } catch (err) {

        console.log("CAMERA BLOCKED", err);

      }

    };


    startScanner();

    return () => {

      if (scannerRef.current) {

        scannerRef.current
          .stop()
          .then(() => {
            scannerRef.current?.clear();
          })
          .catch(() => { });

      }

    };

  }, []);

  return createPortal(

    <div className="scan">

      <div
        className="scan__overlay"
        onClick={onClose}
      ></div>

      <button
        className="scan__close"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="scan__content">

        <div className="scan__box">

          <div id="reader"></div>

        </div>

        <h3>Bag Scanner</h3>

        <p>
          Point your camera at the QR code
        </p>

        <button
          className="scan__btn"
          onClick={() => {
            setShowAddBag(true);
          }}
        >
          Scan
        </button>

      </div>

      {showAddBag && (

        <AddBagModal
          onClose={() =>
            setShowAddBag(false)
          }
          onSave={(bag) => {
            onSaveBag(bag);
          }}
        />

      )}

    </div>,

    document.body

  );

};

export default ScanOverlay;