// Define prop type
type PostCardProps = {
  title: string;
  author: string;
  date: string;
};


export default function PostCard({ title, author, date, }: PostCardProps) {
  return (
    <article>
      {/* Use prop type and value passed from homepage to render prop */}
      <h2>{title}</h2>
      <h2>{author}</h2>
      <h2>{date}</h2>
    </article>
  );
}