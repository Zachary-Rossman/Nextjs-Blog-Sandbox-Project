export default async function Page() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await res.json();

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}