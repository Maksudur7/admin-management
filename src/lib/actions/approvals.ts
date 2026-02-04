// src/lib/actions/approvals.ts
"use server"
import prisma from "../prisma";

export async function processApproval(requestId: string) {
    try {
        const request = await prisma.request.findUnique({
            where: { id: requestId }
        });

        if (!request) return { error: "Request not found" };

        // Check: Eta ki last step?
        if (request.currentStep < request.totalSteps) {
            // Step ekta baraye daw (Next Approver-er kache jabe)
            await prisma.request.update({
                where: { id: requestId },
                data: { currentStep: request.currentStep + 1 }
            });
            return { success: true, message: "Moved to next approval step" };
        } else {
            // Shesh step hole Status 'APPROVED' hobe
            await prisma.request.update({
                where: { id: requestId },
                data: { status: "APPROVED" }
            });
            return { success: true, message: "Final approval complete!" };
        }
    } catch (error) {
        return { success: false, error: "Approval failed" };
    }
}