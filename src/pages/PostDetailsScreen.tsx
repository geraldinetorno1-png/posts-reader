import { isAxiosError } from "axios";
import Avatar from "@/components/avatar";
import FormattedDate from "@/components/formatted-date";
import CommentList from "@/features/comments/components/CommentList";
import { Link, useParams } from "react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";
import { gutter } from "@/lib/layout";

const toParagraphs = (body: string) =>
  body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const PostDetailsScreen = () => {
  const { postId } = useParams();
  const { isPending, isError, error, data, refetch } = usePost(Number(postId));

  if (isPending) {
    return (
      <div className="mt-6">
        <p role="status" className="sr-only">
          Loading post
        </p>
        <div aria-hidden>
          <Skeleton className="h-4 w-8 rounded-md" />
          <Skeleton className="mt-3 h-8 rounded-md sm:h-9" />
          <Skeleton className="mt-2 h-8 w-3/4 rounded-md sm:h-9" />
          <div className="mt-4 flex items-center gap-3 border-b pb-3">
            <Skeleton className="size-8 shrink-0 rounded-full" />
            <Skeleton className="h-4 w-28 rounded-md" />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Skeleton className="h-4 rounded-md" />
            <Skeleton className="h-4 rounded-md" />
            <Skeleton className="h-4 w-11/12 rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    const isMissingPost = isAxiosError(error) && error.response?.status === 404;
    return (
      <div className={`mt-16 ${gutter}`}>
        <p className="text-sm tabular-nums text-muted-foreground sm:mt-2 sm:text-right">
          {isMissingPost ? "404" : null}
        </p>
        <div className="min-w-0 max-w-sm">
          <h1 className="font-reading text-2xl leading-snug">
            {isMissingPost ? "No post at this address" : "The post didn't load"}
          </h1>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {isMissingPost
              ? "This post either never existed or has been deleted."
              : error.message}
          </p>
          <div className="mt-6">
            {isMissingPost ? (
              <Link to="/" className={buttonVariants({ variant: "outline" })}>
                Browse all posts
              </Link>
            ) : (
              <Button variant="outline" onClick={() => refetch()}>
                Try again
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const paragraphs = toParagraphs(data.body ?? "");
  return (
    <>
    <article className="mt-6">
      <p className="text-sm tabular-nums text-muted-foreground">#{data.id}</p>
      <h1 className="mt-2 font-reading text-3xl leading-tight sm:text-4xl">
        {data.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b pb-3 text-sm text-muted-foreground">
        {typeof data.userId === "number" && (
          <span className="flex items-center gap-3">
            <Avatar>{data.userId}</Avatar>
            Author {data.userId}
          </span>
        )}
        <FormattedDate value={data.createdAt} />
      </div>
      {paragraphs.length > 0 && (
        <div className="mt-6 font-reading text-base leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-6 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </article>
    <CommentList postId={data.id} />
    </>
  );
};

export default PostDetailsScreen;
