import ObjectID from "bson-objectid";
import { Types } from "mongoose";

export type TransferableObjectId = ObjectID | Types.ObjectId;
