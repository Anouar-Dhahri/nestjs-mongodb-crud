import { Controller, Body, Param, Post, Get, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { Product } from './schemas/product.model';
@Controller('products')
export class ProductsController {
  constructor (private readonly productService: ProductsService ){}

  @Post()
  async Create(@Body() productDto: ProductDto) {
    await this.productService.Create(productDto)
  }

  @Get()
  async FindAll(): Promise<Product[]> {
    return this.productService.FindAll()
  }

  @Get('/:id')
  async FindOne(@Param('id') id: String): Promise<Product> {
    return this.productService.FindOne(id)
  }

  @Put('/:id')
  async Update(@Param('id') id: String, @Body() productDto: ProductDto): Promise<Product> {
    return this.productService.Update(id, productDto)
  }

  @Delete('/:id')
  async Delete(@Param('id') id:String) {
    return this.productService.Delete(id)
  }
}
