import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the Admin document
interface IAdmin extends Document {
  email: string;
  location: string;
  type: string;
}

// Create a Mongoose schema for the Admin model
const adminSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true } // Optional: adds createdAt and updatedAt fields automatically
);

// Create the Admin model using the schema and interface
const Admin = mongoose.model<IAdmin>('Admin', adminSchema);

export default Admin;
