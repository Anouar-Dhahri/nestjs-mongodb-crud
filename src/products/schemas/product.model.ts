import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    title: String
    @Prop({ required: true })
    description: String
    @Prop({ required: true })
    price: Number
}

export const ProductSchema = SchemaFactory.createForClass(Product)