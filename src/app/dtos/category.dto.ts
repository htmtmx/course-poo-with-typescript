import { AccessType, Category } from "../models/category.model";
import {IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject} from 'class-validator'

export interface ICreateCategoryDto extends Omit<Category, 'id'> {

}

export class CreateCategoryDto implements ICreateCategoryDto{
  @IsNotEmpty()
  @Length(4,140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsEnum(AccessType)
    @IsOptional()
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    dto.image = 'a';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error)
  }

})();