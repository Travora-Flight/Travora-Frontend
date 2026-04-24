import "./BagDetails.css";
import { Package, Trash2 } from "lucide-react";

type Props = {
  bags: any[];
  task: any;
  onDelete: (index: number) => void;
};

const BagDetails = ({ bags, task, onDelete }: Props) => {

  if (bags.length === 0) {
    return (
      <div className="bag__empty">
        <div className="bag__icon-empty">
          <Package size={28} />
        </div>
        <p>There is No Bags Scanned</p>
        <span>Start Scan QR codes On The Bags</span>
      </div>
    );
  }

  return (
    <div className="bag">

      <p className="bag__title">
        Client: {task.client}
      </p>

      {bags.map((bag, i) => (
        <div key={i} className="bag__item">

          {/* 🔥 icon */}
          <div className="bag__icon">
            <Package size={18} />
          </div>

          {/* delete */}
          <button
            className="bag__delete"
            onClick={() => onDelete(i)}
          >
            <Trash2 size={16} />
          </button>

          <p className="bag__id">{bag.id}</p>

          <div className="bag__item-grid">

            <div>
              <span>Destination</span>
              <p>{bag.destination}</p>
            </div>

            <div>
              <span>Weight</span>
              <p>{bag.weight}</p>
            </div>

            <div>
              <span>Scanned</span>
              <p>{bag.scanned}</p>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default BagDetails;