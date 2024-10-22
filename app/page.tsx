import Link from "next/link";

export default function Home() {
    return (
        <main className="flex w-full flex-col gap-5 text-4xl mt-32">
            <header className="m-auto font-bold">FMO Kalwaria - Dashboard</header>

            <Link 
                href="./payments" 
                className="m-auto font-semibold mt-20 border-4 border-zinc-800 px-8 py-4 flex rounded-xl hover:bg-slate-300 transition duration-300"
            >
                Payments
            </Link>
            <Link
                href="./todo" 
                className="m-auto font-semibold mt-6 border-4 border-zinc-800 px-8 py-4 flex rounded-xl hover:bg-slate-300 transition duration-300"
            >
                Todo
            </Link>
            <Link
                href="./participants" 
                className="m-auto font-semibold mt-6 border-4 border-zinc-800 px-8 py-4 flex rounded-xl hover:bg-slate-300 transition duration-300"
            >
                Participants
            </Link>
        </main>
    )
}