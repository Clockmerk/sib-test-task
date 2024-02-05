export type StatusT = "Новый" | "Исполнен" | "Запланирован" | "Просрочен"

export interface ReminderT {
    about: string;
    descrition: string;
    dateAdded: string;
    dateDone: string;
    status: StatusT;
}

export interface RemindersT {
    list: ReminderT[]
}