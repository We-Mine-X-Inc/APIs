import { Types } from "mongoose";
import { Miner, Pool } from "../farm-maintenance";

export interface MiningWork {
  _id: Types.ObjectId;
  miner: Types.ObjectId;
  pool: Types.ObjectId;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
}

export interface MiningWorkHydrated {
  _id: Types.ObjectId;
  miner: Miner;
  pool: Pool;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
}
