import { connect, Connection, Table } from '@lancedb/lancedb';
import { config } from '../extension';
import { tables, Schemas } from "./schemas";


export async function getOrCreateTable(tableName: string = "chunks", db: Promise<Connection> = connectDB()): Promise<Table> {
  for (const table of tables()) {
    if (table === tableName) {
      return (await db).openTable(tableName);
    }
  }
  return (await db).createTable(Schemas[tableName]);
}

export async function getTable(tableName: string = "chunks", db: Promise<Connection> = connectDB()): Promise<Table> {
  return (await db).openTable(tableName);
}

export async function connectDB(uri: string = config.dbURL): Promise<Connection>{
  return connect(uri);
}