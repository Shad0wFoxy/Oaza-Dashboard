import parseDate from "../app/_utils/parseDate";
import deletePayment from "../app/payments/_actions/deletePayment";
import changePayment from "../app/payments/_actions/realizePayment";

interface props {
    payment: any
}

export default  function PaymentRecord({ payment }: props) {
    var bgColor: string;

    if (payment.type === "wpłata") bgColor = "bg-green-400"
    else if (payment.type === "opłata") bgColor = "bg-red-400"
    else bgColor = "bg-stone-400"

    return <>
        <li key={payment.id} className={`flex gap-14 w-1/2 h-9 border-2 border-zinc-600 m-5 p-3 justify-center items-center ${bgColor}`}>
            <span>{payment.title}</span>
            <span>{payment.description}</span>
            <span>{payment.amount}</span>
            <span>{parseDate(payment.date.toString(), true)}</span>
            <span>{payment.type}</span>

            {/* EDIT RECORD */}

            {
                payment.type.substring(0,2) === "oc" ? 
                    <form action={changePayment}>
                        <input type="hidden" name="id" id={payment.id.toString()} value={payment.id} />
                        <input type="hidden" name="type" id={payment.id.toString()} value={payment.type} />

                        <button type="submit" className="bg-stone-100 px-3 border-2 border-black hover:bg-stone-300 transition duration-300">Zrealizuj</button>
                    </form> 
                    : ""
            }

            <form action={deletePayment} className="flex items-center">
                <input type="hidden" name="id" id={payment.id.toString()} value={payment.id} />

                <button type="submit" className="flex bg-red-600 text-white w-8 h-8 items-center justify-center">X</button>
            </form>
        </li>
    </>
}