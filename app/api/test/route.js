import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find();

    return Response.json(posts);
  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}