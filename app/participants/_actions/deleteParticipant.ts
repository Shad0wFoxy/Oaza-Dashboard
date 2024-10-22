"use client";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function deleteParticipant(formData: any) {
    const prisma = new PrismaClient();
    
    const id = formData.get("id");

    try {
        await prisma.participants.delete({
            where: {
                id
            }
        });
    
        revalidatePath("/participants");
    } catch(err) {
        console.error(err);
    }
}