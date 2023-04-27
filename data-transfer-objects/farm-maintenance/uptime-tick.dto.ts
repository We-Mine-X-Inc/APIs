import { IsDate, IsOptional } from "class-validator";

export class CreateUptimeTickDto {
  @IsOptional()
  @IsDate()
  public datetime?: Date;
}
