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
  content?: string[]
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
  content,
  children,
}: ModalButtonProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children || <Button variant="outline">{triggerText}</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {content && content.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {content.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            )}
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
  content?: string[]
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
          {content && content.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Highlights:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {content.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
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
