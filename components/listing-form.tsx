"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { categories } from "@/data/listings";
import { generatePrompt } from "@/lib/prompt-builder";

interface FormData {
  title: string;
  description: string;
  price: number;
  condition: "New" | "Like New" | "Good" | "Fair";
  category: string;
  location: string;
  badges: string;
  tags: string;
}

export function ListingForm() {
  const form = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      condition: "Good",
      category: categories[0]?.value ?? "Textbooks",
      location: "",
      badges: "",
      tags: ""
    }
  });
  const [aiPrompt, setAiPrompt] = useState<string>("");

  const onSubmit = form.handleSubmit((data) => {
    const prompt = generatePrompt({
      ...data,
      badges: data.badges.split(",").map((badge) => badge.trim()).filter(Boolean),
      tags: data.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
    });
    setAiPrompt(prompt);
  });

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Title">
          <input
            {...form.register("title", { required: true })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="Grade 8 Physics Textbook"
          />
        </Field>
        <Field label="Location">
          <input
            {...form.register("location", { required: true })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="Mogadishu"
          />
        </Field>
        <Field label="Category">
          <select
            {...form.register("category", { required: true })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Condition">
          <select
            {...form.register("condition", { required: true })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            {(["New", "Like New", "Good", "Fair"] as const).map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Price (USD)">
          <input
            type="number"
            step="0.01"
            min={0}
            {...form.register("price", { valueAsNumber: true, required: true })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="25"
          />
        </Field>
        <Field label="Badges (comma separated)">
          <input
            {...form.register("badges")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="Trusted Seller, STEM Verified"
          />
        </Field>
      </div>
      <Field label="Description">
        <textarea
          {...form.register("description", { required: true })}
          className="min-h-[140px] w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          placeholder="Explain the item, condition, grade levels, and any extras included"
        />
      </Field>
      <Field label="Tags (comma separated)">
        <input
          {...form.register("tags")}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          placeholder="grade8, science, curriculum"
        />
      </Field>
      <button
        type="submit"
        className="w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
      >
        Generate Google AI Studio prompt
      </button>
      {aiPrompt ? (
        <div className="space-y-4 rounded-3xl border border-primary-200 bg-primary-50 p-6">
          <div>
            <p className="text-sm font-semibold text-primary-700">Copy this prompt into aistudio.google.com</p>
            <p className="text-xs text-primary-600">
              Use it with the Gemini app builder to auto-generate listing copy, Firebase integrations, and logistics workflows.
            </p>
          </div>
          <pre className="max-h-96 overflow-auto whitespace-pre-wrap rounded-2xl bg-white p-4 text-sm text-slate-800">
{aiPrompt}
          </pre>
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      {label}
      {children}
    </label>
  );
}
