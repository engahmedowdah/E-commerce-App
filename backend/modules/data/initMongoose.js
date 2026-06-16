import mongoose from "mongoose";
import { translationPlugin } from "../../shared/translationPlugin.js";

mongoose.plugin(translationPlugin);
