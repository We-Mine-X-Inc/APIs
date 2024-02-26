import { ObjectId } from "bson";
import { Types } from "mongoose";

export type TransferableObjectId = ObjectId | Types.ObjectId;
