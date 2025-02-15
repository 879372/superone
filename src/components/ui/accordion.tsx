"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, value, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 bg-white justify-between items-center gap-2 py-4 text-sm transition-all  text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <div className="flex gap-2 w-full whitespace-nowrap">
        <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H16.2525V11.6586" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.2688 13.9636H14.0639" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.77754 6.8396H2.8551V13.9639H5.2899" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5656 4.32568H19.0923L22 7.40545V14.0334H18.3172" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.2534 15.9998C17.2788 15.9998 18.1101 15.1194 18.1101 14.0332C18.1101 12.9471 17.2788 12.0667 16.2534 12.0667C15.2279 12.0667 14.3966 12.9471 14.3966 14.0332C14.3966 15.1194 15.2279 15.9998 16.2534 15.9998Z" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.15191 15.9998C8.17737 15.9998 9.00866 15.1194 9.00866 14.0332C9.00866 12.9471 8.17737 12.0667 7.15191 12.0667C6.12646 12.0667 5.29517 12.9471 5.29517 14.0332C5.29517 15.1194 6.12646 15.9998 7.15191 15.9998Z" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.96045 4.03345H6.57167" stroke="#F47920" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {value ? value: 'Calcule fretes e prazos'}
      </div>
      <ChevronDown className="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400" />
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
