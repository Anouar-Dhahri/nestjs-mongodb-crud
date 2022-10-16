import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.model';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel:Model<ProductDocument>
  ){}

  async Create(productDto: ProductDto):Promise<Product> {
    const newProd = await this.productModel.create(productDto)
    return newProd
  }

  async FindAll():Promise<Product[]> {
    return this.productModel.find()
  }

  async FindOne(id: String):Promise<Product> {
    return this.productModel.findOne({_id: id})
  }

  async Update(id: String, productDto: ProductDto):Promise<Product> {
    return this.productModel.findByIdAndUpdate(
      {_id:id}, {
        $set:productDto
      },
      { new: true}
    )
  }

  async Delete(id: String){
    const deleteProd = await this.productModel.findByIdAndRemove({_id:id})
    return deleteProd
  }
}
