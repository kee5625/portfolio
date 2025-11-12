import { ModalButton } from "./modal"
import { WORK_EXPERIENCE } from "@/app/data"
import { Spotlight } from "@/components/ui/spotlight"

export function WorkExperienceModals() {
  return (
    <div className="grid gap-4">
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
          <a
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            rel="noopener noreferrer"
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {job.start} - {job.end}
                </p>
              </div>
            </div>
          </a>
        </ModalButton>
      ))}
    </div>
  )
}


