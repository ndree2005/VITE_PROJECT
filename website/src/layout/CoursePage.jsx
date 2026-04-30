import Drawers from "../components/Drawers.jsx";
import {
  ArrowRight,
  CalendarDays,
  CheckCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  Lock,
  Play,
  PlayCircle,
  Sparkles,
  Target,
  Trophy,
  Video,
} from "lucide-react";

const learningGoals = [
  "Menata struktur halaman belajar dengan fokus ke materi utama dan navigasi sesi.",
  "Menampilkan progress course, daftar modul, dan resource tanpa bikin layout terasa penuh.",
  "Menjaga pengalaman mobile tetap nyaman saat sidebar dan konten aktif dipakai.",
];

const quickNotes = [
  "Gunakan hierarchy yang jelas: materi aktif paling dominan, informasi pendukung tetap mudah discan.",
  "Simpan CTA utama dekat area belajar supaya user tidak perlu lompat ke banyak tempat.",
  "Pakai status visual yang konsisten untuk sesi selesai, aktif, dan terkunci.",
];

const lessonQueue = [
  {
    id: "05",
    title: "Membangun learning dashboard yang rapi",
    duration: "32 menit",
    state: "active",
  },
  {
    id: "06",
    title: "Interaksi progress dan status penyelesaian",
    duration: "24 menit",
    state: "done",
  },
  {
    id: "07",
    title: "Menyusun resource panel dan catatan mentor",
    duration: "18 menit",
    state: "upcoming",
  },
  {
    id: "08",
    title: "Optimasi tampilan mobile untuk halaman belajar",
    duration: "27 menit",
    state: "locked",
  },
];

const resourceList = [
  {
    title: "UI checklist halaman belajar",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    title: "Starter component structure",
    type: "ZIP",
    size: "6 files",
  },
  {
    title: "Ringkasan materi dan copy deck",
    type: "DOC",
    size: "1 halaman",
  },
];

const weeklyAgenda = [
  {
    title: "Quiz layout responsiveness",
    schedule: "Selasa, 19.00",
  },
  {
    title: "Mini project course detail page",
    schedule: "Kamis, 20.00",
  },
  {
    title: "Live mentoring review",
    schedule: "Sabtu, 10.00",
  },
];

const lessonStateMap = {
  done: {
    icon: CheckCircle2,
    wrapperClass:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200 hover:border-emerald-300/30",
    iconClass: "bg-emerald-400/15 text-emerald-300",
    label: "Selesai",
  },
  active: {
    icon: PlayCircle,
    wrapperClass:
      "border-violet-400/30 bg-violet-500/15 text-white shadow-lg shadow-violet-950/30",
    iconClass: "bg-violet-400/20 text-violet-200",
    label: "Sedang dipelajari",
  },
  upcoming: {
    icon: ChevronRight,
    wrapperClass:
      "border-white/10 bg-white/5 text-gray-200 hover:border-white/20 hover:bg-white/10",
    iconClass: "bg-white/10 text-gray-300",
    label: "Berikutnya",
  },
  locked: {
    icon: Lock,
    wrapperClass:
      "border-white/10 bg-black/20 text-gray-400 hover:border-white/15",
    iconClass: "bg-white/5 text-gray-500",
    label: "Terkunci",
  },
};

const progressValue = 68;
const completedLessons = lessonQueue.filter(
  (lesson) => lesson.state === "done" || lesson.state === "active",
).length;

const CoursePage = () => {
  return (
    <div className="min-h-screen text-white">
      <Drawers />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <section className="rounded-[28px] border border-white/10 bg-black/25 p-6 backdrop-blur sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-violet-400/30 bg-violet-400/15 px-3 py-1 text-violet-100">
              React Frontend Bootcamp
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200">
              Intermediate
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200">
              Mentor: Kak Dina
            </span>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.8fr)] xl:items-end">
            <div>
              <p className="text-sm text-violet-200">Halaman belajar aktif</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Susun pengalaman belajar yang fokus, rapi, dan enak dipakai.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
                Kita lagi ada di sesi yang fokus ke layout halaman belajar:
                materi utama harus jadi pusat perhatian, sementara progress,
                daftar modul, dan resource tetap gampang diakses.
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="border-l border-violet-400/40 pl-4">
                <dt className="text-sm text-gray-400">Progress course</dt>
                <dd className="mt-1 text-2xl font-semibold">{progressValue}%</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-sm text-gray-400">Materi selesai</dt>
                <dd className="mt-1 text-2xl font-semibold">
                  {completedLessons}/8 sesi
                </dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-sm text-gray-400">Waktu belajar</dt>
                <dd className="mt-1 text-2xl font-semibold">32 menit</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_340px]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30 backdrop-blur">
              <div className="relative aspect-video">
                <img
                  alt="Preview materi belajar"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/65 to-violet-900/35" />

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-violet-300/30 bg-violet-400/15 px-3 py-1 text-xs text-violet-100">
                      Sedang dipelajari
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-black/35"
                    >
                      <CalendarDays className="size-4" />
                      Jadwal ulang
                    </button>
                  </div>

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm text-violet-200">Materi 05</p>
                      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                        Membangun learning dashboard yang enak dipakai
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-gray-200 sm:text-base">
                        Breakdown halaman belajar jadi area konten utama,
                        sidebar materi, dan panel resource supaya flow belajarnya
                        terasa natural dari awal sampai selesai.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex size-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl shadow-black/40 transition hover:scale-105"
                    >
                      <Play className="ml-1 size-6 fill-current" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6 py-5 sm:px-8 sm:py-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                  <span className="inline-flex items-center gap-2">
                    <Video className="size-4 text-violet-200" />
                    Video lesson
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="size-4 text-violet-200" />
                    32 menit
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="size-4 text-violet-200" />
                    Focus UI implementation
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <CheckCheck className="size-4" />
                    Tandai selesai
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
                  >
                    <ArrowRight className="size-4" />
                    Lanjut sesi berikutnya
                  </button>
                </div>
              </div>
            </section>

            <div className="grid gap-6 xl:grid-cols-2">
              <section className="rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-violet-400/15 p-3 text-violet-200">
                    <Target className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tujuan sesi</h3>
                    <p className="text-sm text-gray-400">
                      Yang perlu selesai di halaman ini.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-4">
                  {learningGoals.map((goal) => (
                    <li key={goal} className="flex gap-3 text-sm leading-6 text-gray-200">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-amber-400/15 p-3 text-amber-200">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Catatan mentor</h3>
                    <p className="text-sm text-gray-400">
                      Hal kecil yang bikin UI terasa matang.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-4">
                  {quickNotes.map((note) => (
                    <li key={note} className="flex gap-3 text-sm leading-6 text-gray-200">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-amber-200" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400">Progress course</p>
                  <h2 className="mt-1 text-3xl font-semibold">{progressValue}%</h2>
                </div>
                <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-300">
                  <Trophy className="size-5" />
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${progressValue}%` }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-200">{completedLessons} sesi aktif</span>
                <span className="text-gray-400">Target 3 sesi lagi</span>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">Daftar materi</h3>
                  <p className="text-sm text-gray-400">
                    Pindah sesi tanpa kehilangan konteks.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                  8 sesi
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {lessonQueue.map((lesson) => {
                  const lessonState = lessonStateMap[lesson.state];
                  const Icon = lessonState.icon;

                  return (
                    <li key={lesson.id}>
                      <button
                        type="button"
                        className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${lessonState.wrapperClass}`}
                      >
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${lessonState.iconClass}`}
                        >
                          <Icon className="size-4" />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">
                            {lesson.id}. {lesson.title}
                          </span>
                          <span className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                            <Clock3 className="size-3.5" />
                            {lesson.duration}
                            <span className="text-gray-500">/</span>
                            {lessonState.label}
                          </span>
                        </span>

                        <ChevronRight className="size-4 shrink-0 text-gray-500" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur sm:p-6">
              <h3 className="text-lg font-semibold">Resource sesi</h3>
              <p className="mt-1 text-sm text-gray-400">
                File pendukung yang langsung kepakai saat belajar.
              </p>

              <ul className="mt-5 space-y-3">
                {resourceList.map((resource) => (
                  <li
                    key={resource.title}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">
                        {resource.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {resource.type} / {resource.size}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-gray-200 transition hover:bg-white/10"
                    >
                      <Download className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur sm:p-6">
              <h3 className="text-lg font-semibold">Agenda minggu ini</h3>
              <p className="mt-1 text-sm text-gray-400">
                Biar ritme belajar tetap jalan.
              </p>

              <ul className="mt-5 space-y-4">
                {weeklyAgenda.map((agenda) => (
                  <li key={agenda.title} className="flex gap-3">
                    <div className="mt-1 size-2.5 shrink-0 rounded-full bg-violet-300" />
                    <div>
                      <p className="text-sm font-medium text-white">{agenda.title}</p>
                      <p className="mt-1 text-xs text-gray-400">{agenda.schedule}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default CoursePage;
