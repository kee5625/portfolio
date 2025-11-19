import { ModalButton } from "./modal"
import { BLOG_POSTS } from "@/app/data"
import { Spotlight } from "@/components/ui/spotlight"

export function ActivitiesModals() {
  return (
    <div className="flex flex-col space-y-3">
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
            className="relative overflow-hidden rounded-xl border border-border bg-card p-[1px] transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <Spotlight
              className="from-primary/20 via-primary/10 to-transparent blur-2xl"
              size={96}
            />
            <div className="relative h-full w-full rounded-[11px] bg-card p-5">
              <div className="relative flex w-full flex-col gap-2">
                <h4 className="font-semibold text-foreground leading-tight">{post.title}</h4>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </div>
            </div>
          </div>
        </ModalButton>
      ))}
    </div>
  )
}
