import { User } from './User';

export interface Note {
  _id: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  favoriteCount: number;
  favoritedBy: Partial<User>[];
}

export interface NoteFeed {
  cursor?: string;
  limit?: number;
  hasNextPage: boolean;
  notes: Partial<Note>[];
}

export interface CreateNoteDto {
  content: string;
}

export interface UpdateNoteDto {
  noteId: string;
  content: string;
}
