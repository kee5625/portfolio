import { ActivityModal } from "./modal"
import { ACTIVITIES } from "@/app/data"
import { Spotlight } from "@/components/ui/spotlight"

export function ActivitiesModals() {
  return (
    <div className="flex flex-col space-y-2.5">
      {ACTIVITIES.map((post) => (
        <ActivityModal
          key={post.uid}
          title={post.title}
          description={post.description}
          content={post.content}
          link1={post.link1}
          link2={post.link2}
          link3={post.link3}
          uid={post.uid}
        >
          <div
            className="cursor-pointer relative overflow-hidden rounded-lg border border-border/60 bg-card p-[1px] transition-all hover:border-primary/40 hover:shadow-md"
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
        </ActivityModal>
      ))}
    </div>
  )
}
