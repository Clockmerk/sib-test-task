import { RemindersT } from "../types/types";

const date = new Date()
const normalDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`

export const reminders: RemindersT = {
    list: [{
      about: "Дело1",
      descrition: "Выполнить дело1",
      dateAdded: normalDate,
      dateDone: normalDate,
      status: "Запланирован"
    }, {
      about: "Дело2",
      descrition: "Выполнить дело2",
      dateAdded: normalDate,
      dateDone: normalDate,
      status: "Запланирован"
    }, {
      about: "Дело3",
      descrition: "Выполнить дело3",
      dateAdded: normalDate,
      dateDone: normalDate,
      status: "Просрочен"
    }, {
      about: "Дело4",
      descrition: "Выполнить дело4",
      dateAdded: normalDate,
      dateDone: normalDate,
      status: "Исполнен"
    }, {
      about: "Дело5",
      descrition: "Выполнить дело5",
      dateAdded: normalDate,
      dateDone: normalDate,
      status: "Запланирован"
    }, {
      about: "Дело6",
      descrition: "Выполнить дело6",
      dateAdded: normalDate,
      dateDone: normalDate,
      status: "Новый"
    }]
}