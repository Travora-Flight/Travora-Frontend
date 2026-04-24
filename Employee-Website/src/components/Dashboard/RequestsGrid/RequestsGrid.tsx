import "./RequestsGrid.css";

type Request = {
  id: string;
  location: string;
  type: string;
  time: string;
};

type Props = {
  requests: Request[];
  onView: (r: Request) => void; 
};

const RequestsGrid = ({ requests, onView }: Props) => {
  return (
    <div className="requests">

      <h3 className="requests__title">
        New Assigned Requests
      </h3>

      <div className="requests__grid">
        {requests.map((r, i) => (
          <div key={i} className="requests__card">

            <h4>{r.id}</h4>

            <p>{r.location}</p>
            <p>{r.type}</p>
            <p>{r.time}</p>

            <button
              className="requests__btn"
              onClick={() => onView(r)} 
            >
              View
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default RequestsGrid;