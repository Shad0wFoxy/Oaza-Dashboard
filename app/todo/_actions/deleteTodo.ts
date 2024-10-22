'use server';

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function deletePayment(formData: any) {
    const id = parseInt(formData.get('id'));

    try {
        await prisma.todo.delete({
            where: {
                id
            }
        })

        revalidatePath('/todo');
    } catch(err) {
        console.error(err);
    }
}