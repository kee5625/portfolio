import { FC, ReactNode } from "react"
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
  children?: ReactNode
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
  children,
}: ModalButtonProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children || <Button variant="outline">{triggerText}</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* Modal content goes here */}
            <p>More details about {jobCompany} coming soon...</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
