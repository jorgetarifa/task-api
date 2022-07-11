
import { ObjectId } from "mongodb";

export default interface Tasks {
    task: string;
    image: string;
    priotity: string;
    deadline: string;
    id?: ObjectId;
}