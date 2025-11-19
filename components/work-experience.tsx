import { ModalButton } from "./modal"
import { WORK_EXPERIENCE } from "@/app/data"
import { Spotlight } from "@/components/ui/spotlight"

export function WorkExperienceModals() {
  return (
    <div className="flex flex-col space-y-3">
      {WORK_EXPERIENCE.map((job) => (
        <ModalButton
          key={job.id}
          triggerText={job.company}
          title={job.title}
          description={`Work experience at ${job.company}`}
          jobLink={job.link}
          jobId={job.id}
          jobTitle={job.title}
          jobCompany={job.company}
          jobStart={job.start}
          jobEnd={job.end}
        >
          <div
            className="cursor-pointer relative overflow-hidden rounded-xl border border-border bg-card p-[1px] transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <Spotlight
              className="from-primary/20 via-primary/10 to-transparent blur-2xl"
              size={96}
            />
            <div className="relative h-full w-full rounded-[11px] bg-card p-5">
              <div className="relative flex w-full flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-1.5">
                  <h4 className="font-semibold text-foreground leading-tight">{job.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{job.company}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {job.start}
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {job.end}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalButton>
      ))}
    </div>
  )
}