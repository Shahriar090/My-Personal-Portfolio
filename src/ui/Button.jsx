import { forwardRef } from "react";
import cn from "../utils/cn";

const Button = forwardRef(({ children, className, variant, ...rest }, ref) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "primary":
        return "btn-primary";

      case "outline":
        return "btn-outline";

      default:
        return "btn-primary";
    }
  };
  return (
    <button ref={ref} {...rest} className={cn(getVariant(variant), className)}>
      {children}
    </button>
  );
});

export default Button;
