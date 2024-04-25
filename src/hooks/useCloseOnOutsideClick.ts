import { useEffect } from "react"

export function useCloseOnOutsideClick(ref: React.RefObject<HTMLElement>, isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!ref.current || !isOpen || ref.current.contains(target as Node)) return
      onClose()
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  }, [isOpen, onClose, ref])
}
