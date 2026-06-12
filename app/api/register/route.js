import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    // 1. Connect to DB
    await connectDB();

    // 2. Get data from request body
    const { name, email, password } = await request.json();

    // 3. Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 6. Return success (DON'T send password back)
    return Response.json(
      {
        message: "User created successfully",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );

  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}