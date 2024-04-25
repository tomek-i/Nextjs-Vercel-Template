import { useEffect } from "react"

export function useCloseOnEscKey(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!isOpen || key !== "Escape") return
      onClose()
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  }, [isOpen, onClose])
}
