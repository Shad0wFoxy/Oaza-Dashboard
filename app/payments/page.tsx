import { PrismaClient } from "@prisma/client";
import Link from "next/link";

import addPayment from "./_actions/addPayment";
import PaymentRecord from "@/components/PaymentRecord";
import addUpMoney from "../_utils/addUpMoney";

const prisma = new PrismaClient();

export default async function Payments() {
    const payments = await prisma.payments.findMany();
    // const payments = [
    //     {
    //         id: 0,
    //         title: "test",
    //         description: "opis",
    //         amount: 10.0,
    //         date: "11-09-2024",
    //         type: "oczekująca opłata"
    //     }
    // ];

    return (
        <main className="m-5">
            <header>Aktualny budżet: {addUpMoney(false)} PLN | Po realizacji: {addUpMoney(true)} PLN</header>
            <h1>Dodaj płatność</h1>
            <form action={addPayment} id="paymentForm">
                <input name="title" placeholder="Tytuł" className="border-2 border-black" autoComplete="off" />
                <input name="description" placeholder="Opis" className="border-2 border-black" autoComplete="off" />
                <input name="amount" placeholder="Kwota" className="border-2 border-black" autoComplete="off" />
                <input type="date" name="date" className="border-2 border-black" />
                <select name="type" className="border-2 border-black" defaultValue="opłata">
                    <option value="wpłata">Wpłata</option>
                    <option value="opłata">Opłata</option>
                    <option value="oczekująca wpłata">Oczekująca wpłata</option>
                    <option value="oczekująca opłata">Oczekująca opłata</option>
                </select>

                <button type="submit" className="border-2 border-black hover:bg-slate-400">Dodaj</button>
            </form>

            <ul>
                {
                    payments.map((payment) => 
                        <PaymentRecord key={payment.id} payment={payment} />
                    )
                }
            </ul>
            
            <Link 
                href="/"
                className="absolute bottom-28 right-48 w-24 h-12 border-4 border-black rounded flex justify-center items-center font-bold text-xl hover:bg-slate-400 transition duration-300"
            >
                Wróć
            </Link>
        </main>
    )
}