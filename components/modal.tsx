import { FC } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Spotlight } from "@/components/ui/spotlight"

interface ModalButtonProps {
  triggerText: string
  title: string
  description: string
  jobLink: string
  jobId: string
  jobTitle: string
  jobCompany: string
  jobStart: string
  jobEnd: string
}

export function ModalButton({
  triggerText,
  title,
  description,
  jobLink,
  jobId,
  jobTitle,
  jobCompany,
  jobStart,
  jobEnd,
}: ModalButtonProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">{triggerText}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={jobLink}
              rel="noopener noreferrer"
              key={jobId}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">{jobTitle}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400">{jobCompany}</p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {jobStart} - {jobEnd}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
