import { PrismaClient } from '@prisma/client';

import addParticipant from "./_actions/addParticipant";
import parseDate from '../_utils/parseDate';

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
                <li key={participant.id}>{participant.name} {participant.surname} urodzony/a {parseDate(participant.birthday.toString(), false)}</li>
            ) }
        </ul>
    </>
}