import { Types } from "mongoose";
export type MinerDetails = {
    _id: Types.ObjectId;
    model: String;
    coin: Types.ObjectId;
    description: String;
    efficiency: String;
    expectedHashrate: String;
    wattage: String;
};
//# sourceMappingURL=miner-details.interface.d.ts.map