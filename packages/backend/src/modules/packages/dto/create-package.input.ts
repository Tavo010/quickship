import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateContactInput } from 'src/modules/contact/dto/create-contact.input';
import { CreateDirectionInput } from 'src/modules/directions/dto/create-direction.input';

@InputType('packagesInput')
export class CreatePackageInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  weigth!: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  width!: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  heigth!: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  legth!: number;

  @Field(() => CreateContactInput)
  contact: CreateContactInput

  @Field(() => CreateDirectionInput)
  direction: CreateDirectionInput
}