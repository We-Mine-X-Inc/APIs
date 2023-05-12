import { IsDate } from "class-validator";

export class CreateUptimeTickRequestDto {
  @IsDate()
  public datetime: Date = new Date(Date.now());
}

export interface CreateUptimeTickRequest {
  datetime: Date;
}
