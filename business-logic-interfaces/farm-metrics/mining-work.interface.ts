import { Types } from "mongoose";
import { HostedMiner, Pool } from "../farm-maintenance";

export interface MiningWork {
  _id: Types.ObjectId;
  hostedMinerByFriendlyId: Types.ObjectId;
  poolByFriendlyId: Types.ObjectId;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
}

export interface MiningWorkHydrated {
  _id: Types.ObjectId;
  hostedMinerByFriendlyId: HostedMiner;
  poolByFriendlyId: Pool;
  time: Date;
  hashRate: Number;
  totalEnergyConsumption: Number;
  isOnline: Boolean;
}
