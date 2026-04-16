/**
 * Screen (Page) 컴포넌트 템플릿
 *
 * 사용법:
 *   1. 파일명: `page.tsx` (App Router 라우트 세그먼트 내)
 *   2. `SCREEN_NAME` 을 실제 화면 이름으로 치환
 *   3. 필요에 따라 Server / Client 방식 선택
 *
 * 위치: `app/<route-segment>/page.tsx`
 */

import React from 'react'
import type { Metadata } from 'next'
// import { SCREEN_NAMEViewModel } from '@/lib/viewmodels/SCREEN_NAMEViewModel'

// ─── 메타데이터 (SEO) ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'SCREEN_NAME | Portfolio',
  description: 'SCREEN_NAME 페이지 설명을 입력하세요.',
}

// ─── 서버 데이터 페칭 ─────────────────────────────────────────────────────────

async function getData() {
  // TODO: 서버 사이드 데이터 페칭 로직
  // const res = await fetch(`${process.env.API_URL}/endpoint`, {
  //   next: { revalidate: 60 },
  // })
  // if (!res.ok) throw new Error('Failed to fetch data')
  // return res.json()
  return null
}

// ─── Page 컴포넌트 (Server Component 기본) ────────────────────────────────────

interface SCREEN_NAMEPageProps {
  params: Promise<{ id?: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SCREEN_NAMEPage({
  params,
  searchParams,
}: SCREEN_NAMEPageProps) {

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">SCREEN_NAME</h1>
          <p className="mt-1 text-sm text-gray-500">페이지 설명을 입력하세요.</p>
        </div>

        {/* Content */}
        <section className="rounded-lg bg-white p-6 shadow">
          {/* TODO: 화면 콘텐츠 구현 */}
          <p className="text-gray-500">콘텐츠 영역</p>
        </section>
      </div>
    </main>
  )
}
