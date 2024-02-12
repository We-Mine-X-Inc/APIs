import { MinerInflated } from "../miner.interface";

export function assertMiner(
  value: MinerInflated
): asserts value is MinerInflated {
  if ((value as MinerInflated).marketDetails.model === undefined)
    throw new Error("Not an Miner");
}
