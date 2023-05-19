import mongoose, {Document} from "mongoose";
import { ObjectId } from "mongoose";

export interface IUserDocument extends Document {
  name: string | ObjectId;
}
