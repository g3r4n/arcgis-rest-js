import { IItem } from "@esri/arcgis-rest-common-types";

export const ItemSuccessResponse: any = {
  success: true,
  id: "3efakeitemid0000"
};

export const ItemResponse: IItem = {
  id: "4bc",
  owner: "jeffvader",
  title: "DS Plans",
  description: "The plans",
  snippet: "Yeah these are the ones",
  tags: ["plans", "star dust"],
  type: "Web Map",
  typeKeywords: ["Javascript", "hubSiteApplication"],
  properties: {
    parentId: "3eb"
  }
};

export const ItemDataResponse: any = {
  source: "3ef",
  values: {
    key: "value"
  }
};

export function ItemDataFileResponse() {
  /* istanbul ignore next, this try catch is only for Node.js */
  if (typeof File !== "undefined" && File) {
    return new File(["foo"], "foo.zip", { type: "application/zip" });
  } else {
    const fs = require("fs");
    return fs.createReadStream(
      "./packages/arcgis-rest-items/test/mocks/foo.zip"
    );
  }
}
