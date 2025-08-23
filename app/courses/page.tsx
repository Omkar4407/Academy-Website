import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, Clock, Users, MapPin, Award } from "lucide-react";

import coursesData from "@/data/courses.json";

export const metadata: Metadata = {
  title: "Courses | Adsmagnify Academy",
  description: "Hands-on AI-powered digital marketing courses in Churchgate, Mumbai. Small batches, live projects, and shadow internship included.",
  openGraph: {
    title: "Courses | Adsmagnify Academy",
    description: "Hands-on AI-powered digital marketing courses in Churchgate, Mumbai.",
    url: "https://adsmagnify.vercel.app/courses"
  }
};

export default function CoursesIndexPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-adsmagnify-dark-yellow">AI-Powered Digital Marketing Courses</h1>
            <p className="text-xl text-gray-300">Weekend batches in Churchgate, Mumbai. Only 4 students per batch with live projects and shadow internship included.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {coursesData.map((course) => (
              <Card key={course.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-navy-900">{course.name}</CardTitle>
                    <Badge className="bg-adsmagnify-yellow text-adsmagnify-blue">{course.mode}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{course.overview}</p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-adsmagnify-yellow" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-adsmagnify-yellow" />
                      <span>4 Students Only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-adsmagnify-yellow" />
                      <span>Churchgate, Mumbai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-adsmagnify-yellow" />
                      <span>Certificate Included</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-2xl font-bold">
                      <IndianRupee className="h-6 w-6" />
                      {course.priceINR.toLocaleString()}
                    </div>

                    <Button asChild className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
                      <Link href={`/courses/${course.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
