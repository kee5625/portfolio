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

interface ActivityModalProps {
  title: string
  description: string
  content: string
  link1?: string
  link2?: string
  link3?: string
  uid: string
  children?: ReactNode
}

export function ActivityModal({
  title,
  description,
  content,
  link1,
  link2,
  link3,
  uid,
  children,
}: ActivityModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">{title}</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {content && (
            <div className="text-sm text-foreground">
              <p>{content}</p>
            </div>
          )}
          {(link1 || link2 || link3) && (
            <div className="flex flex-col gap-2">
              {link1 && (
                <a
                  href={link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Link 1
                </a>
              )}
              {link2 && (
                <a
                  href={link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Link 2
                </a>
              )}
              {link3 && (
                <a
                  href={link3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Link 3
                </a>
              )}
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
