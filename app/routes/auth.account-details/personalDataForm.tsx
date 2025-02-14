import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const formSchema = z.object({
    first_name: z.string().min(2).max(75),
    last_name: z.string().min(2).max(75),
    avatar: typeof window === 'undefined' ? z.any() : z.instanceof(FileList)
        .refine((file) => file?.length == 1, 'File is required.')
        .refine((files) => files[0]?.size < 5 * 1024 * 1024, {
            message: "File size must be less than 5MB.",
        }),
})

export default function PersonalDataForm({ onSubmited }: Readonly<{ onSubmited: (data: any) => void }>) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            avatar: undefined,
        },
    })

    const fileRef = form.register("avatar");

    function onSubmit(values: z.infer<typeof formSchema>) {
        onSubmited(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <div className="space-y-4">
                    <div className="flex gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>First name</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Last name</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="avatar"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Profile image</FormLabel>
                                <FormControl>
                                    <Input type="file" {...fileRef} onChange={(event) => {
                                        console.log(event.target?.files?.[0]);
                                        field.onChange(event.target?.files?.[0] ?? undefined);
                                    }} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>
                <Button variant={"primary"} className="w-full" type="submit">Next step</Button>
            </form>
        </Form>
    )
}