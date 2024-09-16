import { connect, Connection, Table } from '@lancedb/lancedb';
import { config } from '../extension';

export enum Tables {
    Chunks = "chuncks",
}

export async function getOrCreateTable(tableName: string = Tables.Chunks, db: Promise<Connection> = connectDB()): Promise<Table> {
  const tables = await (await db).tableNames();
  for (const table of tables) {
    if (table === tableName) {
      return (await db).openTable(tableName);
    }
  }
  return (await db).createTable(tableName);
}

export async function getTable(tableName: string = Tables.Chunks, db: Promise<Connection> = connectDB()): Promise<Table> {
  return (await db).openTable(tableName);
}

export async function connectDB(uri: string = config.dbURL): Promise<Connection>{
  return connect(uri);
}