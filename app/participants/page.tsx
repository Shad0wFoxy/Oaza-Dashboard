import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

import addParticipant from "./_actions/addParticipant";
import parseDate from '../_utils/parseDate';
import deleteParticipant from './_actions/deleteParticipant';

const prisma = new PrismaClient();

export default async function Participants() {
    const participants = await prisma.participants.findMany();
    
    return <>
        <form action={addParticipant}>
            <input type="text" name="name" placeholder="Imię" autoComplete="off" />
            <input type="text" name="surname" placeholder="Nazwisko" autoComplete="off" />
            <input type="date" name="birthday" />

            <button type="submit">Dodaj uczestnika</button>
        </form>

        <ul>
            { participants.map((participant) => 
                <li key={participant.id}>
                    {participant.name} {participant.surname} urodzony/a {parseDate(participant.birthday.toString(), false)}
                
                    <form action={deleteParticipant}>
                        <input type="hidden" name="id" value={participant.id} />

                        <button type="submit" className="bg-red-600 text-white w-8 h-8">X</button>
                    </form>
                </li>
            ) }
        </ul>

        <Link 
                href="/"
                className="absolute bottom-28 right-48 w-24 h-12 border-4 border-black rounded flex justify-center items-center font-bold text-xl hover:bg-slate-400 transition duration-300"
            >
                Wróć
            </Link>
    </>
}