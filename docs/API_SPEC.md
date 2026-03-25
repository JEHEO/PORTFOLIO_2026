# API_SPEC.md — 서버 API 스펙

> Next.js App Router의 Route Handler 기반 API 명세입니다.
> Swagger/OpenAPI 3.0 컨벤션을 따릅니다.
> Base URL: `/api`

---

## 공통 규칙

### 요청 헤더
```
Content-Type: application/json
Authorization: Bearer <token>   # 인증 필요 엔드포인트
```

### 공통 응답 형식
```json
// 성공
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}

// 실패
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "요청 데이터가 올바르지 않습니다.",
    "details": [ ... ]
  }
}
```

### HTTP 상태 코드
| 코드 | 의미 |
|------|------|
| 200 | 성공 |
| 201 | 생성 성공 |
| 400 | 잘못된 요청 (Validation Error) |
| 401 | 인증 실패 |
| 403 | 권한 없음 |
| 404 | 리소스 없음 |
| 500 | 서버 내부 오류 |

---

## 인증 API

### POST `/api/auth/login`
로그인 처리 및 토큰 발급

**Request Body**
```json
{
  "email": "user@example.com",
  "password": "string"
}
```

**Response 200**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJ...",
    "refreshToken": "eyJ...",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "홍길동",
      "role": "user"
    }
  }
}
```

**Response 401**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "이메일 또는 비밀번호가 올바르지 않습니다."
  }
}
```

---

### POST `/api/auth/logout`
로그아웃 처리 (토큰 무효화)

**Headers:** `Authorization: Bearer <token>` (required)

**Response 200**
```json
{ "success": true, "data": null }
```

---

### POST `/api/auth/refresh`
Access Token 갱신

**Request Body**
```json
{ "refreshToken": "eyJ..." }
```

**Response 200**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJ..."
  }
}
```

---

## 사용자 API

### GET `/api/users`
사용자 목록 조회

**Headers:** `Authorization: Bearer <token>` (required)

**Query Parameters**
| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| page | number | 아니오 | 페이지 번호 (기본값: 1) |
| limit | number | 아니오 | 페이지당 항목 수 (기본값: 20, 최대: 100) |
| search | string | 아니오 | 이름 또는 이메일 검색 |

**Response 200**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "email": "user@example.com",
      "name": "홍길동",
      "role": "user",
      "createdAt": "2026-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 42
  }
}
```

---

### GET `/api/users/[id]`
특정 사용자 조회
> Next.js 파일 경로: `app/api/users/[id]/route.ts` (`:id` 표기는 문서용, 실제 구현은 `[id]` 사용)

**Path Parameters**
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| id | string (uuid) | 사용자 ID |

**Response 200**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "홍길동",
    "role": "user",
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  }
}
```

**Response 404**
```json
{
  "success": false,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "사용자를 찾을 수 없습니다."
  }
}
```

---

### PATCH `/api/users/[id]`
사용자 정보 수정

**Headers:** `Authorization: Bearer <token>` (required)

**Request Body** (부분 업데이트 가능)
```json
{
  "name": "김철수",
  "avatarUrl": "https://..."
}
```

**Response 200**
```json
{
  "success": true,
  "data": { /* 업데이트된 사용자 객체 */ }
}
```

---

### DELETE `/api/users/[id]`
사용자 삭제

**Headers:** `Authorization: Bearer <token>` (required, admin only)

**Response 200**
```json
{ "success": true, "data": null }
```

---

## Route Handler 구현 패턴

```ts
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page') ?? 1)
    const limit = Number(searchParams.get('limit') ?? 20)

    // 데이터 페칭 로직
    const data = await getUsers({ page, limit })

    return NextResponse.json({ success: true, data: data.items, meta: data.meta })
  } catch {
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: '서버 오류가 발생했습니다.' } },
      { status: 500 }
    )
  }
}
```

---

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| v0.1 | 2026-03-25 | 초기 문서 작성 (인증, 사용자 API) |
