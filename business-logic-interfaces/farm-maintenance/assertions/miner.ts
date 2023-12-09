import { Miner } from "../miner.interface";

export function assertMiner(value: Miner): asserts value is Miner {
  if ((value as Miner).model === undefined) throw new Error("Not an Miner");
}
