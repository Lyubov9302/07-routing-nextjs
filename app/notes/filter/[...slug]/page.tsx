import { FetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const NotesSlug = async ({ params }: Props) => {
  const { slug } = await params;

  const note = slug[0] === "all" ? undefined : slug[0];
  const response = await FetchNotes(note);

  return (
    <>{response?.notes?.length > 0 && <NotesClient notes={response.notes} />}</>
  );
};

export default NotesSlug;
