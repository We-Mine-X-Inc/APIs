import { Types } from "mongoose";

export type MiningWork = {
  _id: Types.ObjectId;
  miner: Types.ObjectId;
  pool: Types.ObjectId;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
};
