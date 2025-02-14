import { Button } from "~/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "~/components/ui/input-otp";
import { useNavigate } from "@remix-run/react";

export default function AuthRecoveryRoute() {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

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
                            <Lock size={24} className="z-10" />
                        </div>

                        <div className="flex flex-col w-full gap-3">
                            <h1 className="text-3xl font-semibold font-display leading-9 text-gray-950 w-full text-center">Forgot Your Password?</h1>
                            <p className="text-base text-gray-800 font-sans leading-6 w-full text-center">No worries! Enter your email below, and we’ll send you a one-time code to reset your password.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                        </div>

                        <Button variant={"primary"} className="w-full" onClick={() => steps[step].handle({})}>
                            Send Code
                        </Button>
                    </div>
                </>
            ),
            handle: (data: any) => {
                if (!email || email === "") {
                    toast.error("Email is required.", { description: "Please enter your email address." });
                }
                else {
                    toast.success("Email sent!", {
                        description: <div className="flex flex-col gap-2">
                            <p>We've sent a one-time code to your email address.</p>
                            <pre className="p-3 rounded-sm bg-gray-800 text-white">{JSON.stringify(email)}</pre>
                        </div>
                    });
                    setStep(1);
                }
            },
        },
        {
            render: (
                <>
                    <div className="flex flex-col items-center gap-6 w-full">
                        <div className="size-16 flex items-center justify-center text-white bg-gray-950 rounded-2xl overflow-hidden relative">
                            <div className="size-24 absolute -left-11 -top-11 rounded-full bg-orange-500 blur-xl opacity-75"></div>
                            <div className="size-24 absolute -right-11 -bottom-11 rounded-full bg-violet-500 blur-xl opacity-75"></div>
                            <Lock size={24} className="z-10" />
                        </div>

                        <div className="flex flex-col w-full gap-3">
                            <h1 className="text-3xl font-semibold font-display leading-9 text-gray-950 w-full text-center">Check Your Email for the Code</h1>
                            <p className="text-base text-gray-800 font-sans leading-6 w-full text-center">
                                We’ve sent a one-time code to <span className="text-gray-950 font-semibold">{email}</span>. Enter it below to proceed with resetting your password. (If you don’t see it, please check your spam folder.)
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full items-center">
                        <div className="grid items-center gap-1.5">
                            <Label htmlFor="otp" className="text-center">One-Time Password</Label>
                            <InputOTP id="otp" maxLength={6} onChange={(value) => setOTP(value)}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                        <Button variant={"primary"} className="w-fit" onClick={() => steps[step].handle({})}>
                            Verify Code
                        </Button>
                    </div>
                </>
            ),
            handle: (data: any) => {
                if (!otp || otp === "") {
                    toast.error("OTP is required.", { description: "Please enter the one-time password sent to your email address." });
                }
                else {
                    toast.success("Code verified!", {
                        description: <div className="flex flex-col gap-2">
                            <p>We've verified the one-time code sent to your email address.</p>
                            <pre className="p-3 rounded-sm bg-gray-800 text-white">{JSON.stringify(otp)}</pre>
                        </div>
                    });
                    setStep(2);
                }
            },
        },
        {
            render: (
                <>
                    <div className="flex flex-col items-center gap-6 w-full">
                        <div className="size-16 flex items-center justify-center text-white bg-gray-950 rounded-2xl overflow-hidden relative">
                            <div className="size-24 absolute -left-11 -top-11 rounded-full bg-orange-500 blur-xl opacity-75"></div>
                            <div className="size-24 absolute -right-11 -bottom-11 rounded-full bg-violet-500 blur-xl opacity-75"></div>
                            <Lock size={24} className="z-10" />
                        </div>

                        <div className="flex flex-col w-full gap-3">
                            <h1 className="text-3xl font-semibold font-display leading-9 text-gray-950 w-full text-center">Create a New Password</h1>
                            <p className="text-base text-gray-800 font-sans leading-6 w-full text-center">
                                Enter a new password to secure your account. Make sure it’s strong and unique!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full items-center">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" onChange={(e) => setPassword(e.target.value)} defaultValue={''} />
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="confirmPassword">Confirm password</Label>
                                    <Input type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} defaultValue={''} />
                                </div>
                            </div>

                            <Button variant={"primary"} className="w-full" onClick={() => steps[step].handle({})}>
                                Reset Password
                            </Button>
                        </div>
                    </div>
                </>
            ),
            handle: (data: any) => {

                if (!password || password === "") {
                    toast.error("Password is required.", { description: "Please enter a new password." });
                    return;
                }
                if (!confirmPassword || confirmPassword === "") {
                    toast.error("Confirm password is required.", { description: "Please confirm your new password." });
                    return;
                }
                if (password !== confirmPassword) {
                    toast.error("Passwords do not match.", { description: "Please make sure the passwords match." });
                    return;
                }

                toast.success("Password reset!", {
                    description: <div className="flex flex-col gap-2">
                        <p>Your password has been reset successfully.</p>
                        <pre className="p-3 rounded-sm bg-gray-800 text-white">{JSON.stringify({ password: password, confirm: confirmPassword }, null, 2)}</pre>
                    </div>
                });

                navigate("/auth/login");
            },
        }
    ];

    return (
        <div className="min-h-screen p-6 bg-white grid grid-cols-8 gap-6 items-center relative">
            <Button variant={"outline"} className=" absolute left-6 top-6" onClick={handleBack}>
                <ArrowLeft size={16} />
                Back
            </Button>

            <div className=" col-span-2 col-start-4 flex flex-col items-center gap-12">
                {steps[step].render}
            </div>
        </div>
    );
}