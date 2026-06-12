import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // ✅ SET COOKIE CORRECTLY (THIS IS THE FIX)
    const response = NextResponse.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

    response.cookies.set("userId", user._id.toString(), {
      httpOnly: true,
      path: "/",
    });

    return response;

  } catch (error) {
    console.error(error); // 👈 IMPORTANT for debugging
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}