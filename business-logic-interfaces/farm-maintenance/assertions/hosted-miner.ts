import { HostedMiner } from "../hosted-miner.interface";

export function assertHostedMiner(
  value: HostedMiner
): asserts value is HostedMiner {
  if ((value as HostedMiner).API === undefined)
    throw new Error("Not an HostedMiner");
}
