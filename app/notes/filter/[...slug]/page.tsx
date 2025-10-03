interface Props {
  params: Promise<{ slug: string[] }>;
}

const NotesSlug = async ({ params }: Props) => {
  const { slug } = await params;
  console.log("slug", slug);

  return <div>NotesSlug</div>;
};

export default NotesSlug;
