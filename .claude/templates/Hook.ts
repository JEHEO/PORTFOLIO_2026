/**
 * 커스텀 Hook 템플릿
 *
 * 사용법:
 *   1. 파일명: `use<HookName>.ts` (camelCase with 'use' prefix)
 *   2. `HookName` 을 실제 훅 이름으로 치환
 *   3. 반환 타입을 명시적으로 정의
 *
 * 위치: `hooks/`
 */

'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// ─── 타입 정의 ────────────────────────────────────────────────────────────────

interface UseHookNameOptions {
  // TODO: 옵션 파라미터 정의
  initialValue?: string
  onSuccess?: (data: HookNameData) => void
  onError?: (error: Error) => void
}

interface HookNameData {
  // TODO: 데이터 타입 정의
  id: string
  value: string
}

interface UseHookNameReturn {
  data: HookNameData | null
  isLoading: boolean
  error: Error | null
  // TODO: 반환 함수/값 추가
  refetch: () => void
}

// ─── Hook 구현 ────────────────────────────────────────────────────────────────

export function useHookName(
  // TODO: 파라미터 정의
  id: string,
  options: UseHookNameOptions = {}
): UseHookNameReturn {
  const { onSuccess, onError } = options

  const [data, setData] = useState<HookNameData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // 최신 콜백 참조 유지 (stale closure 방지)
  const onSuccessRef = useRef(onSuccess)
  const onErrorRef = useRef(onError)
  useEffect(() => {
    onSuccessRef.current = onSuccess
    onErrorRef.current = onError
  })

  const fetchData = useCallback(async () => {
    if (!id) return
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/resource/${id}`)
      if (!res.ok) throw new Error(`요청 실패: ${res.status}`)
      const json = await res.json()
      setData(json.data)
      onSuccessRef.current?.(json.data)
    } catch (e) {
      const err = e instanceof Error ? e : new Error('알 수 없는 오류')
      setError(err)
      onErrorRef.current?.(err)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, isLoading, error, refetch: fetchData }
}
