import { Button } from "~/components/ui/button";
import { toast } from "sonner";
import RegisterForm from "./registerForm";
import { useNavigate } from "@remix-run/react";

export default function Register() {
    const navigate = useNavigate();

    function handleSubmit(data: any) {
        toast.success("Form has been submited.", {
            description: (<pre className="p-3 rounded-sm bg-gray-800 text-white">{JSON.stringify(data, null, 2)}</pre>),
        })

        navigate("/auth/account-details");
    }

    return (
        <div className="min-h-screen px-6 bg-white grid grid-cols-8 gap-6 items-center">
            {/* Login form */}
            <div className="col-span-2 col-start-2 flex flex-col gap-12 items-center py-12">

                <div className="flex flex-col gap-6 items-center">
                    <img src="/assets/logo.png" alt="Logo" className="size-16 rounded-sm" />

                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-3xl font-semibold font-display leading-9 text-gray-950 w-full text-center">Join Snaga and Empower Your Productivity</h1>
                        <p className="text-base text-gray-800 font-sans leading-6 w-full text-center">Create an account and take control of your projects, time tracking, and team management—all in one place. </p>
                    </div>

                    <div className="flex gap-4 w-full flex-wrap justify-center">
                        <Button variant={"outline"} className="min-w-[100px] flex-1">
                            <span>Google</span>
                            <img src="/assets/logos/flat-color-icons_google.svg" alt="Google logo" />
                        </Button>

                        <Button variant={"outline"} className="min-w-[100px] flex-1">
                            <span>GitHub</span>
                            <img src="/assets/logos/mdi_github.svg" alt="GitHub logo" />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                    <p className="text-sm leading-4 text-gray-950">Or use email instead</p>
                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                </div>

                <RegisterForm onSubmited={handleSubmit} />

                <p className="text-sm text-gray-800 leading-5 w-full text-center">
                    Already have an account? <span><a href="/auth/login" className="text-violet-500 hover:underline font-semibold">Log In</a></span> and continue your journey with Snaga.
                </p>
            </div>

            {/* Image */}
            <div className="col-span-4 col-start-5 h-full -mr-6">
                <img className="h-full object-cover rounded-l-2xl" src="https://images.unsplash.com/photo-1567283280655-41ac70c3ce46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
            </div>
        </div>
    )
}