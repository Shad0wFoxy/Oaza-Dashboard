'use server';

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addPayment(formData: any) {
    const title = formData.get('title');

    try {
        await prisma.todo.create({
            data: {
                title,
            }
        });

        revalidatePath('/');
    } catch(err) {
        console.error(err);
    }
}