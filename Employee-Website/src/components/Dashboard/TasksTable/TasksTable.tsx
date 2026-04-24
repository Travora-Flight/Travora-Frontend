import "./TasksTable.css";

type Props = {
    tasks: any[];
    onView: (task: any) => void;
};

const TasksTable = ({ tasks, onView }: Props) => {

    return (
        <div className="tasks">

            <h3 className="tasks__title">Current Tasks</h3>

            <div className="tasks__container">
                <table className="tasks__table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((t: any, i: number) => (
                            <tr key={i} className="tasks__row">

                                <td>{t.id}</td>

                                <td>
                                    <span className="tasks__status-pill">
                                        {t.status}
                                    </span>
                                </td>

                                <td>{t.type}</td>

                                <td className="tasks__location">
                                    📍 {t.location}
                                </td>

                                <td>{t.time}</td>

                                <td>
                                    <button
                                        className="tasks__btn"
                                        onClick={() => onView(t)}
                                    >
                                        View
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default TasksTable;