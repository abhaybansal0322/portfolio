"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
            // Sign up at https://www.emailjs.com/
            const SERVICE_ID = "YOUR_SERVICE_ID";
            const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
            const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                PUBLIC_KEY
            );

            console.log("Email sent successfully!");
            setIsSubmitting(false);
            setIsSuccess(true);
            reset();

            // Reset success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setIsSubmitting(false);
            setErrorMessage("Failed to send message. Please check your EmailJS keys.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Let's Work Together
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently available for freelance work or full-time opportunities.
                            If you have a project that needs some creative touch, or just want to say hi,
                            feel free to drop me a message.
                        </p>
                        <div className="text-gray-400 space-y-4">
                            <p className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-cyan-400">✉️</span>
                                abhaybansal19000@gmail.com
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-cyan-400">📱</span>
                                +91 8968916714
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-cyan-400">📍</span>
                                Patiala, Punjab
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                {...register("name", { required: true })}
                                disabled={isSubmitting}
                                className="w-full bg-zinc-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors disabled:opacity-50"
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                disabled={isSubmitting}
                                className="w-full bg-zinc-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors disabled:opacity-50"
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                disabled={isSubmitting}
                                rows={4}
                                className="w-full bg-zinc-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors disabled:opacity-50"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className={`w-full font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                                ${isSuccess
                                    ? "bg-green-500 text-white"
                                    : "bg-white text-black hover:bg-cyan-400"
                                }
                                ${isSubmitting ? "opacity-70 cursor-wait" : ""}
                            `}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : isSuccess ? (
                                <>
                                    <Check size={20} />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
