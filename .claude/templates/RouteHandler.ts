/**
 * API Route Handler 템플릿 (Next.js App Router)
 *
 * 사용법:
 *   1. 파일명: `route.ts`
 *   2. 위치: `app/api/<endpoint-path>/route.ts`
 *   3. 필요한 HTTP 메서드만 export (GET, POST, PUT, PATCH, DELETE)
 *   4. `RESOURCE_NAME` 을 실제 리소스 이름으로 치환
 *
 * 참고: docs/API_SPEC.md
 */

import { NextRequest, NextResponse } from 'next/server'
// import { z } from 'zod'  // 유효성 검사 시 사용

// ─── 유효성 검사 스키마 ───────────────────────────────────────────────────────

// const createRESOURCE_NAMESchema = z.object({
//   name: z.string().min(1, '이름은 필수입니다.'),
//   // TODO: 스키마 정의
// })

// ─── 공통 응답 헬퍼 ───────────────────────────────────────────────────────────

function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status })
}

function errorResponse(code: string, message: string, status: number) {
  return NextResponse.json({ success: false, error: { code, message } }, { status })
}

// ─── GET /api/RESOURCE_NAME ───────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page') ?? 1)
    const limit = Math.min(Number(searchParams.get('limit') ?? 20), 100)

    // TODO: 데이터 조회 로직
    const items: unknown[] = []
    const total = 0

    return NextResponse.json({
      success: true,
      data: items,
      meta: { page, limit, total },
    })
  } catch {
    return errorResponse('INTERNAL_ERROR', '서버 오류가 발생했습니다.', 500)
  }
}

// ─── POST /api/RESOURCE_NAME ──────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // 유효성 검사 (zod 사용 시)
    // const parseResult = createRESOURCE_NAMESchema.safeParse(body)
    // if (!parseResult.success) {
    //   return errorResponse('VALIDATION_ERROR', '입력값이 올바르지 않습니다.', 400)
    // }

    // TODO: 생성 로직
    const created = { id: 'new-id', ...body }

    return successResponse(created, 201)
  } catch {
    return errorResponse('INTERNAL_ERROR', '서버 오류가 발생했습니다.', 500)
  }
}

// ─── Dynamic Route: app/api/RESOURCE_NAME/[id]/route.ts ──────────────────────
// 아래는 [id] 세그먼트가 있는 경우의 패턴 (별도 파일로 분리)

// export async function GET(
//   request: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params
//     // TODO: 단건 조회
//     const item = null
//     if (!item) return errorResponse('NOT_FOUND', '리소스를 찾을 수 없습니다.', 404)
//     return successResponse(item)
//   } catch {
//     return errorResponse('INTERNAL_ERROR', '서버 오류가 발생했습니다.', 500)
//   }
// }

// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params
//     const body = await request.json()
//     // TODO: 수정 로직
//     return successResponse({ id, ...body })
//   } catch {
//     return errorResponse('INTERNAL_ERROR', '서버 오류가 발생했습니다.', 500)
//   }
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params
//     // TODO: 삭제 로직
//     return successResponse(null)
//   } catch {
//     return errorResponse('INTERNAL_ERROR', '서버 오류가 발생했습니다.', 500)
//   }
// }
