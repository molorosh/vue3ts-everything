import Dexie, { type Table } from 'dexie';

export enum ToDoState {
    New,
    Started,
    Paused,
    Completed,
    Cancelled,
}

export interface ToDoItem {
  id?: number;
  title: string;
  notes?: string;
  created: Date;
  updated?: Date;
  state: ToDoState;
}

export class ToDoDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  todos!: Table<ToDoItem>; 

  constructor() {
    super('myToDoDatbase');
    this.version(1).stores({
      todos: '++id, title, state' // Primary key and indexed props
    });
  }
}

export const db = new ToDoDexie();