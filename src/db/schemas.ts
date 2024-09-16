import * as arrow from "apache-arrow";
import { normalize } from "path";

export function tables(): string[] {
  return Schemas.key();
}


export const Schemas: any = {
  chunks:
    new arrow.Schema([
      new arrow.Field("id", new arrow.Int32(), false),
      new arrow.Field("vector", new arrow.FixedSizeList(768, new arrow.Field("item", new arrow.Float16(), true)), false),
      new arrow.Field("text", new arrow.Utf8(), true),
      new arrow.Field("import_time", new arrow.TimestampMillisecond(), false),
      new arrow.Field("source", new arrow.Utf8(), false),
      new arrow.Field("chunk_index", new arrow.Int16(), false),
      new arrow.Field("nb_chunks", new arrow.Int16(), false),
      new arrow.Field("doc_tags", new arrow.List(new arrow.Field("item", new arrow.Utf8(), true)), true),
      new arrow.Field("chunk_tags", new arrow.List(new arrow.Field("item", new arrow.Utf8())), true),
      new arrow.Field("links", new arrow.List(new arrow.Field("item", new arrow.Struct([
        new arrow.Field("table", new arrow.Utf8()),
        new arrow.Field("id", new arrow.Int32())
      ]))),
        true),
    ]),
  tags: {},
  people: {},
  communities: {},
  }
