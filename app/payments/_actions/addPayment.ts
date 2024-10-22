'use server';

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addPayment(formData: any) {
    const title = formData.get('title');
    const description = formData.get('description');
    const amount = parseFloat(formData.get('amount'));
    
    const datetime = new Date(formData.get('date'));
    const date = datetime.toISOString();
    
    const type = formData.get('type');1

    try {
        await prisma.payments.create({
            data: {
                title,
                description,
                amount,
                date,
                type
            }
        });

        revalidatePath('/');
    } catch(err) {
        console.error(err);
    }
}