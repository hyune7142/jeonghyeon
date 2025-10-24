import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
// 플러그인
import importPlugin from 'eslint-plugin-import'; // import 순서 / 중복 / 정렬 관리
import reactHooks from 'eslint-plugin-react-hooks'; // React Hook 규칙 검사
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier, ESLint에 통합
import prettierConfig from 'eslint-config-prettier'; // ESLint, Prettier 충돌 규칙 비활성화
import unusedImports from 'eslint-plugin-unused-imports'; // 미사용 import 자동 감지

// 현재 파일 경로 설정 (ESM 환경 대응)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat: 기존 .eslintrc 형식을 Flat Config로 호환
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// 최종 ESLint 설정
const eslintConfig = [
  // Next.js 기본 규칙과 TypeScript 규칙 상속
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Prettier 설정 확장 (ESLint의 포맷 관련 규칙 비활성화)
  prettierConfig,
  {
    // 사용 플러그인 등록
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
    },
    // 주요 규칙 설정
    rules: {
      // Prettier 포맷팅 규칙 (코드 스타일 통일)
      'prettier/prettier': [
        'error',
        {
          printWidth: 100, // 한 줄 최대 길이
          tabWidth: 2, // 탭 간격
          singleQuote: true, // 홑따옴표 사용
          trailingComma: 'es5', // 마지막 쉼표 사용 (ES5 호환)
          useTabs: false, // 스페이스 사용
          arrowParens: 'avoid', // 화살표 함수 괄호 생략
          bracketSpacing: true, // 객체 중괄호 공백 유지
          bracketSameLine: false, // JSX 닫는 괄호 줄바꿈
          endOfLine: 'auto', // OS에 맞는 개행 문자
        },
      ],
      // import 순서 정리 및 그룹화
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']], // import 그룹 순서
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'], // 중복 그룹에서 제외
          'newlines-between': 'always', // 그룹 사이에 빈 줄 추가
          alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순 정렬
        },
      ],
      // 중복 import 방지
      'import/no-duplicates': 'error',
      // import 경로 해석은 TS가 처리하므로 비활성화
      'import/no-unresolved': 'off',
      // React Hook 규칙 강화 (useEffect, useCallback 등)
      'react-hooks/rules-of-hooks': 'error', // 훅은 함수형 컴포넌트나 커스텀 훅에서만 사용 가능
      'react-hooks/exhaustive-deps': 'warn', // 의존성 배열 누락 경고
      // 불필요한 import 제거
      'unused-imports/no-unused-imports': 'error',
      // 사용하지 않는 변수 경고 (단, _로 시작하는 변수는 무시)
      'no-unused-vars': 'off', // 기본 no-unused-vars 비활성화
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }, // _prefix는 허용
      ],
      // 콘솔 사용 제한 (warn, error만 허용)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // var 금지 / const 권장
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  // TypeScript 경로(alias) 해석 지원 설정
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // tsconfig.json을 기준으로 @/* 경로 인식
        },
      },
    },
  },
  // ESLint 검사 제외 경로
  {
    ignores: [
      'node_modules/**', // 외부 라이브러리
      '.next/**', // Next 빌드 결과물
      'out/**', // export된 결과물
      'build/**', // 빌드 폴더
      'next-env.d.ts', // Next 자동 생성 타입
      'coverage/**', // 테스트 커버리지 결과
      '**/*.config.ts', // 구성 파일
      '**/*.config.js', // 구성 파일
      '**/*.config.mjs', // 구성 파일
    ],
  },
];

export default eslintConfig;
