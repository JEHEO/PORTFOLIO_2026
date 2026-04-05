/**
 * ViewModel 템플릿
 *
 * 사용법:
 *   1. 파일명: `<FeatureName>ViewModel.ts`
 *   2. `FEATURE_NAME` 을 실제 기능 이름으로 치환
 *   3. State, Action 타입 정의 후 로직 구현
 *
 * 위치: `lib/viewmodels/` 또는 각 feature 폴더 내
 */

'use client'

import { useState, useCallback } from 'react'

// ─── 타입 정의 ────────────────────────────────────────────────────────────────

interface FEATURE_NAMEState {
  data: FEATURE_NAMEData | null
  isLoading: boolean
  error: string | null
}

interface FEATURE_NAMEData {
  id: string
  // TODO: 필드 추가
}

interface FEATURE_NAMEViewModel {
  state: FEATURE_NAMEState
  actions: {
    load: (id: string) => Promise<void>
    reset: () => void
    // TODO: 액션 추가
  }
}

// ─── 초기 상태 ────────────────────────────────────────────────────────────────

const initialState: FEATURE_NAMEState = {
  data: null,
  isLoading: false,
  error: null,
}

// ─── ViewModel Hook ───────────────────────────────────────────────────────────

export function useFEATURE_NAMEViewModel(): FEATURE_NAMEViewModel {
  const [state, setState] = useState<FEATURE_NAMEState>(initialState)

  const load = useCallback(async (id: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }))
    try {
      const res = await fetch(`/api/FEATURE_NAME/${id}`)
      if (!res.ok) throw new Error('데이터를 불러오지 못했습니다.')
      const json = await res.json()
      setState(prev => ({ ...prev, data: json.data, isLoading: false }))
    } catch (e) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: e instanceof Error ? e.message : '알 수 없는 오류',
      }))
    }
  }, [])

  const reset = useCallback(() => {
    setState(initialState)
  }, [])

  return {
    state,
    actions: { load, reset },
  }
}
