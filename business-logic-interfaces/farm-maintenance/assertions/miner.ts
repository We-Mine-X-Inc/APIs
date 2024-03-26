import { MinerHydrated } from "../miner.interface";

export function assertMiner(
  value: MinerHydrated
): asserts value is MinerHydrated {
  if ((value as MinerHydrated).marketDetails.model === undefined)
    throw new Error("Not an Miner");
}
