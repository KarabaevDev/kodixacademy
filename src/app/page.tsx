import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Award, Users, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-violet-950/20 to-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Жаңы курстар ачык!
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Коддоону үйрөнүң
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                келечекти түзүң
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-zinc-400 max-w-2xl mb-10">
              Заманбап веб-иштеп чыгууну нөлдөн баштап үйрөнүң. 
              Практикалык долбоорлор менен чыныгы көндүмдөргө ээ болуң.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="group">
                Баштоо
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Play className="w-5 h-5 mr-2" />
                Демо көрүү
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              {[
                { icon: BookOpen, value: "50+", label: "Курстар" },
                { icon: Users, value: "10K+", label: "Студенттер" },
                { icon: Award, value: "100%", label: "Сертификат" },
                { icon: Code2, value: "24/7", label: "Колдоо" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
                  <stat.icon className="w-6 h-6 text-violet-400 mb-2" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Эмне үчүн бизди тандоо керек?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Биздин платформа сизге заманбап технологияларды үйрөнүү үчүн бардык шарттарды түзөт
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Практикалык сабактар",
                description: "Ар бир тема боюнча реалдуу долбоорлор менен иштөө",
                gradient: "from-violet-600 to-purple-600",
              },
              {
                title: "Жеке ментордук",
                description: "Тажрыйбалуу менторлордон жеке колдоо алыңыз",
                gradient: "from-indigo-600 to-blue-600",
              },
              {
                title: "Сертификаттар",
                description: "Курсту аяктагандан кийин расмий сертификат алыңыз",
                gradient: "from-purple-600 to-pink-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Популярдуу курстар
              </h2>
              <p className="text-zinc-400">Эң көп тандалган багыттар</p>
            </div>
            <Link href="/courses">
              <Button variant="ghost" className="text-violet-400 hover:text-violet-300">
                Бардыгын көрүү
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Frontend Development", students: "2.4K", color: "from-violet-600 to-indigo-600" },
              { title: "Backend Development", students: "1.8K", color: "from-emerald-600 to-teal-600" },
              { title: "Fullstack Development", students: "3.1K", color: "from-orange-600 to-red-600" },
            ].map((course, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className={`h-32 bg-gradient-to-br ${course.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{course.students} студент</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Бүгүн эле баштаңыз!
              </h2>
              <p className="text-violet-100 mb-8 max-w-xl mx-auto">
                Акысыз катталып, биринчи сабактан баштаңыз. Эч кандай кредиттик карта талап кылынбайт.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-zinc-100">
                  Акысыз баштоо
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Бааларды көрүү
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
