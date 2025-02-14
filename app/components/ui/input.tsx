import * as React from "react"
import { cn } from "~/lib/utils"
import { EyeClosed, Eye } from 'lucide-react';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false)

		return (
			<div className={cn(type === "password" && "relative")}>
				<input
					type={
						type === "password" && showPassword
							? "text"
							: type === "password"
								? "password"
								: type
					}
					className={cn(
						"flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-800 dark:file:text-gray-50 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
						className
					)}
					ref={ref}
					{...props}
				/>
				{type === "password" && (
					<div className=" absolute right-0 top-0 h-full flex items-center pr-3 cursor-pointer hover:opacity-75" onClick={() => setShowPassword(!showPassword)}>

						{showPassword ?
							<Eye size={16} /> :
							<EyeClosed size={16} />
						}

					</div>
				)}
			</div>
		)
	}
)
Input.displayName = "Input"

export { Input }
