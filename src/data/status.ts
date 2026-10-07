import type { Status } from "../types";

export const TASK_STATUS = {
    PENDING: "pending",
    COMPLETE: "complete",
};

export const listStatus: Status[] = [
    {
        status: TASK_STATUS.PENDING,
        name: "Pendiente",
    },
    {
        status: TASK_STATUS.COMPLETE,
        name: "Completada",
    },
];