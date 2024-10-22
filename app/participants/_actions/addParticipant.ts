"use client";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addParticipant(formData: any) {
    const name = formData.get("name");
    const surname = formData.get("surname");

    const birthdayStr = new Date(formData.get("birthday"));
    const birthday = birthdayStr.toISOString();

    try {
        await prisma.participants.create({
            data: {
                name,
                surname,
                birthday
            }
        });

        revalidatePath("/participants");
    } catch (err) {
        console.error(err);
    }
}