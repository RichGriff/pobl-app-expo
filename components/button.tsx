import { Pressable, PressableProps, Text } from "react-native";
import React from "react";
import { cn } from "@/utils";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  theme?: "primary" | "secondary" | "tertiary" | "destructive" ;
  disabled?: boolean;
} & PressableProps;

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({ title, onPress, theme = "primary", disabled, ...rest }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={cn(
        "flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border",
        theme === "primary" && "bg-[#007AFF] border-[#007AFF]",
        theme === "destructive" && "bg-red-500 border-red-500",
        theme === "secondary" && "bg-white border-gray-300",
        theme === "tertiary" && "bg-transparent border-transparent",
        disabled && "opacity-50",
      )}
      disabled={disabled}
      {...rest}
    >
      <Text
        className={cn(
          "font-semibold text-lg tracking-wider",
          theme === "secondary" && "text-black",
          theme === "primary" && "text-white",
          theme === "destructive" && "text-white",
          theme === "tertiary" && "text-gray-800",
        )}
      >
        {title} {disabled}
      </Text>
    </Pressable>
  );
});

Button.displayName = "Button";