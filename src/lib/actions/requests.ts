// src/lib/actions/requests.ts
"use server"
import { revalidatePath } from "next/cache"
import prisma from "../prisma";

export async function createRequest(formData: FormData) {
    const title = formData.get("title") as string;
    const requesterId = "USER_ID_HERE"; // User login thakle session theke ashbe

    await prisma.request.create({
        data: {
            title,
            requesterId: requesterId,
            status: "PENDING",
            priority: "Medium",
        }
    });

    revalidatePath("/requests");
}