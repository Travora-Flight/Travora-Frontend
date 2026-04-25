import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LiveMap.css"

function LiveMap() {

  // موقع مؤقت(القاهرة)
  const position: [number, number] = [30.0444, 31.2357];

  return (

    <div className="dashboard-card">

      {/* عنوان الكارت */}
      <div className="dashboard-card-header live-map-header">
        Live Map
      </div>

      {/* جسم الكارت */}
      <div className="dashboard-card-body live-map-container">

        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="live-map-map"
        >

          {/* الخريطة */}
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* ماركر */}
          <Marker position={position}>
            <Popup>
              Employee Location
            </Popup>
          </Marker>

        </MapContainer>

      </div>

    </div>

  );
}

export default LiveMap;