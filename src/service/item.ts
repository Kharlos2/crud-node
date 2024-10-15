import { Car } from '../interfaces/car.interface';
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const getCars = async () =>{
    const responseItems = await ItemModel.find({});
    return responseItems;
}
const getCar = async (id:string) => {
    const responseCar = await ItemModel.findOne({_id:id});
    return responseCar;
}
const updateCar = async (id: string, data: Car) => {
    const responseCar = await ItemModel.findOneAndUpdate(
        { _id: id},
        data,
        {
           new:true
        });
    return responseCar;
}
const deleteCar = async (id:string) =>{
    const responseCar = await ItemModel.findByIdAndDelete({_id:id})
    return responseCar
}

export {insertCar, getCars, getCar, updateCar, deleteCar};