export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return undefined;
}
export async function getUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return undefined;
}
export async function getUserPosts(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error(res.statusText);
}
