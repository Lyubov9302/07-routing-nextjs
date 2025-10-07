import { FetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const searchValue = "";
const page = 1;

export default async function Notes({ params }: Props) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", searchValue, page, tag],
    queryFn: () => FetchNotes(searchValue, page, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
