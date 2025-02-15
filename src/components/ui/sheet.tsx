"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white border-t-8 border-t-[#F47920] p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-neutral-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-6 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      <div className="flex items-start gap-4">

      <svg width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.9745 0C32.9745 0.0237841 32.976 0.0490545 32.976 0.0728386C32.976 6.32212 27.8137 11.3896 21.4473 11.3896C15.0794 11.3896 9.9186 6.32361 9.9186 0.0728386C9.9186 0.0490545 9.91861 0.0237841 9.92012 0H0.00150816C0.00150816 0.0237841 0 0.0490545 0 0.0728386C0 11.6988 9.60322 21.1248 21.4473 21.1248C33.2929 21.1248 42.8946 11.7003 42.8946 0.0728386C42.8946 0.0490545 42.8931 0.0237841 42.8931 0H32.9745Z" fill="#F47920" />
      </svg>
      <svg width="237" height="19" viewBox="0 0 237 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10L119 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M119 10L228 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <circle cx="9.5" cy="9.5" r="9.5" fill="#F47920" />
        <path d="M7.31183 13L7.31183 11.872L9.01583 11.872L9.01583 6.856L7.61183 6.856L7.61183 5.992C7.98783 5.92 8.31583 5.836 8.59583 5.74C8.87583 5.636 9.13583 5.512 9.37583 5.368L10.4078 5.368L10.4078 11.872L11.9078 11.872L11.9078 13L7.31183 13Z" fill="white" />
        <circle cx="118.5" cy="9.5" r="9.5" fill="white" />
        <path d="M115.88 13L115.88 12.148C116.584 11.492 117.192 10.896 117.704 10.36C118.224 9.816 118.624 9.324 118.904 8.884C119.192 8.436 119.336 8.02 119.336 7.636C119.336 7.228 119.228 6.908 119.012 6.676C118.804 6.436 118.492 6.316 118.076 6.316C117.78 6.316 117.508 6.4 117.26 6.568C117.02 6.736 116.796 6.936 116.588 7.168L115.844 6.436C116.188 6.052 116.548 5.756 116.924 5.548C117.3 5.332 117.744 5.224 118.256 5.224C118.744 5.224 119.168 5.32 119.528 5.512C119.888 5.704 120.168 5.976 120.368 6.328C120.568 6.672 120.668 7.08 120.668 7.552C120.668 8.024 120.536 8.492 120.272 8.956C120.016 9.42 119.668 9.896 119.228 10.384C118.788 10.864 118.3 11.372 117.764 11.908C117.964 11.884 118.18 11.864 118.412 11.848C118.652 11.832 118.864 11.824 119.048 11.824L121.04 11.824L121.04 13L115.88 13Z" fill="#D4D4D4" />
        <circle cx="227.5" cy="9.5" r="9.5" fill="white" />
        <path d="M227.304 13.144C226.896 13.144 226.528 13.096 226.2 13C225.88 12.904 225.596 12.776 225.348 12.616C225.1 12.448 224.888 12.264 224.712 12.064L225.372 11.176C225.604 11.408 225.868 11.608 226.164 11.776C226.46 11.936 226.8 12.016 227.184 12.016C227.6 12.016 227.936 11.916 228.192 11.716C228.456 11.508 228.588 11.224 228.588 10.864C228.588 10.6 228.52 10.372 228.384 10.18C228.256 9.988 228.028 9.84 227.7 9.736C227.38 9.624 226.928 9.568 226.344 9.568L226.344 8.56C226.848 8.56 227.244 8.508 227.532 8.404C227.82 8.292 228.024 8.148 228.144 7.972C228.272 7.788 228.336 7.576 228.336 7.336C228.336 7.016 228.236 6.768 228.036 6.592C227.836 6.408 227.56 6.316 227.208 6.316C226.912 6.316 226.64 6.384 226.392 6.52C226.144 6.648 225.904 6.82 225.672 7.036L224.964 6.184C225.292 5.896 225.644 5.664 226.02 5.488C226.396 5.312 226.808 5.224 227.256 5.224C227.744 5.224 228.172 5.304 228.54 5.464C228.908 5.616 229.196 5.844 229.404 6.148C229.62 6.444 229.728 6.808 229.728 7.24C229.728 7.664 229.608 8.02 229.368 8.308C229.136 8.596 228.812 8.824 228.396 8.992L228.396 9.04C228.692 9.12 228.96 9.244 229.2 9.412C229.44 9.58 229.628 9.792 229.764 10.048C229.908 10.304 229.98 10.6 229.98 10.936C229.98 11.4 229.856 11.8 229.608 12.136C229.368 12.464 229.044 12.716 228.636 12.892C228.236 13.06 227.792 13.144 227.304 13.144Z" fill="#D4D4D4" />
      </svg>
      </div>

      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left ",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-neutral-950 dark:text-neutral-50", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
