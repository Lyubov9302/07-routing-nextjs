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
  const categ = slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", searchValue, page, categ],
    queryFn: () => FetchNotes(searchValue, page, categ),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient categ={categ} />
    </HydrationBoundary>
  );
}
