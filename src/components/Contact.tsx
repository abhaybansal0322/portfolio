"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Here you would typically send the data to an API
        alert("Message sent! (Check console for data)");
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
                        <div className="text-gray-400">
                            <p className="mb-2">Email: abhaybansal19000@gmail.com</p>
                            <p className="mb-2">Phone: +91 8968916714</p>
                            <p>Location: Patiala, Punjab</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full bg-zinc-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                className="w-full bg-zinc-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">Please enter a valid email</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                rows={4}
                                className="w-full bg-zinc-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
