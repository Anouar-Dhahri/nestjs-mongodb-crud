import { IsNotEmpty } from 'class-validator'
export class ProductDto {
    @IsNotEmpty()
    title: String;
    @IsNotEmpty()
    description: String;
    @IsNotEmpty()
    price: Number;
}