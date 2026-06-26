import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import type { Metadata } from 'next'

const resumePath = '/documents/Joy Muthoka Resume.pdf'

export const metadata: Metadata = {
  title: 'Resume | Joy Muthoka',
  description: 'Joy Muthoka resume — Software Engineer and Technical Project Manager',
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href={resumePath}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <iframe
              src={resumePath}
              title="Joy Muthoka Resume"
              className="w-full h-[calc(100vh-8.5rem)] min-h-[70vh] border-0"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
