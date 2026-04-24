import {
  Package,
  X,
  Check,
  Calendar,
} from "lucide-react";

type NotificationType = {
  id: number;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type:
    | "created"
    | "canceled"
    | "completed"
    | "rescheduled";
};

type Props = {
  notifications: NotificationType[];
  unreadCount: number;
};

const NotificationsDropdown = ({
  notifications,
  unreadCount,
}: Props) => {

  return (
    <div className="notif">

      {/* header */}
      <div className="notif__header">

        <span>Notifications</span>

        <span className="notif__badge">
          {unreadCount} New
        </span>

      </div>

      {/* list */}
      <div className="notif__list">

        {notifications.length === 0 ? (

          <p className="notif__empty">
            No notifications yet
          </p>

        ) : (

          notifications.map((n) => (
            <div
              key={n.id}
              className="notif__item"
            >

              <div
                className={`notif__icon notif__icon--${n.type}`}
              >

                {n.type === "created" && (
                  <Package size={16} />
                )}

                {n.type === "canceled" && (
                  <X size={16} />
                )}

                {n.type === "completed" && (
                  <Check size={16} />
                )}

                {n.type === "rescheduled" && (
                  <Calendar size={16} />
                )}

              </div>

              <div className="notif__content">

                <p className="notif__title">
                  {n.title}
                </p>

                <p className="notif__message">
                  {n.message}
                </p>

                <span className="notif__time">
                  {n.time}
                </span>

              </div>

            </div>
          ))

        )}

      </div>
    </div>
  );
};

export default NotificationsDropdown;