import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "../lib/utils"

// Types for DropdownMenuContent with custom props
interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  align?: "start" | "end" | "center" // Removed "stretch"
  side?: "top" | "bottom" | "left" | "right"
}

// The DropdownMenu component itself
const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

// DropdownMenuContent component with custom align/side properties
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, align = "start", side = "bottom", ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    align={align}
    side={side}
    sideOffset={4}
    className={cn(
      "z-50 w-48 overflow-hidden rounded-md border border-white/10 bg-slate-800/50 backdrop-blur-sm text-white shadow-lg shadow-black/20 animate-slide-in-1",
      className
    )}
    {...props}
  />
))

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// Define DropdownMenuItemProps to accept `inset`
interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean
}

// DropdownMenuItem component with `inset` support
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center py-2 px-4 text-sm text-white/80 hover:text-white/100 focus:outline-none focus:ring-2 focus:ring-blue-400/30",
      inset && "pl-8", // Apply left padding if `inset` is true
      className
    )}
    {...props}
  />
))

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

// DropdownMenuLabel component
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-4 py-2 text-xs font-semibold text-white/60", className)}
    {...props}
  />
))

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

// DropdownMenuSeparator component
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("my-1 h-px bg-white/10", className)}
    {...props}
  />
))

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

// Exporting all components
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
}
