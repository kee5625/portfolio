import { ModalButton } from "./modal"
import { BLOG_POSTS } from "@/app/data"
import { Spotlight } from "@/components/ui/spotlight"

export function ActivitiesModals() {
  return (
    <div className="flex flex-col space-y-2.5">
      {BLOG_POSTS.map((post) => (
        <ModalButton
          key={post.uid}
          triggerText={post.title}
          title={post.title}
          description={post.description}
          jobLink={post.link}
          jobId={post.uid}
          jobTitle={post.title}
          jobCompany={post.title}
          jobStart=""
          jobEnd=""
        >
          <div
            className="relative overflow-hidden rounded-lg border border-border/60 bg-card p-[1px] transition-all hover:border-primary/40 hover:shadow-md"
          >
            <Spotlight
              className="from-primary/15 via-primary/8 to-transparent blur-xl"
              size={80}
            />
            <div className="relative h-full w-full rounded-[7px] bg-card p-4">
              <div className="relative flex w-full flex-col gap-1.5">
                <h4 className="font-medium text-foreground leading-tight">{post.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
              </div>
            </div>
          </div>
        </ModalButton>
      ))}
    </div>
  )
}
