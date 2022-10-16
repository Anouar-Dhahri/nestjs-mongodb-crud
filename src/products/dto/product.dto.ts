import { IsNotEmpty } from 'class-validator'
export class ProductDto {
    @IsNotEmpty()
    readonly title: String;
    @IsNotEmpty()
    readonly description: String;
    @IsNotEmpty()
    readonly price: Number;
}