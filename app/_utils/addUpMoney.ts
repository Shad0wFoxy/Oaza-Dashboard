import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function addUpMoney(addIncoming: boolean) {
    const payments = await prisma.payments.findMany();
    const stats = await prisma.stats.findMany();

    let money = stats[0].value;

    if (!addIncoming) {
        payments.forEach(payment => {
            if (payment.type === "opłata") money -= payment.amount;
            else if (payment.type === "wpłata") money += payment.amount;
        });
    } else {
        payments.forEach(payment => {
            if (payment.type === "opłata" || payment.type === "oczekująca opłata") money -= payment.amount;
            else if (payment.type === "wpłata" || payment.type === "oczekująca wpłata") money += payment.amount;
        });
    }

    money = Math.round((money + Number.EPSILON) * 100) / 100;

    return money;
}