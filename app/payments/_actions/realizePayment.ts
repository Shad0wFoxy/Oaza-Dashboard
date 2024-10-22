'use server';

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addPayment(formData: any) {
    const id = parseInt(formData.get("id"));
    
    const type = formData.get("type");
    
    var newType: string;

    if (type === "oczekująca wpłata") newType = "wpłata"
    else if (type === "oczekująca opłata") newType = "opłata"

    try {
        await prisma.payments.update({
            where: { id },
            data: { 
                type: newType!
            }
        });

        revalidatePath('/');
    } catch(err) {
        console.error(err);
    }
}