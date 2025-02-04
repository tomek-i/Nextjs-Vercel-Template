import { cva } from "class-variance-authority";

export const TableVariants = cva(
  "",
  {
    variants: {
      variant: {
        default:
          "text-white bg-blue-600 border-blue-700  hover:bg-blue-700 focus:ring-blue-500",
        disabled:
          "text-gray-400 bg-gray-100 hover:bg-gray-100 cursor-not-allowed",
       
      },
      size: {
        default: "w-full px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
