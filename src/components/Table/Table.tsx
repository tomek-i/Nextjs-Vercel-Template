import { type VariantProps } from "class-variance-authority"
import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/Input"
import { currencyFormat } from "@/lib/format"
import { TableVariants } from "./Table.variants"
import { Overlay } from "../Overlay"
import { Button } from "../ui/Button"
import { Checkbox } from "../ui/Checkbox"

export type Column<T> = {
  displayName?: string
  name: keyof Partial<T> | string
  visible?: boolean
  sortable?: boolean
  cell?: (value: any, key: number, item: T) => React.ReactNode //if cell is provided, it will be used instead of the default cell
  //if no custom cell is being specified but a type is, the default cell will be used for that type
  type?: "string" | "number" | "date" | "currency" | "boolean"
}

type TableProps<T extends { [key: string]: any }> = {
  isLoading?: boolean
  data: T[]
  columns: Column<T>[]
  disabled?: false
  showSearch?: boolean
  showPagination?: boolean
  onRowClick: (item: T) => void
  onSelectedRowsChange?: (selectedRowsIndicies: number[]) => void
} & React.HTMLAttributes<HTMLTableElement> &
  VariantProps<typeof TableVariants>

export const Table = <T extends { [key: string]: any }>({
  data,
  isLoading = false,
  columns,
  showSearch = false,
  showPagination = false,
  onRowClick,
  onSelectedRowsChange,
}: TableProps<T>) => {
  // Add a new state variable for the selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [isFilterDialogShown, setIsFilterDialogShown] = useState(false)

  const handleFilterButtonClick = () => {
    setIsFilterDialogShown(true)
  }

  const handleFilterDialogClose = () => {
    setIsFilterDialogShown(false)
  }
  // Extract headings from the object keys of the first item in the data array
  //const headings = data && data.length > 0 && data[0] ? Object.keys(data[0]) : []

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // If the "Select All" checkbox is checked, select all rows
      const newSelectedRows = data.map((row, index) => index)
      setSelectedRows([...newSelectedRows])
      onSelectedRowsChange?.(newSelectedRows)
    } else {
      // If the "Select All" checkbox is unchecked, clear the selection
      setSelectedRows([])
      onSelectedRowsChange?.([])
    }
  }
  useEffect(() => {
    // Notify the parent component about the change
    onSelectedRowsChange?.(selectedRows)
  }, [onSelectedRowsChange, selectedRows]) // Re-run the effect when `selectedRows` changes

  function handleSelect(itemIndex: number): void {
    setSelectedRows((prev) => {
      if (prev.includes(itemIndex)) {
        // If the item is already selected, unselect it
        return prev.filter((index) => index !== itemIndex)
      } else {
        // If the item is not selected, select it
        return [...prev, itemIndex]
      }
    })
  }

  function getNestedProperty(obj: any, path: string) {
    const result = path.split(".").reduce((acc, part) => {
      return acc && acc[part]
    }, obj)

    return result
  }

  // Before rendering, create a Map of column visibility
  const columnVisibility = new Map(columns.map((column) => [column.name, column.visible ?? true]))
  const headings = columns.map((column) => column.name)

  const renderPagination = (
    <div className="flex justify-between bg-blue-300 px-2 py-4">
      <span className="flex items-center">
        <span>
          Showing <span className="font-bold">{data.length}</span> rows
        </span>
      </span>
      {showSearch && (
        <div className="flex items-center">
          <Input id="search" placeholder="Search ..." />
          <Button
            startIcon
            onClick={handleFilterButtonClick}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            }
          >
            Filter
          </Button>
          {isFilterDialogShown && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <Overlay />
                </div>
                <div className="inline-block overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <h2>Filter</h2>
                    {columns.map((column) => {
                      if (column.visible ?? true)
                        return (
                          <div key={String(column.name)}>
                            {/* TODO: depending on the type of the cell we have to add a different filter */}
                            <Input
                              id={String(column.name)}
                              placeholder={String(column.name)}
                              name={String(column.name)}
                            />
                          </div>
                        )

                      return null
                    })}
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button>Apply</button>
                    <button onClick={handleFilterDialogClose}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex items-center justify-center ">
        <button className="mx-1 rounded border bg-white px-4 py-2">{"<"}</button>
        <button className="mx-1 rounded border bg-white px-4 py-2">1</button>
        <button className="mx-1 rounded border bg-white px-4 py-2">2</button>
        <button className="mx-1 rounded border bg-white px-4 py-2">3</button>
        <button className="mx-1 rounded border bg-white px-4 py-2">{">"}</button>
      </div>
    </div>
  )

  return (
    <>
      {/* PAGINATION TOP */}
      {showPagination && renderPagination}

      <table className="w-full min-w-full bg-purple-200 text-left text-sm font-light dark:text-white">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr className="cursor-default text-center">
            <th scope="col" className="w-2 px-2 py-4">
              <Checkbox id="selectAll" name="" onChange={handleSelectAllChange} />
            </th>
            {headings.map((heading, index) => {
              const column = columns.find((column) => column.name === heading)
              return (
                column &&
                (column.visible ?? true) && (
                  <th key={index} scope="col" className="px-2 py-4 uppercase">
                    {String(column.displayName || heading)}
                  </th>
                )
              )
            })}
          </tr>
        </thead>
        <tbody className="text-left">
          {isLoading && (
            <>
              <tr>
                <td colSpan={headings.length} className="animate-pulse p-2 text-center">
                  <div className="bg-gray-300 w-full rounded p-2"></div>
                </td>
              </tr>
              <tr>
                <td colSpan={headings.length} className="animate-pulse p-2 text-center">
                  <div className="bg-gray-300 w-full rounded p-2"></div>
                </td>
              </tr>
              <tr>
                <td colSpan={headings.length} className="animate-pulse p-2 text-center">
                  <div className="bg-gray-300 w-full rounded p-2"></div>
                </td>
              </tr>
            </>
          )}
          {!isLoading && (!data || data.length === 0) && (
            <tr>
              <td colSpan={headings.length} className="py-4 text-center">
                NO DATA
              </td>
            </tr>
          )}
          {!isLoading &&
            data &&
            data.map((item, itemIndex) => (
              <tr key={itemIndex} onClick={() => onRowClick(item)} className="cursor-pointer">
                <td className="w-2 px-2 py-4">
                  <Checkbox
                    id={`select-${itemIndex}`}
                    name=""
                    checked={selectedRows.includes(itemIndex)}
                    onChange={(event) => {
                      event.stopPropagation()
                      // handleSelect(itemIndex)
                    }}
                    onClick={(event) => {
                      event.stopPropagation()
                      handleSelect(itemIndex)
                    }}
                  />
                </td>

                {/* //TODO: here load the appropiate cell type for the column */}
                {headings.map((heading, headingIndex) => {
                  const column = columns.find((column) => column.name === heading)
                  if (!column || !columnVisibility.get(heading)) {
                    return null
                  }

                  if (column.cell) {
                    //TODO: perhaps need to replace item[heading]  with the nested property
                    return column.cell(getNestedProperty(item, String(heading)), headingIndex, item)
                  }

                  switch (column.type) {
                    case "number":
                      return (
                        <td key={headingIndex} className="px-2 py-4">
                          {Number(item[heading]).toFixed(2)}
                        </td>
                      )
                    case "date":
                      return (
                        <td key={headingIndex} className="px-2 py-4">
                          {new Date(item[heading]).toLocaleDateString()}
                        </td>
                      )
                    case "currency":
                      return (
                        <td key={headingIndex} className="px-2 py-4">
                          {currencyFormat(item[heading])}
                        </td>
                      )
                    default:
                      return (
                        <td key={headingIndex} className="px-2 py-4">
                          {item[heading]}
                        </td>
                      )
                  }
                })}
              </tr>
            ))}
        </tbody>
      </table>

      {/* PAGINATION BOTTOM */}
      {showPagination && renderPagination}
    </>
  )
}
