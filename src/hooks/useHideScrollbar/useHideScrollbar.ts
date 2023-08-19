import { useEffect } from "react"

export type UseHideScrollbarProps = {
  isOpen: boolean
}

export const useHideScrollbar = ({ isOpen }: UseHideScrollbarProps) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])
}
