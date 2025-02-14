import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Lock, Smile } from "lucide-react";
import PersonalDataForm from "./personalDataForm";
import { toast } from "sonner";
import { set } from "react-hook-form";

export default function AccountDetailsRoute() {
    const [step, setStep] = useState(0);

    function handleBack() {
        if (step === 0) {
            window.history.back();
        }
        else {
            setStep(step - 1);
        }
    }

    const steps = [
        {
            render: (
                <>
                    <div className="flex flex-col items-center gap-6 w-full">
                        <div className="size-16 flex items-center justify-center text-white bg-gray-950 rounded-2xl overflow-hidden relative">
                            <div className="size-24 absolute -left-11 -top-11 rounded-full bg-orange-500 blur-xl opacity-75"></div>
                            <div className="size-24 absolute -right-11 -bottom-11 rounded-full bg-violet-500 blur-xl opacity-75"></div>
                            <Smile size={24} className="z-10" />
                        </div>

                        <div className="flex flex-col w-full gap-3">
                            <h1 className="text-3xl font-semibold font-display leading-9 text-gray-950 w-full text-center">Let’s Get to Know You</h1>
                            <p className="text-base text-gray-800 font-sans leading-6 w-full text-center">Tell us a bit about yourself! Enter your name and upload an avatar to personalize your Snaga account. This helps your team members recognize you across workspaces.</p>
                        </div>
                    </div>

                    <PersonalDataForm onSubmited={(data: any) => {
                        toast.success("Personal data saved!", {
                            description: <div className="flex items-center gap-2">
                                <p>Your personal data has been saved successfully.</p>
                                <pre className="p-3 rounded-sm bg-gray-800 text-white">{JSON.stringify(data, null, 2)}</pre>
                            </div>
                        });
                        setStep(1);
                    }} />
                </>
            )
        }
    ];

    return (
        <div className="min-h-screen p-6 bg-white grid grid-cols-8 gap-6 items-center relative">
            <Button variant={"outline"} className=" absolute left-6 top-6" onClick={handleBack}>
                <ArrowLeft size={16} />
                Back
            </Button>

            <div className="flex flex-col col-span-2 col-start-4 gap-8">
                {steps[step].render}
            </div>
        </div>
    );
}