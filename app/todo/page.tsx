import { PrismaClient } from "@prisma/client";
import Link from "next/link";

import addTodo from "./_actions/addTodo";
import deleteTodo from "./_actions/deleteTodo";

const prisma = new PrismaClient();

export default async function Todo() {
    const todos = await prisma.todo.findMany();

    return (
        <main className="flex flex-col">
            <h1 className="m-auto mt-32 text-3xl font-bold">Dodaj todo</h1>

            <form action={addTodo} className="m-auto">
                <input type="text" name="title" placeholder="Title" className="border-2 border-black rounded-lg p-1 m-5" />

                <button type="submit" className="border-2 border-stone-700 px-2 py-1 hover:bg-stone-300 transition duration-300">Dodaj</button>
            </form>

            <ul className="flex flex-col mt-10 w-full text-center">
                <h1 className="text-3xl font-bold mb-5">Todo list:</h1>
                {
                    todos.map((todo) => 
                        <li 
                            key={todo.id}
                            className="text-xl m-1 flex flex-row gap-2 justify-center items-center"
                        >
                            {todo.id}. {todo.title}

                            <form action={deleteTodo}>
                                <input type="hidden" name="id" id={todo.id.toString()} value={todo.id} />

                                <button type="submit" className="w-8 h-8 bg-red-500 text-white text-2xl">X</button>
                            </form>
                        </li>
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