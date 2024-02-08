import { useRouter } from "next/router";

interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter();
  return (
    <>
      <div>Create Detail Page</div>
      <p>Query: {JSON.stringify(router.query)}</p>
    </>
  );
}
