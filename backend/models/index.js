import mongoose from "mongoose";
import { GradesModel } from "./grade.js";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.GradesModel = GradesModel;

export { db };
