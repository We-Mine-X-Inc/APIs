import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFacilityInfoDto {
  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public address?: string;

  @IsOptional()
  @IsNumber()
  public estPowerUsageInKiloWatts?: number;

  @IsOptional()
  @IsNumber()
  public estPowerCapacityInKiloWatts?: number;

  @IsOptional()
  @IsNumber()
  public estPowerCostInMicros?: number;

  @IsOptional()
  @IsNumber()
  public farenheitTemp?: number;

  @IsOptional()
  @IsString()
  public isAutoManaged?: string;
}
