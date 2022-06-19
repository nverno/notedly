import { User } from './User';

export interface Note {
  _id: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  favoriteCount: number;
  favoritedBy: User[];
}

export interface NoteFeed {
  cursor?: string;
  limit?: number;
  hasNextPage: boolean;
  notes: Note[];
}

export interface CreateNoteDto {
  content: string;
}

export interface UpdateNoteDto {
  noteId: string;
  content: string;
}
