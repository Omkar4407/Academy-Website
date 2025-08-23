import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

import blogData from "@/data/blog.json";

export const metadata: Metadata = {
  title: "Blog | Adsmagnify Academy",
  description: "Insights on AI-powered digital marketing, performance marketing, SEO, and more.",
  openGraph: {
    title: "Blog | Adsmagnify Academy",
    description: "Insights on AI-powered digital marketing, performance marketing, SEO, and more.",
    url: "https://adsmagnify.vercel.app/blog"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Adsmagnify Academy",
    description: "Insights on AI-powered digital marketing, performance marketing, SEO, and more."
  }
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-adsmagnify-dark-yellow">Adsmagnify Academy Blog</h1>
            <p className="text-gray-200">Actionable tips and deep-dives on AI marketing, performance marketing, SEO, and growth.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {blogData.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-adsmagnify-yellow text-adsmagnify-blue">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-navy-900 mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button asChild className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
                      <Link href={`/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
