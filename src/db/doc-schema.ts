import * as arrow from "apache-arrow";

export const docModel = new arrow.Schema([
    new arrow.Field("id", new arrow.Int32()),
    new arrow.Field("vector", new arrow.FixedSizeList(768, new arrow.Float32())),
    new arrow.Field("text", new arrow.Utf8()),
    new arrow.Field("import_time", new arrow.TimestampMillisecond()),
    new arrow.Field("source", new arrow.Utf8()),
    new arrow.Field("chunk_index", new arrow.Int16()),
    new arrow.Field("nb_chunks", new arrow.Int16()),
    new arrow.Field("doc_tags", new arrow.List(new arrow.Utf8())), 
    new arrow.Field("chunk_tags", new arrow.List(new arrow.Utf8())),
    new arrow.Field("links", new arrow.List(new arrow.Int32())),
]);

