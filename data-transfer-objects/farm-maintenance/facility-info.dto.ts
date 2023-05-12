import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFacilityInfoRequestDto {
  @IsString()
  public name?: string;

  @IsString()
  public address?: string;

  @IsNumber()
  public estPowerUsageInKiloWatts?: number;

  @IsNumber()
  public estPowerCapacityInKiloWatts?: number;

  @IsNumber()
  public estPowerCostInMicros?: number;

  @IsOptional()
  @IsNumber()
  public farenheitTemp?: number;

  @IsString()
  public isAutoManaged?: string;
}

export interface CreateFacilityInfoReqeust {
  name: string;
  address: string;
  estPowerUsageInKiloWatts: number;
  estPowerCapacityInKiloWatts: number;
  estPowerCostInMicros: number;
  farenheitTemp?: number;
  isAutoManaged: string;
}
