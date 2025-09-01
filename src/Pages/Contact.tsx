"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";

import Lottie from "lottie-react";
import { motion } from "framer-motion";

import emailAnimation from "@/assets/contact-email.json";
import celebration from "../assets/celebration.json";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
});

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .send(
        "service_wesoukk",
        "template_zy7ibgk",
        {
          name: values.name,
          email: values.email,
          description: values.description,
        },
        "oiR3WRt3Bv6xuyYu7"
      )
      .then(
        () => {
          setIsSent(true);
          form.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 container"
    >
      <h2 className="sm:text-6xl text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-500">
        Contact Me
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-bl from-purple-400 to-pink-300 p-10 rounded-xl"
      >
        <div className="rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Lottie Animation (default) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Lottie
                loop
                animationData={emailAnimation}
                className="w-72 h-72 lg:w-96 lg:h-96"
              />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="you@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-500 cursor-pointer rounded-none w-[50%]"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="mt-6">
  <p className="text-center text-lg font-medium text-gray-800">
    Or reach me directly at{" "}
    <a href="tel:+8801647153126" className="text-purple-700 underline">
      +8801647153126
    </a>
  </p>
</div>

      </motion.div>

      {/* ✅ Fullscreen success animation */}
      {isSent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Lottie
            animationData={celebration}
            className="w-full h-full max-w-[600px]"
          />
        </div>
      )}
    </section>
  );
}
