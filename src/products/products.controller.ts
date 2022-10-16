import { Controller, Body, Param, Post, Get, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { ProductSchema } from './schemas/product.model';
@Controller('products')
export class ProductsController {
    constructor (private readonly productService: ProductsService ){}
}
