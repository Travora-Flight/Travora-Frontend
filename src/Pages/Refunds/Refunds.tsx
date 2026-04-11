import "./Refunds.css";
import RefundsHeader from "../../components/Refunds/RefundsHeader/RefundsHeader";
import RefundsContent from "../../components/Refunds/RefundsContent/RefundsContent";

const Refunds = () => {
    const data = [
        {
            name: "Ali Akl",
            email: "marmud3k@gmail.com",
            phone: "0111548354",
            status: "Rejected",
            refundId: "1",
            orderId: "1011",
            orderAmount: "EGP 4,570",
            refundAmount: "EGP 4,570",
            date: "13/03/2026, 14:23",
            reason: "خدمة سيئة"
        },
        {
            name: "Sara Mohamed",
            email: "sara@example.com",
            phone: "01508493486",
            status: "Approved",
            refundId: "2",
            orderId: "1012",
            orderAmount: "EGP 2,300",
            refundAmount: "EGP 2,300",
            date: "23/03/2026, 10:15",
            reason: "Wrong item received"
        },
        {
            name: "Mohamed Ali",
            email: "mohamed@example.com",
            phone: "01508493486",
            status: "Pending",
            refundId: "3",
            orderId: "1012",
            orderAmount: "EGP 2,300",
            refundAmount: "EGP 2,300",
            date: "23/03/2026, 10:15",
            reason: "Wrong item received"
        },
       {
            name: "Ali Akl",
            email: "marmud3k@gmail.com",
            phone: "0111548354",
            status: "Rejected",
            refundId: "4",
            orderId: "1011",
            orderAmount: "EGP 4,570",
            refundAmount: "EGP 4,570",
            date: "13/03/2026, 14:23",
            reason: "خدمة سيئة"
        },
        {
            name: "Sara Mohamed",
            email: "sara@example.com",
            phone: "01508493486",
            status: "Approved",
            refundId: "5",
            orderId: "1012",
            orderAmount: "EGP 2,300",
            refundAmount: "EGP 2,300",
            date: "23/03/2026, 10:15",
            reason: "Wrong item received"
        },
        {
            name: "Sara Mohamed",
            email: "sara@example.com",
            phone: "01508493486",
            status: "Approved",
            refundId: "6",
            orderId: "1012",
            orderAmount: "EGP 2,300",
            refundAmount: "EGP 2,300",
            date: "23/03/2026, 10:15",
            reason: "Wrong item received"
        }
    ];

    return (
        <div className="refunds-page-container">

            <div className="refunds-content-wrapper">

                <RefundsHeader data={data} />

                <RefundsContent data={data} />

            </div>

        </div>
    );
};

export default Refunds;