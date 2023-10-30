import { Types } from "mongoose";
import { Miner, Pool } from "../farm-maintenance";

export interface MiningWork {
  _id: Types.ObjectId;
  minerByFriendlyId: Types.ObjectId;
  poolByFriendlyId: Types.ObjectId;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
}

export interface MiningWorkHydrated {
  _id: Types.ObjectId;
  minerByFriendlyId: Miner;
  poolByFriendlyId: Pool;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
}
